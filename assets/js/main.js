/* OLIVA clinic — интерактив прототипа */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const IMG = 'assets/img/';
const PHONE = '+7 (000) 123-45-67';
const TG_URL = 'https://t.me/oliva_clinic_bot';
const WA_URL = 'https://wa.me/79010972164';

const ICON = {
  tg: '<svg viewBox="0 0 24 24"><path d="M21.5 4.2 18.4 19c-.2 1-.9 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2L6.4 12.9 1.8 11.5c-1-.3-1-1 .2-1.5L20.2 3c.8-.3 1.6.2 1.3 1.2z"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M12 2.6a9.4 9.4 0 0 0-8.1 14.2L2.6 21.4l4.7-1.2A9.4 9.4 0 1 0 12 2.6z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.2 7.4c.2 0 .5 0 .6.4l.8 1.9c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.4.8 1 1.5 1.7 2 .5.4 1 .7 1.6.9.2.1.4 0 .5-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.4 0 .6-.2 1.2-.7 1.6-.6.5-1.4.7-2.2.5-1.5-.4-2.9-1.2-4-2.3-1-1-1.9-2.2-2.3-3.6-.3-.9 0-1.9.7-2.6.2-.3.4-.4.6-.4z" fill="#fff"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>',
};

/* ---------- shared layout ---------- */
function header() {
  const p = location.pathname.split('/').pop() || 'index.html';
  const a = (href, t) => `<a href="${href}" class="${p === href ? 'active' : ''}">${t}</a>`;
  return `
  <header class="hdr" id="hdr"><div class="wrap">
    <button class="burger" aria-label="Меню" data-menu><i></i><i></i><i></i></button>
    <div class="center">
      <nav>${a('prices.html', 'Услуги и цены')}${a('index.html#hammam', 'Хаммам и СПА')}</nav>
      <a href="index.html" class="logo"><img src="${IMG}oliva-full-white.png" alt="OLIVA clinic"></a>
      <nav>${a('index.html#promos', 'Акции')}${a('index.html#reviews', 'Отзывы')}</nav>
    </div>
    <div class="right">
      <div class="contact"><b>${PHONE}</b>ул. Цветочная, 12</div>
      <div class="socials"><a class="soc" href="${TG_URL}" target="_blank" rel="noopener" aria-label="Telegram">${ICON.tg}</a><a class="soc" href="${WA_URL}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a></div>
    </div>
    <div class="callwrap"><button class="call" type="button" aria-label="Связаться с клиникой" aria-expanded="false" aria-controls="callMenu" data-callmenu>${ICON.phone}</button>
      <div class="callmenu" id="callMenu" hidden>
        <a href="${TG_URL}" target="_blank" rel="noopener"><i class="ci tg">${ICON.tg}</i><span><b>Telegram</b><small>@oliva_clinic_bot</small></span></a>
        <a href="${WA_URL}" target="_blank" rel="noopener"><i class="ci wa">${ICON.wa}</i><span><b>WhatsApp</b><small>Написать в чат</small></span></a>
        <a href="tel:+70001234567"><i class="ci tel">${ICON.phone}</i><span><b>${PHONE}</b><small>Позвонить</small></span></a>
      </div>
    </div>
  </div></header>
  <div class="mmenu" id="mmenu">
    <div class="top"><img src="${IMG}oliva-full-white.png" alt=""><button class="close" data-menu>✕</button></div>
    <nav><a href="index.html">Главная</a><a href="prices.html">Услуги и цены</a><a href="category-injections.html">Инъекции</a><a href="index.html#hammam">Хаммам и СПА</a><a href="index.html#promos">Акции</a><a href="index.html#reviews">Отзывы</a><a href="index.html#contacts">Контакты</a></nav>
    <div class="bottom"><a class="btn btn-white" href="#" data-book>Записаться на приём</a><a class="btn btn-ghost" href="tel:+70001234567">${PHONE}</a></div>
  </div>`;
}

function footer() {
  const col = (h, items) => `<div><h4>${h}</h4><ul>${items.map(i => `<li><a href="${i[1] || 'prices.html'}">${i[0] || i}</a></li>`).join('')}</ul></div>`;
  return `
  <footer class="ftr"><div class="wrap">
    <div class="top">
      <div class="brand"><img src="${IMG}oliva-full-white.png" alt="OLIVA clinic"><p>${PHONE}<br>Краснодар, ул. Цветочная, 12<br>Ежедневно 09:00–20:00</p></div>
      ${col('Инъекции', [['Ботулинотерапия', 'service-botox.html'], ['Контурная пластика', 'category-injections.html'], ['Биоревитализация', 'category-injections.html'], ['Коллагеностимуляция', 'category-injections.html'], ['Нитевой лифтинг', 'category-injections.html']])}
      ${col('Аппараты и лазеры', [['Morpheus 8', 'prices.html#c-morpheus-8'], ['Lasest', 'prices.html#c-lasest'], ['Lumecca', 'prices.html#c-lumecca'], ['Heleo 4', 'prices.html#c-heleo-4'], ['Face Tite, BodyTite', 'prices.html#c-apparatnaya-kosmetologiya']])}
      ${col('Уход и здоровье', [['Уходовые процедуры', 'prices.html#c-uhodovye-protsedury'], ['IV-терапия', 'prices.html#c-iv-terapiya'], ['Гинекология', 'prices.html#c-ginekologiya']])}
      ${col('Массаж и СПА', [['Массаж', 'prices.html#c-massazh'], ['Аппаратный массаж', 'prices.html#c-apparatnyy-massazh'], ['Детский массаж', 'prices.html#c-detskiy-massazh'], ['Хаммам', 'index.html#hammam']])}
    </div>
    <div class="bot"><span>© 2026 Oliva Clinic</span><span>Политика конфиденциальности</span></div>
  </div></footer>`;
}

function chatUi() {
  return `
  <button class="chat-btn" id="chatBtn"><span class="ava"><img src="${IMG}oliva-mark-white.png" alt=""></span><span><b>ИИ-косметолог</b><small>выбери процедуру онлайн</small></span></button>
  <div class="chat" id="chat">
    <div class="head"><span class="ava"><img src="${IMG}oliva-mark-white.png" alt=""></span><div><b>ИИ-косметолог</b><small>Oliva Clinic · отвечает сразу</small></div><button class="x" id="chatX">✕</button></div>
    <div class="body" id="chatBody"></div>
    <div class="foot"><form id="chatForm"><input placeholder="Напишите вопрос…" autocomplete="off"><button>↑</button></form><small>Не ставит диагноз. Окончательное решение — за врачом.</small></div>
  </div>
  <div class="modal" id="bookModal"><div class="box">
    <button class="x" data-close>✕</button>
    <div class="form-wrap">
      <h3>Запись на приём</h3><p class="muted">Администратор перезвонит в течение 15 минут, подберёт время и специалиста.</p>
      <form class="bookform" novalidate>
        <input class="field" name="name" placeholder="Имя" required>
        <input class="field" name="phone" placeholder="Телефон" inputmode="tel" required>
        <select class="field" name="svc"><option>Консультация врача</option><option>Ботулинотерапия</option><option>Контурная пластика</option><option>Биоревитализация</option><option>Аппаратная косметология</option><option>Уход за лицом</option><option>IV-терапия</option><option>Массаж</option><option>Хаммам и СПА</option></select>
        <button class="btn btn-ol" style="width:100%;margin-top:6px">Записаться</button>
      </form>
      <small class="muted">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</small>
    </div>
    <div class="ok"><div class="circle" style="color:#fff">✓</div><h3>Заявка принята!</h3><p class="muted">Администратор перезвонит вам в течение 15 минут и подберёт удобное время.</p><button class="btn btn-ol" data-close>Хорошо</button></div>
  </div></div>
  <div class="modal" id="certModal"><div class="box">
    <button class="x" data-close>✕</button>
    <h3>Подарочный сертификат</h3>
    <p class="muted">Сертификат на любую сумму или конкретную процедуру. Оформляется за 5 минут в клинике или онлайн, действует 6 месяцев.</p>
    <div class="chips"><button class="chip" data-amount>3 000 ₽</button><button class="chip" data-amount>5 000 ₽</button><button class="chip main" data-amount>10 000 ₽</button><button class="chip" data-amount>Хаммам для двоих</button></div>
    <button class="btn btn-ol" data-book="Подарочный сертификат" style="margin-top:8px">Оформить сертификат</button>
  </div></div>
  <div class="lightbox" id="lb"><img alt=""><button class="x">✕</button><button class="lp">←</button><button class="ln">→</button></div>
  <div class="toast" id="toast"></div>`;
}

function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 2600); }

/* ---------- forms ---------- */
function phoneMask(input) {
  input.addEventListener('input', () => {
    let d = input.value.replace(/\D/g, '');
    if (d.startsWith('8')) d = '7' + d.slice(1);
    if (!d.startsWith('7')) d = '7' + d;
    d = d.slice(0, 11);
    const p = [d.slice(1, 4), d.slice(4, 7), d.slice(7, 9), d.slice(9, 11)];
    input.value = '+7' + (p[0] ? ` (${p[0]}` : '') + (p[0].length === 3 ? ')' : '') + (p[1] ? ` ${p[1]}` : '') + (p[2] ? `-${p[2]}` : '') + (p[3] ? `-${p[3]}` : '');
  });
}
function bindForms() {
  $$('input[name=phone]').forEach(phoneMask);
  $$('.bookform').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    $$('[required]', f).forEach(i => {
      const bad = i.name === 'phone' ? i.value.replace(/\D/g, '').length < 11 : !i.value.trim();
      i.classList.toggle('err', bad); if (bad) ok = false;
    });
    if (!ok) return toast('Проверьте имя и телефон');
    const box = f.closest('.box, .booking');
    if (box) { $('.form-wrap', box).style.display = 'none'; $('.ok', box).style.display = 'flex'; }
  }));
}
function openBook(svc) {
  const m = $('#bookModal'); $('.form-wrap', m).style.display = ''; $('.ok', m).style.display = 'none';
  const s = $('select', m); $$('option[data-auto]', s).forEach(o => o.remove()); s.selectedIndex = 0;
  if (svc) {
    let o = [...s.options].find(o => o.text === svc);
    if (!o) { o = new Option(svc, svc); o.dataset.auto = ''; s.add(o, 0); }
    s.value = o.value;
  }
  closeModals(); m.classList.add('open'); $('#chat').classList.remove('open');
}
function closeModals() { $$('.modal').forEach(m => m.classList.remove('open')); }

/* ---------- chat bot ---------- */
const BOT = {
  topics: {
    'Морщины и мимика': ['Ботулинотерапия, 1 зона', '6 900', 'Разглаживает мимические морщины лба, межбровья и вокруг глаз', 'Ботулинотерапия в технике Full Face', '30 000', 'Комплексная коррекция мимики всего лица'],
    'Потеря овала': ['Morpheus 8, лицо', '57 800', 'Микроигольчатый RF-лифтинг: подтягивает овал и кожу', 'Лифтинг Нефертити', '17 000', 'Чёткий овал и шея ботулотоксином'],
    'Акне и постакне': ['Акне терапия', '7 700', 'Комплексная уходовая программа против воспалений', 'Лечение акне лазером (лицо)', '500', 'Lasest 1064 — работает с воспалениями'],
    'Сосуды и пигментация': ['Lumecca, лицо', '13 500', 'Фотоомоложение IPL — пигмент и покраснения', 'Лазерное удаление сосудов, 1 зона', '3 000', 'Lasest 1064 — точечно по сосудам'],
    'Увлажнение и сияние': ['Биоревитализация Biohyalux', '5 000', 'Глубокое увлажнение и сияние кожи', 'Мезотерапия Mesoten Aqualight', '7 500', 'Коктейль для тонуса и свежести'],
    'Фигура и тело': ['Массаж R-Sleek, 10 сеансов', '24 300', 'Аппаратный массаж для контуров тела', 'Липолитики Biogel Стройность', '22 000', 'Коррекция локальных отложений'],
    'Отдых и СПА': ['Хаммам СПА на 1 человека', '6 600', 'Хаммам с мозаикой, пилинг и уход', 'СПА на 2 человека', '11 000', 'Программа для двоих'],
  },
  keys: [[/морщ|мимик|ботокс|лоб|межбров/i, 'Морщины и мимика'], [/овал|подтяж|дряб|лифт/i, 'Потеря овала'], [/акне|прыщ|постакне|воспал/i, 'Акне и постакне'], [/сосуд|пигмент|пятн|покрасн|купероз/i, 'Сосуды и пигментация'], [/сух|увлаж|сиян|тусл/i, 'Увлажнение и сияние'], [/живот|бок|фигур|целлюл|тело|похуд/i, 'Фигура и тело'], [/хаммам|спа|отдох|расслаб|массаж/i, 'Отдых и СПА']],
};
let chatStarted = false;
function botMsg(html, delay = 600) {
  const body = $('#chatBody');
  const t = document.createElement('div'); t.className = 'msg'; t.innerHTML = `<span class="ava"><img src="${IMG}oliva-mark-white.png" alt=""></span><div class="bubble typing"><span></span><span></span><span></span></div>`;
  body.appendChild(t); body.scrollTop = body.scrollHeight;
  return new Promise(r => setTimeout(() => { t.innerHTML = `<span class="ava"><img src="${IMG}oliva-mark-white.png" alt=""></span><div>${html}</div>`; body.scrollTop = body.scrollHeight; r(); }, delay));
}
function meMsg(t) { const m = document.createElement('div'); m.className = 'msg me'; m.innerHTML = `<div class="bubble">${t}</div>`; $('#chatBody').appendChild(m); $('#chatBody').scrollTop = 1e6; }
const chipRow = (arr, mainFirst) => `<div class="chips">${arr.map((c, i) => `<button class="chip ${mainFirst && i === 0 ? 'main' : ''}" data-chip="${c}">${c}</button>`).join('')}</div>`;
async function startChat() {
  if (chatStarted) return; chatStarted = true;
  await botMsg(`<div class="bubble">Здравствуйте! Я ИИ-косметолог Oliva Clinic. Расскажите, что беспокоит, или выберите тему — подберу процедуры из прайса и подскажу цены.</div>${chipRow(Object.keys(BOT.topics))}`, 500);
}
async function answerTopic(topic) {
  const p = BOT.topics[topic];
  const cards = [0, 3].map(i => `<div class="pcard"><b>${p[i]}</b><span class="muted">${p[i + 2]}</span><div class="pr"><span>от ${p[i + 1]} ₽</span><a href="#" data-book="${p[i]}">Записаться →</a></div></div>`).join('');
  await botMsg(`<div class="bubble">Под вашу задачу в клинике есть:</div><div class="pcards">${cards}</div><div class="bubble" style="margin-top:8px;font-size:12px;color:var(--mut)">Сочетание и количество процедур подберёт врач после осмотра.</div>${chipRow(['Записаться на консультацию', 'Есть противопоказания?', 'Другая тема'], true)}`, 900);
}
async function chatInput(text) {
  meMsg(text);
  if (/запис|консульт/i.test(text)) { await botMsg('<div class="bubble">Открываю форму записи — администратор перезвонит в течение 15 минут.</div>', 500); return openBook('Консультация врача'); }
  if (/противопоказ/i.test(text)) return botMsg(`<div class="bubble">Общие противопоказания: беременность и лактация, острые воспаления в зоне процедуры, обострение хронических заболеваний, онкология. Точно скажет врач на консультации.</div>${chipRow(['Записаться на консультацию', 'Другая тема'], true)}`);
  if (/друг/i.test(text)) return botMsg(`<div class="bubble">Конечно! Выберите тему:</div>${chipRow(Object.keys(BOT.topics))}`);
  if (/цен|прайс|стоим|сколько/i.test(text)) return botMsg(`<div class="bubble">Все 219 процедур с ценами — на странице прайса. Или назовите проблему, и я подберу конкретные процедуры.</div><div class="chips"><a class="chip main" href="prices.html">Открыть прайс</a></div>`);
  if (BOT.topics[text]) return answerTopic(text);
  const hit = BOT.keys.find(([re]) => re.test(text));
  if (hit) return answerTopic(hit[1]);
  return botMsg(`<div class="bubble">Чтобы подобрать точнее, выберите ближайшую тему или опишите проблему другими словами:</div>${chipRow(Object.keys(BOT.topics))}`);
}
function bindChat() {
  const chat = $('#chat');
  $('#chatBtn').onclick = () => { chat.classList.add('open'); startChat(); };
  $('#chatX').onclick = () => chat.classList.remove('open');
  $('#chatForm').onsubmit = e => { e.preventDefault(); const i = $('input', e.target); if (i.value.trim()) { chatInput(i.value.trim()); i.value = ''; } };
  $('#chatBody').addEventListener('click', e => { const c = e.target.closest('[data-chip]'); if (c) chatInput(c.dataset.chip); });
}

/* ---------- global clicks ---------- */
function bindGlobal() {
  const callMenu = $('#callMenu'), callBtn = $('[data-callmenu]');
  const setCall = open => { if (!callMenu) return; callMenu.hidden = !open; callBtn.setAttribute('aria-expanded', open); };
  document.addEventListener('click', e => {
    if (e.target.closest('[data-callmenu]')) return setCall(callMenu.hidden);
    if (callMenu && !callMenu.hidden && !e.target.closest('#callMenu')) setCall(false);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setCall(false); });
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-book],[data-menu],[data-close],[data-toast],[data-cert],[data-chat],[data-amount]');
    if (!t) { if (e.target.classList.contains('modal')) closeModals(); return; }
    if (t.hasAttribute('data-book')) { e.preventDefault(); $('#mmenu').classList.remove('open'); openBook(t.dataset.book); }
    if (t.hasAttribute('data-menu')) $('#mmenu').classList.toggle('open');
    if (t.hasAttribute('data-close')) closeModals();
    if (t.hasAttribute('data-toast')) { e.preventDefault(); toast(t.dataset.toast); }
    if (t.hasAttribute('data-cert')) { e.preventDefault(); closeModals(); $('#certModal').classList.add('open'); }
    if (t.hasAttribute('data-chat')) { e.preventDefault(); $('#chat').classList.add('open'); startChat(); }
    if (t.hasAttribute('data-amount')) { $$('[data-amount]').forEach(b => b.classList.remove('main')); t.classList.add('main'); }
  });
  $$('#mmenu nav a').forEach(a => a.addEventListener('click', () => $('#mmenu').classList.remove('open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModals(); $('#chat').classList.remove('open'); $('#lb')?.classList.remove('open'); } });
  const hdr = $('#hdr');
  const onScroll = () => hdr.classList.toggle('solid', scrollY > 40);
  if (!document.body.classList.contains('inner')) { onScroll(); addEventListener('scroll', onScroll, { passive: true }); }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .12 });
  $$('.rv').forEach(el => io.observe(el));
}

/* ---------- home modules ---------- */
function heroSlider() {
  const slides = $$('.hero .slide'); if (!slides.length) return;
  const bars = $$('.hero .bar'); const DUR = 6000, LEAD = 1.2, SLIDE = 1600;
  const mobile = matchMedia('(max-width:760px)').matches;
  const noVideo = matchMedia('(prefers-reduced-motion: reduce)').matches || (navigator.connection && navigator.connection.saveData);
  const vids = slides.map(sl => $('video', sl));
  const load = k => { const v = vids[k]; if (noVideo || !v || v.src) return; v.src = mobile ? v.dataset.m : v.dataset.d; v.preload = 'auto'; v.load(); };
  vids.forEach(v => v && v.addEventListener('playing', () => v.classList.add('ready')));
  let i = -1, t0 = 0, last = 0, raf;
  const next = () => show(i + 1);
  const tick = () => {
    const now = performance.now(); if (last && now - last > 500) t0 += now - last; last = now;
    const v = vids[i], el = now - t0;
    const live = v && v.src && !v.paused && v.duration;
    const end = live ? v.duration - LEAD : (DUR / 1000 - LEAD);
    const p = Math.min((live ? v.currentTime : el / 1000) / end, 1);
    $('i', bars[i]).style.width = (p * 100) + '%';
    if (p >= 1 || (live && v.ended) || el > DUR * 2) return next();
    raf = requestAnimationFrame(tick);
  };
  const show = n => {
    cancelAnimationFrame(raf);
    const prev = i; i = (n + slides.length) % slides.length;
    if (prev >= 0 && prev !== i) {
      const ps = slides[prev]; ps.classList.remove('on'); ps.classList.add('out');
      setTimeout(() => { ps.style.transition = 'none'; ps.classList.remove('out'); void ps.offsetWidth; ps.style.transition = ''; const pv = vids[prev]; if (pv) { pv.pause(); pv.currentTime = 0; } }, SLIDE + 50);
    }
    slides[i].classList.add('on');
    bars.forEach((b, k) => { b.classList.toggle('done', k < i); $('i', b).style.width = k < i ? '100%' : '0'; });
    load(i); load((i + 1) % slides.length);
    const v = vids[i];
    if (v && v.src) { v.currentTime = 0; v.loop = false; const pr = v.play(); if (pr) pr.catch(() => {}); }
    t0 = performance.now(); last = 0; raf = requestAnimationFrame(tick);
  };
  bars.forEach((b, k) => b.onclick = () => show(k));
  document.addEventListener('visibilitychange', () => { const v = vids[i]; if (!document.hidden && v && v.src && v.paused && !v.ended) { const pr = v.play(); if (pr) pr.catch(() => {}); } });
  show(0);
}

function flipTimer(root, deadline) {
  const units = $$('.tile', root);
  const build = el => { el.innerHTML = `<div class="half top"><span></span></div><div class="half bot"><span></span></div><div class="flap"><span></span></div>`; };
  units.forEach(build);
  const set = (el, v) => {
    if (el.dataset.v === v) return;
    const old = el.dataset.v ?? v;
    el.querySelector('.top span').textContent = v; el.querySelector('.flap span').textContent = old;
    el.querySelector('.bot span').textContent = old;
    el.classList.remove('go'); void el.offsetWidth; el.classList.add('go');
    setTimeout(() => { el.querySelector('.bot span').textContent = v; }, 540);
    el.dataset.v = v;
  };
  const tick = () => {
    let s = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
    const v = [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60].map(n => String(n).padStart(2, '0'));
    units.forEach((u, k) => set(u, v[k]));
  };
  tick(); setInterval(tick, 1000);
}

function promoSlider() {
  const sl = $$('.pslide'); if (!sl.length) return;
  let i = 0, tm;
  const show = n => {
    const prev = sl[i]; if (sl[(n + sl.length) % sl.length] !== prev) { prev.classList.add('prev'); setTimeout(() => prev.classList.remove('prev'), 750); } prev.classList.remove('on'); i = (n + sl.length) % sl.length; sl[i].classList.add('on');
    $$('.pdots').forEach(d => $$('i', d).forEach((x, k) => x.classList.toggle('on', k === i)));
    clearTimeout(tm); tm = setTimeout(() => show(i + 1), 9000);
  };
  $$('[data-pprev]').forEach(b => b.onclick = () => show(i - 1));
  $$('[data-pnext]').forEach(b => b.onclick = () => show(i + 1));
  $$('.pdots').forEach(d => $$('i', d).forEach((x, k) => x.onclick = () => show(k)));
  const ctr = $('[data-pcount]'); if (ctr) new MutationObserver(() => ctr.textContent = `0${i + 1} / 0${sl.length}`).observe($('.pslider'), { subtree: true, attributes: true });
  let x0 = null; const box = $('.pslider');
  box.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  box.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1)); x0 = null; });
  show(0);
  const deadline = Date.now() + ((2 * 24 + 14) * 3600 + 37 * 60 + 52) * 1000;
  $$('.flip').forEach(f => flipTimer(f, deadline));
}

function hammamSlider() {
  const box = $('.hslider'); if (!box) return;
  const imgs = $$('img', box), bars = $$('.hbars i', box), cnt = $('.cnt', box); let i = 0, tm;
  const show = n => { imgs[i].classList.remove('on'); bars[i].classList.remove('on'); i = (n + imgs.length) % imgs.length; imgs[i].classList.add('on'); bars[i].classList.add('on'); cnt.textContent = `0${i + 1} / 0${imgs.length}`; clearTimeout(tm); tm = setTimeout(() => show(i + 1), 5000); };
  $('[data-hprev]', box).onclick = () => show(i - 1); $('[data-hnext]', box).onclick = () => show(i + 1);
  bars.forEach((b, k) => b.onclick = () => show(k));
  let x0 = null;
  box.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  box.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1)); x0 = null; });
  show(0);
}

function gallery() {
  const feed = $('.gfeed'); if (!feed) return;
  $('[data-gmore]')?.addEventListener('click', e => { feed.classList.toggle('open'); e.target.textContent = feed.classList.contains('open') ? 'Свернуть ↑' : 'Смотреть все фото ↓'; });
  const lb = $('#lb'); const figs = () => $$('figure', feed).filter(f => getComputedStyle(f).display !== 'none'); let i = 0;
  const open = n => { const f = figs(); i = (n + f.length) % f.length; $('img', lb).src = $('img', f[i]).src; lb.classList.add('open'); };
  feed.addEventListener('click', e => { const f = e.target.closest('figure'); if (f) open(figs().indexOf(f)); });
  $('.x', lb).onclick = () => lb.classList.remove('open');
  $('.lp', lb).onclick = () => open(i - 1); $('.ln', lb).onclick = () => open(i + 1);
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
}

function reviews() {
  $$('.rtrack').forEach(t => { t.innerHTML += t.innerHTML; });
  const r = $('.ribbon .track'); if (r) r.innerHTML += r.innerHTML;
}

/* ---------- prices page ---------- */
const slug = s => 'c-' + s.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-').replace(/[а-яё]/g, ch => ({ а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya' }[ch])).replace(/^-|-$/g, '').replace(/–/g, '');
function pricesPage() {
  const list = $('#priceList'); if (!list || !window.PRICES) return;
  const groups = [['Инъекции', ['Ботулинотерапия', 'Контурная пластика', 'Биоревитализация', 'Биореконструкция', 'Мезотерапия', 'Коллагеностимуляция', 'Липолитики', 'Плазмотерапия Cortexil PRP', 'Нитевой лифтинг']], ['Аппараты и лазеры', ['Morpheus 8', 'Lasest – лазерный эндолифтинг', 'Lasest', 'Lumecca', 'Heleo 4', 'Аппаратная косметология']], ['Уход и тело', ['Уходовые процедуры', 'IV-терапия', 'Массаж', 'Аппаратный массаж', 'Детский массаж', 'Хаммам']], ['Женское здоровье', ['Гинекология']]];
  const P = window.PRICES; const total = Object.values(P).reduce((a, v) => a + v.length, 0);
  $('#totalCount').textContent = total;
  const word = n => n % 10 === 1 && n % 100 !== 11 ? 'услуга' : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 'услуги' : 'услуг');
  $('#side').innerHTML = groups.map(([g, cs]) => `<h5>${g.toUpperCase()}</h5>` + cs.filter(c => P[c]).map(c => `<a href="#${slug(c)}" data-cat="${slug(c)}">${c.replace(' – лазерный эндолифтинг', ' — эндолифтинг').replace(' Cortexil PRP', ' PRP')} <span>${P[c].length}</span></a>`).join('')).join('');
  list.innerHTML = groups.flatMap(([, cs]) => cs.filter(c => P[c])).map((c, k) => `
    <div class="acc ${k < 2 ? 'open' : ''}" id="${slug(c)}">
      <button><span class="t">${c}<span class="cnt">${P[c].length} ${word(P[c].length)}</span></span><span class="pm">+</span></button>
      <div class="rows">${P[c].map(([n, p]) => `<div class="prow" data-n="${n.toLowerCase()}"><span class="n">${n}</span><span class="p">от ${p} ₽</span><a href="#" class="btn btn-line btn-sm" data-book="${n.replace(/"/g, '&quot;')}">Записаться</a></div>`).join('')}</div>
    </div>`).join('');
  list.addEventListener('click', e => { const b = e.target.closest('.acc>button'); if (b) b.parentElement.classList.toggle('open'); });
  const openHash = () => { const el = location.hash && $(location.hash); if (el) { el.classList.add('open'); setTimeout(() => scrollTo({ top: el.getBoundingClientRect().top + scrollY - 100, behavior: 'smooth' }), 250); $$('#side a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === location.hash)); } };
  addEventListener('hashchange', openHash); openHash();
  const q = $('#q');
  const run = () => {
    const v = q.value.trim().toLowerCase(); let found = 0;
    $$('.acc', list).forEach(acc => {
      let n = 0;
      $$('.prow', acc).forEach(r => { const hit = !v || r.dataset.n.includes(v) || acc.querySelector('.t').textContent.toLowerCase().includes(v); r.style.display = hit ? '' : 'none'; const nm = $('.n', r); nm.innerHTML = v && hit ? nm.textContent.replace(new RegExp(`(${v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'), '<mark>$1</mark>') : nm.textContent; if (hit) n++; });
      acc.style.display = n ? '' : 'none'; if (v && n) acc.classList.add('open'); found += n;
    });
    $('#empty').style.display = found ? 'none' : 'block';
  };
  q.addEventListener('input', run);
  $('#qbtn').onclick = run;
}

/* ---------- category / service ---------- */
function filters() { $$('.filters button').forEach(b => b.onclick = () => { $$('.filters button').forEach(x => x.classList.remove('on')); b.classList.add('on'); const f = b.dataset.f; $$('[data-g]').forEach(c => c.style.display = !f || c.dataset.g === f ? '' : 'none'); }); }
function faq() { $$('.q button').forEach(b => b.onclick = () => b.parentElement.classList.toggle('open')); }

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#site-header').outerHTML = header();
  $('#site-footer').outerHTML = footer();
  document.body.insertAdjacentHTML('beforeend', chatUi());
  bindGlobal(); bindForms(); bindChat();
  heroSlider(); reviews(); promoSlider(); hammamSlider(); gallery(); pricesPage(); filters(); faq();
});
