// Prayas 2.0 — App Logic
let currentYear = 2026;
let currentMonth = 5; // 0-indexed, June
let currentView = 'calendar';
let activeFilter = 'all';
let activeSubFilter = 'all';

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const SHORT_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// All months that have tests
const TEST_MONTHS = [
  {y:2026,m:5},{y:2026,m:6},{y:2026,m:7},{y:2026,m:8},
  {y:2026,m:9},{y:2026,m:10},{y:2026,m:11},
  {y:2027,m:0},{y:2027,m:1},{y:2027,m:2},{y:2027,m:3},{y:2027,m:4}
];

// Cached "today" — computed once, reused everywhere to avoid repeated Date construction
const TODAY = new Date();
TODAY.setHours(0,0,0,0);
const TODAY_TIME = TODAY.getTime();

// Pre-parse test dates once instead of re-parsing on every render
TESTS.forEach(t => {
  const d = new Date(t.date);
  t._dateObj = d;
  t._time = d.getTime();
});

// Precompute month key -> tests for fast lookup (avoids re-filtering TESTS repeatedly)
const MONTH_TEST_MAP = {};
TESTS.forEach(t => {
  const d = t._dateObj;
  const key = `${d.getFullYear()}-${d.getMonth()}`;
  if (!MONTH_TEST_MAP[key]) MONTH_TEST_MAP[key] = [];
  MONTH_TEST_MAP[key].push(t);
});

function init() {
  // Determine starting month before any rendering
  const upcoming = TESTS.filter(t => t._time >= TODAY_TIME).sort((a,b)=>a._time-b._time);
  if (upcoming.length) {
    const d = new Date(upcoming[0].date);
    currentYear = d.getFullYear();
    currentMonth = d.getMonth();
  }

  updateStats();
  renderMonthStrip();
  renderCalendar();
  renderTimeline();
  renderSubjects();
  updateNextTestPill();

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

function updateStats() {
  const upcoming = TESTS.filter(t => t._time >= TODAY_TIME);
  document.getElementById('stat-total').textContent = TESTS.length;
  document.getElementById('stat-upcoming').textContent = upcoming.length;

  const lastTestTime = new Date("2027-05-17").getTime();
  const daysLeft = Math.ceil((lastTestTime - TODAY_TIME) / 86400000);
  document.getElementById('stat-days').textContent = daysLeft > 0 ? daysLeft : 0;
}

function updateNextTestPill() {
  const next = TESTS.filter(t => t._time >= TODAY_TIME).sort((a,b)=>a._time-b._time)[0];
  if (next) {
    const days = Math.ceil((next._time - TODAY_TIME) / 86400000);
    const pill = document.getElementById('next-test-pill');
    const daysEl = document.getElementById('next-test-days');
    if (days === 0) {
      daysEl.textContent = 'TODAY';
      pill.classList.add('today');
    } else {
      daysEl.textContent = `${days}d — ${next.name}`;
    }
  }
}

function renderMonthStrip() {
  const strip = document.getElementById('month-strip');
  strip.innerHTML = TEST_MONTHS.map(({y,m}) => {
    const isActive = y === currentYear && m === currentMonth;
    const hasTests = !!MONTH_TEST_MAP[`${y}-${m}`];
    return `<button class="month-chip ${isActive ? 'active' : ''}" onclick="jumpToMonth(${y},${m})">
      <span class="month-chip-name">${SHORT_MONTHS[m]}</span>
      ${hasTests ? `<span class="month-chip-dot"></span>` : ''}
    </button>`;
  }).join('');
}

function jumpToMonth(y, m) {
  currentYear = y;
  currentMonth = m;
  renderCalendar();
  renderMonthStrip();
}

function renderCalendar() {
  const title = document.getElementById('month-title');
  title.textContent = `${MONTH_NAMES[currentMonth]} ${currentYear}`;

  const monthTests = MONTH_TEST_MAP[`${currentYear}-${currentMonth}`] || [];
  document.getElementById('month-test-count').textContent =
    monthTests.length === 0 ? 'No tests this month' :
    monthTests.length === 1 ? '1 test this month' :
    `${monthTests.length} tests this month`;

  const grid = document.getElementById('calendar-grid');
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth+1, 0).getDate();
  const monthStartTime = new Date(currentYear, currentMonth, 1).getTime();
  const msPerDay = 86400000;

  let html = '';
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-cell empty"></div>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const cellTime = monthStartTime + (d - 1) * msPerDay;
    const tests = DATE_MAP[dateStr] || [];
    const isToday = cellTime === TODAY_TIME;
    const isPast = cellTime < TODAY_TIME;
    const dow = (firstDay + d - 1) % 7;
    const isWeekend = dow === 0 || dow === 6;

    let dotsHtml = '';
    if (tests.length) {
      dotsHtml = `<div class="cal-dots">${tests.map(t => `<span class="cal-dot" style="background:${TYPE_COLORS[t.type].accent}"></span>`).join('')}</div>`;
    }

    const classes = ['cal-cell',
      tests.length ? 'has-test' : '',
      isToday ? 'today' : '',
      isPast ? 'past' : '',
      isWeekend ? 'weekend' : ''
    ].filter(Boolean).join(' ');

    html += `<div class="${classes}" ${tests.length ? `onclick="openTestsOnDate('${dateStr}')"` : ''}>
      <span class="cal-num">${d}</span>
      ${dotsHtml}
      ${tests.length ? `<span class="cal-test-name">${tests[0].name}</span>` : ''}
    </div>`;
  }
  grid.innerHTML = html;

  // Render month test cards
  renderMonthTests(monthTests);
}

function renderMonthTests(tests) {
  const container = document.getElementById('month-tests');
  if (!tests.length) {
    container.innerHTML = `<div class="empty-state">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.3"><rect x="4" y="5" width="24" height="22" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M10 2v6M22 2v6M4 12h24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      <p>No tests scheduled this month</p>
    </div>`;
    return;
  }
  container.innerHTML = `<div class="month-tests-label">Tests this month</div>` +
    tests.map(t => buildTestCard(t, 'horizontal')).join('');
}

function buildTestCard(t, variant = 'default') {
  const c = TYPE_COLORS[t.type];
  const d = t._dateObj;
  const days = Math.ceil((t._time - TODAY_TIME) / 86400000);
  const isPast = t._time < TODAY_TIME;
  const isToday = t._time === TODAY_TIME;

  const countdown = isPast
    ? `<span class="countdown past">Done</span>`
    : isToday
    ? `<span class="countdown today-badge">Today</span>`
    : `<span class="countdown">${days}d</span>`;

  const dateLabel = d.toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric', weekday:'short'});

  return `<div class="test-card ${variant} ${isPast ? 'past' : ''}" onclick="openTestDetail(${t.id})" style="--accent:${c.accent};--accent-bg:${c.bg}">
    <div class="test-card-left">
      <div class="test-badge" style="background:${c.bg};color:${c.accent}">${c.label}</div>
      <div class="test-name">${t.name}</div>
      <div class="test-date-str">${dateLabel}</div>
    </div>
    <div class="test-card-right">
      ${countdown}
      <div class="test-pattern">${t.pattern}</div>
    </div>
  </div>`;
}

function renderTimeline() {
  updateTimelineFilter(activeFilter);
}

function updateTimelineFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('#filter-pills .filter-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === filter);
  });

  let filtered;
  if (filter === 'all') filtered = TESTS;
  else if (filter === 'AITS') filtered = TESTS.filter(t => t.type.startsWith('AITS'));
  else filtered = TESTS.filter(t => t.type === filter);

  // Group by month
  const groups = {};
  filtered.forEach(t => {
    const d = t._dateObj;
    const key = `${d.getFullYear()}-${String(d.getMonth()).padStart(2,'0')}`;
    if (!groups[key]) groups[key] = { label: `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`, tests: [] };
    groups[key].tests.push(t);
  });

  const container = document.getElementById('timeline-list');
  container.innerHTML = Object.entries(groups).sort().map(([,g]) =>
    `<div class="timeline-group">
      <div class="tl-month-label">${g.label}</div>
      <div class="tl-cards">${g.tests.map(t => buildTestCard(t)).join('')}</div>
    </div>`
  ).join('');
}

function setFilter(f) { updateTimelineFilter(f); }

function renderSubjects() {
  updateSubjectsFilter('all');
}

function updateSubjectsFilter(subFilter) {
  activeSubFilter = subFilter;
  document.querySelectorAll('[data-subfilter]').forEach(p => {
    p.classList.toggle('active', p.dataset.subfilter === subFilter);
  });

  const subjects = subFilter === 'all'
    ? ['Physics', 'Chemistry', 'Maths']
    : [subFilter];

  const container = document.getElementById('subjects-list');
  let html = '';

  subjects.forEach(sub => {
    const subKey = sub.toLowerCase();
    // Collect all unique topics
    const topicMap = {};
    TESTS.forEach(t => {
      const topics = t[subKey === 'maths' ? 'maths' : subKey];
      if (!topics) return;
      topics.forEach(topic => {
        const clean = topic.replace(/\s*\(Complete Chapter\)/gi, '').trim();
        const base = clean.split(' — ')[0].trim().split(':')[0].trim().split(',')[0].trim();
        if (!topicMap[base]) topicMap[base] = { tests: [], full: topic };
        topicMap[base].tests.push(t);
      });
    });

    html += `<div class="subject-section">
      <div class="subject-header">
        <span class="subject-icon">${sub === 'Physics' ? '⚛' : sub === 'Chemistry' ? '🧪' : '∑'}</span>
        <span class="subject-title">${sub}</span>
        <span class="subject-count">${Object.keys(topicMap).length} topics</span>
      </div>
      <div class="topic-grid">
        ${Object.entries(topicMap).map(([topic, data]) => {
          const c = TYPE_COLORS[data.tests[data.tests.length-1].type];
          return `<div class="topic-chip" style="--t-accent:${c.accent}" onclick="openTestDetail(${data.tests[data.tests.length-1].id})">
            <span class="topic-name">${topic}</span>
            <span class="topic-test-badge" style="color:${c.accent}">${data.tests[0].name}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });

  container.innerHTML = html;
}

function setSubFilter(f) { updateSubjectsFilter(f); }

function openTestsOnDate(dateStr) {
  const tests = DATE_MAP[dateStr] || [];
  if (tests.length === 1) { openTestDetail(tests[0].id); return; }
  // multi test on same date (unlikely but handled)
  openTestDetail(tests[0].id);
}

function openTestDetail(id) {
  const t = TESTS.find(x => x.id === id);
  if (!t) return;

  const c = TYPE_COLORS[t.type];
  const d = t._dateObj;
  const days = Math.ceil((t._time - TODAY_TIME) / 86400000);
  const isPast = t._time < TODAY_TIME;
  const isToday = t._time === TODAY_TIME;

  const dateStr = d.toLocaleDateString('en-IN', {weekday:'long', day:'numeric', month:'long', year:'numeric'});

  let countdownHtml = '';
  if (isToday) countdownHtml = `<div class="detail-countdown today-glow">TEST DAY</div>`;
  else if (isPast) countdownHtml = `<div class="detail-countdown past-dim">Completed</div>`;
  else countdownHtml = `<div class="detail-countdown" style="color:${c.accent}">${days} days away</div>`;

  const subjectSection = (label, emoji, items) => {
    if (!items || !items.length) return '';
    return `<div class="detail-subject">
      <div class="detail-subject-header">
        <span class="detail-subj-icon">${emoji}</span>
        <span class="detail-subj-name">${label}</span>
        <span class="detail-subj-count">${items.length} topic${items.length > 1 ? 's' : ''}</span>
      </div>
      <ul class="detail-topics">
        ${items.map(item => `<li>${item.replace(/\s*\(Complete Chapter\)/gi, '').trim()}</li>`).join('')}
      </ul>
    </div>`;
  };

  document.getElementById('drawer-content').innerHTML = `
    <div class="detail-top" style="border-color:${c.accent}">
      <div class="detail-badge" style="background:${c.bg};color:${c.accent}">${t.type} · ${t.testType}</div>
      <h2 class="detail-name">${t.name}</h2>
      <div class="detail-date">${dateStr}</div>
      <div class="detail-meta">
        <span class="meta-pill" style="background:${c.bg};color:${c.accent}">Pattern: ${t.pattern}</span>
        ${countdownHtml}
      </div>
    </div>
    <div class="detail-subjects">
      ${subjectSection('Physics', '⚛', t.physics)}
      ${subjectSection('Chemistry', '🧪', t.chemistry)}
      ${subjectSection('Mathematics', '∑', t.maths)}
    </div>
  `;

  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}

function setView(v) {
  currentView = v;
  document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.getElementById(`view-${v}`).classList.add('active');
  document.querySelector(`[data-view="${v}"]`).classList.add('active');

  const labels = { calendar: 'Calendar View', timeline: 'All Tests', subjects: 'By Subject' };
  document.getElementById('breadcrumb').textContent = labels[v];

  if (window.innerWidth < 768) {
    document.getElementById('sidebar').classList.remove('open');
  }
}

function prevMonth() {
  const idx = TEST_MONTHS.findIndex(m => m.y === currentYear && m.m === currentMonth);
  if (idx > 0) {
    const {y,m} = TEST_MONTHS[idx-1];
    currentYear = y; currentMonth = m;
  } else {
    if (currentMonth === 0) { currentMonth = 11; currentYear--; }
    else currentMonth--;
  }
  renderCalendar();
  renderMonthStrip();
}

function nextMonth() {
  const idx = TEST_MONTHS.findIndex(m => m.y === currentYear && m.m === currentMonth);
  if (idx >= 0 && idx < TEST_MONTHS.length - 1) {
    const {y,m} = TEST_MONTHS[idx+1];
    currentYear = y; currentMonth = m;
  } else {
    if (currentMonth === 11) { currentMonth = 0; currentYear++; }
    else currentMonth++;
  }
  renderCalendar();
  renderMonthStrip();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  if (window.innerWidth < 768 && sidebar.classList.contains('open')) {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  }
});

// Keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
  if (e.key === 'ArrowLeft' && currentView === 'calendar') prevMonth();
  if (e.key === 'ArrowRight' && currentView === 'calendar') nextMonth();
});

// Touch swipe for calendar
let touchStartX = 0;
document.getElementById('view-calendar')?.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
}, {passive:true});
document.getElementById('view-calendar')?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) {
    if (dx < 0) nextMonth(); else prevMonth();
  }
}, {passive:true});

init();
