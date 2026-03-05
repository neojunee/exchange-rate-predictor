// ===== 환율 예측 서비스 — Phase 6 UI =====

var data = null;
var selectedCurrency = 'USD';

var CURRENCY_NAMES = {
  USD: '미국 달러',
  EUR: '유로',
  JPY: '일본 엔',
  KRW: '한국 원'
};

// 데이터 불러오기 + 초기 렌더링
async function loadData() {
  var response = await fetch('./data/data.json');
  data = await response.json();
  render();
  setupTabs();
  setupCalculator();
}

// 전체 렌더링
function render() {
  var rate = getRateFor(selectedCurrency);
  renderRateCard(rate);
  renderPrediction(data.predictions[selectedCurrency]);
  renderChart(data.rate_history[selectedCurrency]);
  updateCalculator();
  document.getElementById('chart-title').textContent =
    '최근 7일 환율 추이 (' + selectedCurrency + '/KRW)';
}

// 선택된 통화의 환율 데이터 가져오기
function getRateFor(currency) {
  return data.exchange_rates.find(function(r) {
    return r.base_currency === currency;
  });
}

// 환율 카드 렌더링 (등락폭 포함)
function renderRateCard(rate) {
  var change = rate.rate - rate.prev_rate;
  var isUp = change >= 0;
  var arrow = isUp ? '▲' : '▼';
  var changeClass = isUp ? 'up' : 'down';
  var changeText = arrow + ' ' + Math.abs(change).toFixed(2);

  document.getElementById('rate-card-wrap').innerHTML = `
    <div class="rate-card">
      <div class="rate-card__left">
        <div class="rate-card__currencies">
          ${CURRENCY_NAMES[rate.base_currency]} → ${CURRENCY_NAMES[rate.target_currency]}
          &nbsp;(${rate.base_currency}/${rate.target_currency})
        </div>
        <div>
          <span class="rate-card__value">${rate.rate.toLocaleString()}</span>
          <span class="rate-card__unit">KRW</span>
        </div>
        <div class="rate-card__date">기준일: ${rate.date}</div>
      </div>
      <div class="rate-card__right">
        <div class="rate-change ${changeClass}">${changeText}</div>
        <div class="rate-change__label">전일 대비</div>
      </div>
    </div>
  `;
}

// 예측 카드 렌더링
function renderPrediction(prediction) {
  var isUp = prediction.direction === 'up';
  var arrow = isUp ? '▲' : '▼';
  var dirClass = isUp ? 'up' : 'down';
  var badgeClass = isUp ? 'badge-up' : 'badge-down';
  var dirLabel = isUp ? '상승 예측' : '하락 예측';

  document.getElementById('prediction-card').innerHTML = `
    <div>
      <div class="prediction-card__label">
        ${prediction.forecast_period}일 후 예측 환율
        (${prediction.base_currency}/${prediction.target_currency})
      </div>
      <div class="prediction-card__value ${dirClass}">
        ${arrow} ${prediction.predicted_rate.toLocaleString()} KRW
      </div>
      <span class="prediction-card__badge ${badgeClass}">${dirLabel}</span>
    </div>
    <div>
      <div class="prediction-card__label">예측 신뢰도</div>
      <div style="font-size:28px;font-weight:700;">${prediction.confidence}%</div>
      <div class="confidence-bar">
        <div class="confidence-bar__fill" style="width:${prediction.confidence}%"></div>
      </div>
      <div class="prediction-card__confidence">AI 모델 기반 예측</div>
    </div>
  `;
}

// 통화 탭 이벤트
function setupTabs() {
  document.getElementById('currency-tabs').addEventListener('click', function(e) {
    var tab = e.target.closest('.tab');
    if (!tab) return;
    document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');
    selectedCurrency = tab.dataset.currency;
    render();
  });
}

// 환율 계산기
function setupCalculator() {
  document.getElementById('calc-input').addEventListener('input', updateCalculator);
}

function updateCalculator() {
  var rate = getRateFor(selectedCurrency);
  var input = parseFloat(document.getElementById('calc-input').value) || 0;
  var result = input * rate.rate;
  document.getElementById('calc-result').textContent =
    result.toLocaleString('ko-KR', { maximumFractionDigits: 0 }) + ' 원';
  document.getElementById('calc-base-label').textContent = selectedCurrency + ' 금액';
}

// 차트 렌더링
function renderChart(history) {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth || 720;
  canvas.height = 220;

  var W = canvas.width, H = canvas.height;
  var pad = { top: 20, right: 20, bottom: 40, left: 70 };
  var rates = history.map(function(h) { return h.rate; });
  var minRate = Math.min.apply(null, rates) - (rates[0] * 0.002);
  var maxRate = Math.max.apply(null, rates) + (rates[0] * 0.002);
  var chartW = W - pad.left - pad.right;
  var chartH = H - pad.top - pad.bottom;

  function xPos(i) { return pad.left + (i / (history.length - 1)) * chartW; }
  function yPos(r) { return pad.top + (1 - (r - minRate) / (maxRate - minRate)) * chartH; }

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);

  // 그리드
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  for (var g = 0; g <= 4; g++) {
    var gy = pad.top + (g / 4) * chartH;
    ctx.beginPath(); ctx.moveTo(pad.left, gy); ctx.lineTo(W - pad.right, gy); ctx.stroke();
    var label = (maxRate - (g / 4) * (maxRate - minRate)).toFixed(selectedCurrency === 'JPY' ? 2 : 0);
    ctx.fillStyle = '#94a3b8'; ctx.font = '11px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText(label, pad.left - 8, gy + 4);
  }
  ctx.setLineDash([]);

  // 면적 그라디언트
  var grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
  grad.addColorStop(0, 'rgba(79,70,229,0.2)');
  grad.addColorStop(1, 'rgba(79,70,229,0)');
  ctx.beginPath();
  ctx.moveTo(xPos(0), yPos(rates[0]));
  for (var i = 1; i < history.length; i++) { ctx.lineTo(xPos(i), yPos(rates[i])); }
  ctx.lineTo(xPos(history.length - 1), H - pad.bottom);
  ctx.lineTo(xPos(0), H - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = grad; ctx.fill();

  // 선
  ctx.beginPath();
  ctx.moveTo(xPos(0), yPos(rates[0]));
  for (var j = 1; j < history.length; j++) { ctx.lineTo(xPos(j), yPos(rates[j])); }
  ctx.strokeStyle = '#4f46e5'; ctx.lineWidth = 2.5; ctx.stroke();

  // 포인트 + X축
  for (var k = 0; k < history.length; k++) {
    ctx.beginPath();
    ctx.arc(xPos(k), yPos(rates[k]), 4, 0, Math.PI * 2);
    ctx.fillStyle = '#4f46e5'; ctx.fill();
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.stroke();

    ctx.fillStyle = '#94a3b8'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(history[k].date.slice(5), xPos(k), H - pad.bottom + 16);
  }
}

loadData();
