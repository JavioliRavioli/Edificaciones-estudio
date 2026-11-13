/* Edificaciones · estudio — motor del sitio (sin dependencias) */
(function () {
'use strict';

/* ---------- utilidades ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
};
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fmt = s => String(s).replace(/\*\*(.+?)\*\*/g, '<mark>$1</mark>');
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const norm = s => String(s).toLowerCase().replace(/\s+/g, ' ').trim();
const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
const IC = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  cards: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>'
};
const ic = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
const KEY = 'edif.';

/* ---------- tema claro / oscuro ---------- */
function theme() {
  let t = LS.get(KEY + 'theme', null);
  if (!t) t = (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
  return t;
}
function applyTheme(t) { document.documentElement.setAttribute('data-theme', t); }
function themeButton() {
  const b = document.createElement('button');
  b.className = 'iconbtn'; b.type = 'button';
  const paint = () => { const t = theme(); b.innerHTML = ic(t === 'dark' ? 'sun' : 'moon'); b.setAttribute('aria-label', t === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'); };
  b.onclick = () => { const n = theme() === 'dark' ? 'light' : 'dark'; LS.set(KEY + 'theme', n); applyTheme(n); paint(); };
  paint(); return b;
}
applyTheme(theme());

/* ---------- helpers SVG para diagramas ---------- */
const S = {
  ctx: null,
  r(x, y, w, h, c = 'k-none', ex = '') { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${c}" ${ex}/>`; },
  l(x1, y1, x2, y2, c = '') { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="ln ${c}"/>`; },
  poly(pts, c = 'k-none') { return `<polygon points="${pts}" class="${c}"/>`; },
  pl(pts, c = '') { return `<polyline points="${pts}" class="ln ${c}"/>`; },
  c(cx, cy, r, c = 'k-none') { return `<circle cx="${cx}" cy="${cy}" r="${r}" class="${c}"/>`; },
  e(cx, cy, rx, ry, c = 'k-none') { return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" class="${c}"/>`; },
  path(d, c = 'ln') { return `<path d="${d}" class="${c}"/>`; },
  /* texto; si empieza con @ es un hueco: '@id' (centro), '@id:l' (anclado a la izquierda), '@id:r' (derecha) */
  t(x, y, s, c = '') {
    if (typeof s === 'string' && s[0] === '@') return S.B(x, y, s.slice(1));
    return `<text x="${x}" y="${y}" class="${c}">${s}</text>`;
  },
  B(x, y, spec) {
    const [id, an = 'c'] = spec.split(':');
    const ctx = S.ctx; const raw = ctx.blanks[id];
    if (raw === undefined) throw new Error('Hueco sin respuesta: ' + id);
    const ans = Array.isArray(raw) ? raw[0] : raw;
    const bw = Math.max(34, ans.length * 7.1 + 18), bh = 24;
    const rx = an === 'l' ? x : an === 'r' ? x - bw : x - bw / 2;
    const solved = ctx.mode === 'solved';
    return `<g class="slot${solved ? ' solved' : ''}" data-s="${id}" data-w="${bw}" data-ax="${x}" data-an="${an}"${solved ? '' : ' tabindex="0" role="button" aria-label="Hueco para completar"'}>` +
      `<rect x="${rx}" y="${y - bh / 2}" width="${bw}" height="${bh}" rx="7"/><text x="${rx + bw / 2}" y="${y}">${esc(solved ? ans : '?')}</text></g>`;
  },
  /* cota horizontal con etiqueta (texto o @hueco) */
  dh(x1, x2, y, lab, off = -13) {
    return S.l(x1, y, x2, y) + S.l(x1, y - 5, x1, y + 5) + S.l(x2, y - 5, x2, y + 5) + S.t((x1 + x2) / 2, y + off, lab, 'sm');
  },
  dv(x, y1, y2, lab, off = 14, an = '') {
    const t = typeof lab === 'string' && lab[0] === '@' ? S.B(x + off, (y1 + y2) / 2, lab.slice(1) + (an ? ':' + an : '')) : `<text x="${x + off}" y="${(y1 + y2) / 2}" class="sm ${an === 'l' ? 'l' : ''}">${lab}</text>`;
    return S.l(x, y1, x, y2) + S.l(x - 5, y1, x + 5, y1) + S.l(x - 5, y2, x + 5, y2) + t;
  },
  /* punta de flecha */
  arrow(x, y, dir = 'd') {
    const m = { d: `${x - 5},${y - 9} ${x + 5},${y - 9} ${x},${y}`, u: `${x - 5},${y + 9} ${x + 5},${y + 9} ${x},${y}`, r: `${x - 9},${y - 5} ${x - 9},${y + 5} ${x},${y}`, l: `${x + 9},${y - 5} ${x + 9},${y + 5} ${x},${y}` };
    return `<polygon points="${m[dir]}" class="arr"/>`;
  },
  hatch(id) { return ''; }
};
window.S = S;

function diagramSVG(d, mode) {
  S.ctx = { mode, blanks: d.blanks };
  let body;
  try { body = d.svg(S); } finally { S.ctx = null; }
  const vb = d.vb || [0, 0, 480, 300];
  return `<svg class="dg" viewBox="${vb.join(' ')}" role="img" aria-label="${esc(d.titulo)}">${body}</svg>`;
}

/* ---------- huecos + banco de palabras (diagramas, completar, emparejar) ---------- */
function setSlotText(el, txt) {
  const t = el.querySelector('text');
  if (t) {
    const r = el.querySelector('rect');
    const w = Math.max(+el.dataset.w, txt.length * 7.1 + 18), ax = +el.dataset.ax, an = el.dataset.an;
    const x = an === 'l' ? ax : an === 'r' ? ax - w : ax - w / 2;
    r.setAttribute('x', x); r.setAttribute('width', w); t.setAttribute('x', x + w / 2); t.textContent = txt;
  } else el.textContent = txt;
}
class SlotBank {
  constructor(o) {
    this.slots = o.slots; this.bankEl = o.bankEl; this.onChange = o.onChange || (() => {});
    this.vals = o.values.map((v, i) => ({ v, i, owner: null, el: null }));
    this.sel = null; this.locked = false;
    this.slots.forEach(s => {
      s.chip = null;
      const h = () => this.clickSlot(s);
      s.el.addEventListener('click', h);
      s.el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); h(); } });
    });
    this.renderBank();
    this.setSel(this.slots[0] || null);
  }
  renderBank() {
    this.bankEl.innerHTML = '';
    shuffle(this.vals.map(x => x.i)).forEach(i => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'bk'; b.textContent = this.vals[i].v;
      b.onclick = () => this.clickChip(i);
      this.vals[i].el = b; this.bankEl.appendChild(b);
    });
  }
  setSel(s) { this.sel = s; this.slots.forEach(x => x.el.classList.toggle('sel', x === s)); }
  place(s, i) {
    s.chip = i; this.vals[i].owner = s; this.vals[i].el.classList.add('used');
    setSlotText(s.el, this.vals[i].v); s.el.classList.add('fill'); s.el.classList.remove('bad', 'good');
  }
  free(s) {
    if (s.chip == null) return;
    const c = this.vals[s.chip]; c.owner = null; c.el.classList.remove('used'); s.chip = null;
    setSlotText(s.el, '?'); s.el.classList.remove('fill', 'good', 'bad');
  }
  clickSlot(s) {
    if (this.locked || s.el.classList.contains('good')) return;
    if (s.chip != null) { this.free(s); this.setSel(s); } else this.setSel(this.sel === s ? null : s);
    this.onChange();
  }
  clickChip(i) {
    if (this.locked || this.vals[i].owner) return;
    const s = (this.sel && this.sel.chip == null) ? this.sel : this.slots.find(x => x.chip == null);
    if (!s) return;
    this.place(s, i);
    const n = this.slots.find(x => x.chip == null);
    this.setSel(n || null); this.onChange();
  }
  allFilled() { return this.slots.every(s => s.chip != null); }
  filled() { return this.slots.filter(s => s.chip != null).length; }
  isOk(s) { return s.chip != null && s.ok.some(a => norm(a) === norm(this.vals[s.chip].v)); }
  isCorrect() { return this.slots.every(s => this.isOk(s)); }
  check() {
    let good = 0;
    this.slots.forEach(s => { const ok = this.isOk(s); s.el.classList.remove('good', 'bad'); s.el.classList.add(ok ? 'good' : 'bad'); if (ok) good++; });
    this.setSel(null);
    return { good, total: this.slots.length };
  }
  reveal() {
    this.slots.forEach(s => this.free(s));
    this.slots.forEach(s => {
      const c = this.vals.find(v => !v.owner && s.ok.some(a => norm(a) === norm(v.v)));
      if (c) this.place(s, c.i);
    });
    this.slots.forEach(s => { s.el.classList.remove('bad'); s.el.classList.add('good'); });
    this.setSel(null);
  }
  reset() { this.slots.forEach(s => { this.free(s); s.el.classList.remove('good', 'bad'); }); this.locked = false; this.setSel(this.slots[0] || null); }
  lock() { this.locked = true; this.setSel(null); }
}

function bindDiagram(d, svgHost, bankEl, onChange) {
  const els = $$('.slot', svgHost);
  const slots = els.map(el => { const id = el.dataset.s; const raw = d.blanks[id]; return { id, el, ok: Array.isArray(raw) ? raw : [raw] }; });
  const values = slots.map(s => s.ok[0]).concat(d.x || []);
  return new SlotBank({ slots, values, bankEl, onChange });
}

/* ---------- tipos de pregunta ---------- */
const TYPE_LABEL = { vf: 'Verdadero o falso', mc: 'Opción múltiple', fill: 'Completar', order: 'Ordenar pasos', match: 'Emparejar' };

function parseCloze(src) {
  const parts = []; const re = /\[\[(.+?)\]\]/g; let m, last = 0;
  while ((m = re.exec(src))) { parts.push({ t: src.slice(last, m.index) }); parts.push({ a: m[1].split('|') }); last = re.lastIndex; }
  parts.push({ t: src.slice(last) });
  return parts;
}

const TYPES = {
  vf(q, host, o) {
    host.innerHTML = '<div class="vf"><button type="button" class="opt" data-v="1">Verdadero</button><button type="button" class="opt" data-v="0">Falso</button></div>';
    let sel = null; const bs = $$('.opt', host);
    bs.forEach(b => b.onclick = () => { if (b.disabled) return; sel = +b.dataset.v; bs.forEach(x => x.classList.toggle('sel', x === b)); o.change(); });
    return {
      answered: () => sel !== null,
      correct: () => sel === (q.a ? 1 : 0),
      auto: true,
      reveal() { bs.forEach(b => { const v = +b.dataset.v; b.classList.remove('sel'); if (v === (q.a ? 1 : 0)) b.classList.add('good'); else if (v === sel) b.classList.add('bad'); }); },
      lock() { bs.forEach(b => b.disabled = true); }
    };
  },
  mc(q, host, o) {
    const idx = shuffle(q.o.map((_, i) => i));
    host.innerHTML = '<div class="opts">' + idx.map((oi, n) => `<button type="button" class="opt" data-i="${oi}"><span class="k">${'ABCDEF'[n]}</span><span>${fmt(q.o[oi])}</span></button>`).join('') + '</div>';
    let sel = null; const bs = $$('.opt', host);
    bs.forEach(b => b.onclick = () => { if (b.disabled) return; sel = +b.dataset.i; bs.forEach(x => x.classList.toggle('sel', x === b)); o.change(); });
    return {
      answered: () => sel !== null,
      correct: () => sel === q.a,
      auto: true,
      reveal() { bs.forEach(b => { const v = +b.dataset.i; b.classList.remove('sel'); if (v === q.a) b.classList.add('good'); else if (v === sel) b.classList.add('bad'); }); },
      lock() { bs.forEach(b => b.disabled = true); }
    };
  },
  fill(q, host, o) {
    const parts = parseCloze(q.q); const answers = [];
    let html = '<div class="clz">';
    parts.forEach(p => { if (p.a) { answers.push(p.a); html += '<button type="button" class="slot dom">?</button>'; } else html += fmt(p.t); });
    html += '</div><div class="bank"></div>';
    host.innerHTML = html;
    const slots = $$('.slot', host).map((el, i) => ({ id: i, el, ok: answers[i] }));
    const sb = new SlotBank({ slots, values: answers.map(a => a[0]).concat(q.x || []), bankEl: $('.bank', host), onChange: o.change });
    return {
      answered: () => sb.allFilled(), correct: () => sb.isCorrect(),
      reveal() { if (sb.isCorrect()) sb.check(); else sb.check(); },
      lock() { sb.lock(); }, bank: sb
    };
  },
  match(q, host, o) {
    const defs = q.p.map(p => p[1]);
    host.innerHTML = '<div class="mrows">' + q.p.map(p => `<div class="mrow"><span class="term">${fmt(p[0])}</span><button type="button" class="slot dom">?</button></div>`).join('') + '</div><div class="bank"></div>';
    const slots = $$('.slot', host).map((el, i) => ({ id: i, el, ok: [defs[i]] }));
    const sb = new SlotBank({ slots, values: defs.concat(q.x || []), bankEl: $('.bank', host), onChange: o.change });
    return { answered: () => sb.allFilled(), correct: () => sb.isCorrect(), reveal() { sb.check(); }, lock() { sb.lock(); }, bank: sb };
  },
  order(q, host, o) {
    const items = q.s.map((t, i) => ({ t, i }));
    host.innerHTML = '<div class="hint">Toca los pasos en el orden correcto. Toca uno ya elegido para quitarlo.</div><div class="ordseq"></div><div class="ordpool"></div>';
    const seq = []; const seqEl = $('.ordseq', host), poolEl = $('.ordpool', host);
    let locked = false;
    function paint() {
      seqEl.innerHTML = ''; poolEl.innerHTML = '';
      seq.forEach(i => { const b = document.createElement('button'); b.type = 'button'; b.className = 'opt sel'; b.dataset.i = i; b.innerHTML = `<span class="k"></span><span>${fmt(items[i].t)}</span>`; b.onclick = () => { if (locked) return; seq.splice(seq.indexOf(i), 1); paint(); o.change(); }; seqEl.appendChild(b); });
      order.forEach(i => { if (seq.includes(i)) return; const b = document.createElement('button'); b.type = 'button'; b.className = 'opt'; b.innerHTML = `<span>${fmt(items[i].t)}</span>`; b.onclick = () => { if (locked) return; seq.push(i); paint(); o.change(); }; poolEl.appendChild(b); });
    }
    const order = shuffle(items.map(x => x.i)); paint();
    return {
      answered: () => seq.length === items.length,
      correct: () => seq.every((v, k) => v === k),
      reveal() { $$('.opt', seqEl).forEach((b, k) => { b.classList.remove('sel'); b.classList.add(seq[k] === k ? 'good' : 'bad'); }); },
      lock() { locked = true; }
    };
  }
};

function answerHTML(q) {
  if (q.t === 'vf') return q.a ? 'Verdadero' : 'Falso';
  if (q.t === 'mc') return fmt(q.o[q.a]);
  if (q.t === 'fill') return fmt(parseCloze(q.q).map(p => p.a ? `**${p.a[0]}**` : p.t).join(''));
  if (q.t === 'order') return '<ol class="steps">' + q.s.map(s => `<li>${fmt(s)}</li>`).join('') + '</ol>';
  if (q.t === 'match') return '<ul class="pts">' + q.p.map(p => `<li>${fmt(p[0])} → <b>${fmt(p[1])}</b></li>`).join('') + '</ul>';
  return '';
}
function questionText(q) {
  if (q.t === 'fill') return 'Completa la frase:';
  if (q.t === 'order') return fmt(q.q);
  if (q.t === 'match') return fmt(q.q);
  return fmt(q.q);
}

/* ---------- aplicación de un tema ---------- */
function loadScript(src) {
  return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('No se pudo cargar ' + src)); document.head.appendChild(s); });
}

async function pageTema() {
  const id = +new URLSearchParams(location.search).get('t');
  try { await loadScript('data/tema' + id + '.js'); } catch (e) { document.body.innerHTML = '<main><div class="panel"><h2>Tema no encontrado</h2><p><a href="index.html">Volver al índice</a></p></div></main>'; return; }
  const T = window.TEMAS[id];
  T.preguntas.forEach((q, i) => q.id = id + '-' + i);
  const K = KEY + 't' + id + '.';
  const st = {
    read: () => LS.get(K + 'read', []), diag: () => LS.get(K + 'diag', []),
    cards: () => LS.get(K + 'cards', {}), q: () => LS.get(K + 'q', {}), best: () => LS.get(K + 'best', 0)
  };
  document.title = 'Tema ' + id + ' · ' + T.corto + ' — Edificaciones';

  const root = document.body;
  root.innerHTML = `
  <header class="top">
    <div class="topbar"><a class="back" href="index.html">${ic('back')} Temas</a><span id="themeslot"></span></div>
    <div class="brand"><div class="mark-logo"><svg viewBox="0 0 24 24">${IC.building}</svg></div>
      <div><h1>Tema ${id} · ${esc(T.corto)}</h1><p class="sub">${esc(T.titulo)}</p></div></div>
    <div class="chips">${(T.chips || []).map((c, i) => `<span class="chip${i === 0 ? ' hi' : ''}">${esc(c)}</span>`).join('')}</div>
  </header>
  <nav class="tabs" role="tablist" id="tabs"></nav>
  <main id="view"></main>`;
  $('#themeslot').appendChild(themeButton());

  const TABS = [['guia', 'Guía', 'book'], ['diagramas', 'Diagramas', 'grid'], ['tarjetas', 'Tarjetas', 'cards'], ['practicar', 'Practicar', 'target'], ['prueba', 'Prueba', 'trophy']];
  function progress() {
    const q = st.q(), cards = st.cards();
    return {
      guia: pct(st.read().length, T.secciones.length),
      diagramas: pct(st.diag().length, T.diagramas.length),
      tarjetas: pct(Object.values(cards).filter(v => v === 'ok').length, T.tarjetas.length),
      practicar: pct(T.preguntas.filter(x => q[x.id] && q[x.id].ok).length, T.preguntas.length),
      prueba: st.best()
    };
  }
  function paintTabs(cur) {
    const p = progress();
    $('#tabs').innerHTML = TABS.map(([k, n, i]) => `<button role="tab" type="button" data-k="${k}" aria-selected="${k === cur}"><span class="t">${ic(i)}${n}</span><span class="ubar" style="--p:${p[k]}%"></span></button>`).join('');
    $$('#tabs button').forEach(b => b.onclick = () => { location.hash = b.dataset.k; });
  }
  const view = $('#view');
  function route() {
    const k = (location.hash || '#guia').slice(1);
    const cur = TABS.some(t => t[0] === k) ? k : 'guia';
    paintTabs(cur); view.innerHTML = '';
    ({ guia: viewGuia, diagramas: viewDiagramas, tarjetas: viewTarjetas, practicar: viewPracticar, prueba: viewPrueba })[cur]();
    window.scrollTo({ top: 0 });
  }
  window.addEventListener('hashchange', route);
  const refreshBars = () => { const cur = (location.hash || '#guia').slice(1); const p = progress(); $$('#tabs button').forEach(b => $('.ubar', b).style.setProperty('--p', p[b.dataset.k] + '%')); };

  /* ----- GUÍA ----- */
  let secIdx = 0, figIdx = 0;
  function renderParte(p) {
    let h = '';
    if (p.h) h += `<h3>${esc(p.h)}</h3>`;
    if (p.lead) h += `<div class="lead">${fmt(p.lead)}</div>`;
    if (p.items) h += '<ul class="pts">' + p.items.map(x => `<li>${fmt(x)}</li>`).join('') + '</ul>';
    if (p.pasos) h += '<ol class="steps">' + p.pasos.map(x => `<li>${fmt(x)}</li>`).join('') + '</ol>';
    if (p.tabla) h += '<div class="tbwrap"><table class="tb"><thead><tr>' + p.tabla.h.map(x => `<th>${fmt(x)}</th>`).join('') + '</tr></thead><tbody>' + p.tabla.r.map(r => '<tr>' + r.map(c => `<td>${fmt(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>';
    if (p.nota) h += `<div class="note"><b class="t">${esc(p.notaT || 'Ojo')}</b>${fmt(p.nota)}</div>`;
    return h;
  }
  function viewGuia() {
    const sec = T.secciones[secIdx]; const read = st.read();
    if (!read.includes(sec.id)) { read.push(sec.id); LS.set(K + 'read', read); refreshBars(); }
    const figs = (sec.figs || []).map(fid => T.diagramas.find(d => d.id === fid)).filter(Boolean);
    const fig = figs[figIdx] || figs[0];
    view.innerHTML = `
      ${secIdx === 0 && T.cifras ? `<div class="panel" style="margin-bottom:16px"><h2>${ic('target')} Cifras para memorizar</h2><div class="cifras">${T.cifras.map(c => `<div class="cifra"><div class="v">${esc(c[0])}</div><div class="l">${esc(c[1])}</div></div>`).join('')}</div></div>` : ''}
      <div class="stepper">${T.secciones.map((s, i) => `<button type="button" data-i="${i}" aria-pressed="${i === secIdx}" data-done="${read.includes(s.id) ? 1 : 0}"><span>${esc(s.titulo)}</span><span class="ubar"></span></button>`).join('')}</div>
      <div class="${fig ? 'grid' : ''}">
        ${fig ? `<div class="figwrap sticky"><div class="cap"><span>${esc(fig.titulo)}</span></div><div id="figbox">${diagramSVG(fig, 'solved')}</div>${figs.length > 1 ? `<div class="figsw">${figs.map((f, i) => `<button type="button" data-f="${i}" aria-pressed="${f === fig}">${esc(f.corto || f.titulo)}</button>`).join('')}</div>` : ''}</div>` : ''}
        <div class="panel"><h2>${esc(sec.titulo)}</h2>${sec.idea ? `<div class="lead">${fmt(sec.idea)}</div>` : ''}${sec.partes.map(renderParte).join('')}
          <div class="row gap"><button class="btn" type="button" id="prev" ${secIdx === 0 ? 'disabled' : ''}>Anterior</button><span class="spacer"></span>${secIdx < T.secciones.length - 1 ? '<button class="btn pri" type="button" id="next">Siguiente sección</button>' : '<a class="btn pri" href="#diagramas">Ir a los diagramas</a>'}</div>
        </div>
      </div>
      ${secIdx === T.secciones.length - 1 && T.notas ? `<div class="panel" style="margin-top:16px"><h2>Ojo con los apuntes</h2>${T.notas.map(n => `<div class="note"><b class="t">Ambigüedad en el material</b>${fmt(n)}</div>`).join('')}</div>` : ''}`;
    $$('.stepper button', view).forEach(b => b.onclick = () => { secIdx = +b.dataset.i; figIdx = 0; viewGuia(); window.scrollTo({ top: 0 }); });
    $$('.figsw button', view).forEach(b => b.onclick = () => { figIdx = +b.dataset.f; viewGuia(); });
    const nx = $('#next', view), pv = $('#prev', view);
    if (nx) nx.onclick = () => { secIdx++; figIdx = 0; viewGuia(); window.scrollTo({ top: 0 }); };
    if (pv) pv.onclick = () => { secIdx--; figIdx = 0; viewGuia(); window.scrollTo({ top: 0 }); };
  }

  /* ----- DIAGRAMAS ----- */
  let dIdx = 0;
  function viewDiagramas() {
    const done = st.diag(); const d = T.diagramas[dIdx];
    view.innerHTML = `
      <div class="dglist">${T.diagramas.map((x, i) => `<button type="button" data-i="${i}" aria-pressed="${i === dIdx}"><span class="dot${done.includes(x.id) ? ' on' : ''}"></span>${esc(x.titulo)}</button>`).join('')}</div>
      <div class="grid">
        <div class="figwrap sticky"><div class="cap"><span>${esc(d.titulo)}</span><span class="mut" id="cnt"></span></div><div id="svgbox">${diagramSVG(d, 'quiz')}</div><div class="bank" id="bank" style="padding:0 4px 6px"></div></div>
        <div class="panel"><h2>${ic('grid')} Completa el diagrama</h2>
          <p>${fmt(d.desc || 'Toca un recuadro y luego la etiqueta que va ahí.')}</p>
          <p class="hint">Toca un recuadro punteado y después elige la etiqueta. Si te equivocas, toca el recuadro para quitarla.</p>
          <div id="res"></div>
          <div class="row gap"><button class="btn pri" type="button" id="chk">Comprobar</button><button class="btn" type="button" id="rev">Ver respuestas</button><button class="btn" type="button" id="rst">Reiniciar</button><span class="spacer"></span>${dIdx < T.diagramas.length - 1 ? '<button class="btn" type="button" id="nxt">Siguiente</button>' : ''}</div>
          ${d.nota ? `<div class="note"><b class="t">Para recordar</b>${fmt(d.nota)}</div>` : ''}
        </div>
      </div>`;
    $$('.dglist button', view).forEach(b => b.onclick = () => { dIdx = +b.dataset.i; viewDiagramas(); window.scrollTo({ top: 0 }); });
    const sb = bindDiagram(d, $('#svgbox'), $('#bank'), () => { $('#cnt').textContent = sb.filled() + '/' + sb.slots.length; });
    $('#cnt').textContent = '0/' + sb.slots.length;
    const res = $('#res');
    $('#chk').onclick = () => {
      if (!sb.filled()) { res.innerHTML = `<div class="result bad">Faltan ${sb.slots.length - sb.filled()} huecos por llenar</div>`; return; }
      const r = sb.check();
      if (r.good === r.total) { res.innerHTML = `<div class="result ok">¡Perfecto! ${r.good}/${r.total}</div>`; const dn = st.diag(); if (!dn.includes(d.id)) { dn.push(d.id); LS.set(K + 'diag', dn); refreshBars(); $$('.dglist .dot', view)[dIdx].classList.add('on'); } }
      else res.innerHTML = `<div class="result bad">${r.good}/${r.total} correctas — toca los recuadros rojos para corregirlos</div>`;
    };
    $('#rev').onclick = () => { sb.reveal(); res.innerHTML = '<div class="result">Respuestas mostradas</div>'; $('#cnt').textContent = sb.slots.length + '/' + sb.slots.length; };
    $('#rst').onclick = () => { sb.reset(); res.innerHTML = ''; $('#cnt').textContent = '0/' + sb.slots.length; };
    const nx = $('#nxt'); if (nx) nx.onclick = () => { dIdx++; viewDiagramas(); window.scrollTo({ top: 0 }); };
  }

  /* ----- TARJETAS ----- */
  let cMode = 'todas', cOrder = null, cPos = 0;
  function viewTarjetas() {
    const marks = st.cards();
    let idxs = T.tarjetas.map((_, i) => i);
    if (cMode === 'pend') idxs = idxs.filter(i => marks[i] !== 'ok');
    if (cOrder) idxs = cOrder.filter(i => idxs.includes(i)).concat(idxs.filter(i => !cOrder.includes(i)));
    if (cPos >= idxs.length) cPos = 0;
    const known = Object.values(marks).filter(v => v === 'ok').length;
    view.innerHTML = `
      <div class="deckbar"><div class="seg"><button type="button" data-m="todas" aria-pressed="${cMode === 'todas'}">Todas (${T.tarjetas.length})</button><button type="button" data-m="pend" aria-pressed="${cMode === 'pend'}">Pendientes (${T.tarjetas.length - known})</button></div>
        <button class="btn" type="button" id="shf">${ic('shuffle')} Mezclar</button><button class="btn" type="button" id="clr">Reiniciar progreso</button></div>
      ${idxs.length ? `<div class="counter">Tarjeta ${cPos + 1} de ${idxs.length} · Sabidas ${known}/${T.tarjetas.length}</div>
      <div class="cardbox"><div class="card" id="card" tabindex="0" role="button" aria-label="Voltear tarjeta"><div class="face"><span class="tag">Pregunta</span><div class="q">${fmt(T.tarjetas[idxs[cPos]][0])}</div><span class="tap">Toca para ver la respuesta</span></div><div class="face back"><span class="tag">Respuesta</span><div class="a">${fmt(T.tarjetas[idxs[cPos]][1])}</div></div></div></div>
      <div class="cardnav"><button class="btn" type="button" id="cp">Anterior</button><button class="btn" type="button" id="rv">A repasar</button><button class="btn ok" type="button" id="ok">${ic('check')} Lo sé</button><button class="btn" type="button" id="cn">Siguiente</button></div>`
      : `<div class="panel"><h2>${ic('check')} ¡Todas las tarjetas dominadas!</h2><p>Puedes reiniciar el progreso o pasar a Practicar.</p></div>`}`;
    $$('.seg button', view).forEach(b => b.onclick = () => { cMode = b.dataset.m; cPos = 0; viewTarjetas(); });
    $('#shf').onclick = () => { cOrder = shuffle(T.tarjetas.map((_, i) => i)); cPos = 0; viewTarjetas(); };
    $('#clr').onclick = () => { LS.set(K + 'cards', {}); cPos = 0; viewTarjetas(); refreshBars(); };
    if (!idxs.length) return;
    const card = $('#card'); const flip = () => card.classList.toggle('flip');
    card.onclick = flip; card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); } };
    const go = d => { cPos = (cPos + d + idxs.length) % idxs.length; viewTarjetas(); };
    const mark = v => { const m = st.cards(); m[idxs[cPos]] = v; LS.set(K + 'cards', m); refreshBars(); if (cMode === 'pend' && v === 'ok') { viewTarjetas(); } else go(1); };
    $('#cp').onclick = () => go(-1); $('#cn').onclick = () => go(1);
    $('#ok').onclick = () => mark('ok'); $('#rv').onclick = () => mark('rev');
  }

  /* ----- PREGUNTAS (practicar / prueba) ----- */
  function record(qid, ok) { const m = st.q(); const e = m[qid] || { n: 0 }; e.ok = ok; e.n++; m[qid] = e; LS.set(K + 'q', m); }

  function qCard(q, o) {
    const wrap = document.createElement('div'); wrap.className = 'qcard';
    wrap.innerHTML = `<div class="qtype">${TYPE_LABEL[q.t]}</div><div class="qtext">${questionText(q)}</div><div class="qbody"></div>`;
    const api = TYPES[q.t](q, $('.qbody', wrap), { change: () => o.change && o.change(api) });
    return { el: wrap, api };
  }

  let pFilter = 'all';
  function viewPracticar() {
    const qs = T.preguntas; const m = st.q();
    const failed = qs.filter(x => m[x.id] && m[x.id].ok === false);
    const filters = [['all', 'Todas', qs.length]].concat(['vf', 'mc', 'fill', 'order', 'match'].filter(t => qs.some(x => x.t === t)).map(t => [t, TYPE_LABEL[t], qs.filter(x => x.t === t).length])).concat([['fail', 'Falladas', failed.length]]);
    const pool = pFilter === 'all' ? qs : pFilter === 'fail' ? failed : qs.filter(x => x.t === pFilter);
    const mastered = qs.filter(x => m[x.id] && m[x.id].ok).length;
    view.innerHTML = `
      <div class="panel"><h2>${ic('target')} Practicar</h2>
      <p class="mut">Respuesta y explicación al instante. Dominadas: <b>${mastered}/${qs.length}</b></p>
      <div style="overflow-x:auto;margin:10px 0"><div class="seg">${filters.map(f => `<button type="button" data-f="${f[0]}" aria-pressed="${f[0] === pFilter}">${f[1]} (${f[2]})</button>`).join('')}</div></div>
      <div id="qarea"></div></div>`;
    $$('.seg button', view).forEach(b => b.onclick = () => { pFilter = b.dataset.f; viewPracticar(); });
    const area = $('#qarea');
    if (!pool.length) { area.innerHTML = '<div class="qcard"><div class="qtext">' + (pFilter === 'fail' ? '¡No tienes preguntas falladas! Sigue practicando.' : 'No hay preguntas en este grupo.') + '</div></div>'; return; }
    let queue = shuffle(pool), i = 0, right = 0;
    function show() {
      if (i >= queue.length) {
        area.innerHTML = `<div class="qcard"><div class="big">${right}/${queue.length}</div><p>Ronda completada.</p><div class="row gap"><button class="btn pri" type="button" id="again">Otra ronda</button></div></div>`;
        $('#again').onclick = () => { viewPracticar(); }; refreshBars(); return;
      }
      const q = queue[i];
      area.innerHTML = `<div class="qhead"><span>Pregunta ${i + 1} de ${queue.length}</span><span>Aciertos: ${right}</span></div><div class="progress" style="--p:${pct(i, queue.length)}%"><i></i></div><div id="qh"></div><div id="fb"></div><div class="row gap" id="acts"></div>`;
      const { el, api } = qCard(q, { change(a) { if (a.auto && a.answered()) check(); else if ($('#chkq')) $('#chkq').disabled = !a.answered(); } });
      $('#qh').appendChild(el);
      let done = false;
      function check() {
        if (done) return; done = true;
        const ok = api.correct(); api.reveal(); api.lock(); record(q.id, ok); if (ok) right++;
        $('#fb').innerHTML = `<div class="why ${ok ? 'ok' : 'bad'}"><b>${ok ? '¡Correcto!' : 'No es así.'}</b> ${!ok && q.t !== 'vf' && q.t !== 'mc' ? '<div class="mut" style="margin:6px 0 2px">Respuesta correcta:</div>' + answerHTML(q) : ''}${!ok && (q.t === 'vf' || q.t === 'mc') ? ' Correcta: <b>' + answerHTML(q) + '</b>.' : ''}${q.w ? '<div style="margin-top:6px">' + fmt(q.w) + '</div>' : ''}</div>`;
        $('#acts').innerHTML = `<span class="spacer"></span><button class="btn pri" type="button" id="nx">${i + 1 < queue.length ? 'Siguiente' : 'Terminar'}</button>`;
        $('#nx').onclick = () => { i++; show(); window.scrollTo({ top: $('#qarea').getBoundingClientRect().top + scrollY - 70 }); };
        refreshBars();
      }
      if (!api.auto) { $('#acts').innerHTML = '<button class="btn pri" type="button" id="chkq" disabled>Comprobar</button>'; $('#chkq').onclick = check; }
    }
    show();
  }

  function viewPrueba() {
    const qs = T.preguntas;
    const best = st.best(); const m = st.q(); const failedN = qs.filter(x => m[x.id] && m[x.id].ok === false).length;
    view.innerHTML = `<div class="panel"><h2>${ic('trophy')} Prueba</h2>
      <p>Simula un examen: no ves si acertaste hasta el final. Al terminar tienes puntaje y la revisión de cada error con su explicación.</p>
      <div class="stats"><div class="stat"><div class="v">${best}%</div><div class="l">Mejor puntaje</div></div><div class="stat"><div class="v">${qs.length}</div><div class="l">Preguntas del tema</div></div><div class="stat"><div class="v">${failedN}</div><div class="l">Falladas antes</div></div></div>
      <div class="row gap"><button class="btn pri" type="button" data-n="10">10 preguntas</button><button class="btn pri" type="button" data-n="20">20 preguntas</button><button class="btn pri" type="button" data-n="all">Todas (${qs.length})</button>${failedN ? `<button class="btn" type="button" data-n="fail">Solo falladas (${failedN})</button>` : ''}</div></div>`;
    $$('[data-n]', view).forEach(b => b.onclick = () => {
      const n = b.dataset.n; let pool = n === 'fail' ? qs.filter(x => m[x.id] && m[x.id].ok === false) : shuffle(qs);
      if (n !== 'all' && n !== 'fail') pool = pool.slice(0, Math.min(+n, pool.length));
      runExam(shuffle(pool), n === 'fail');
    });
  }
  function runExam(list, onlyFailed) {
    let i = 0; const results = [];
    function show() {
      const q = list[i];
      view.innerHTML = `<div class="panel"><div class="qhead"><span>Prueba · pregunta ${i + 1} de ${list.length}</span><button class="btn" type="button" id="quit">Salir</button></div><div class="progress" style="--p:${pct(i, list.length)}%"><i></i></div><div id="qh"></div><div class="row gap"><span class="spacer"></span><button class="btn pri" type="button" id="nx">${i + 1 < list.length ? 'Siguiente' : 'Terminar'}</button></div></div>`;
      const { el, api } = qCard(q, {});
      $('#qh').appendChild(el);
      $('#quit').onclick = () => { if (confirm('¿Salir de la prueba? Se pierde este intento.')) viewPrueba(); };
      $('#nx').onclick = () => { const ok = api.answered() && api.correct(); results.push({ q, ok }); record(q.id, ok); i++; i < list.length ? (show(), window.scrollTo({ top: 0 })) : finish(); };
    }
    function finish() {
      const good = results.filter(r => r.ok).length, p = pct(good, results.length);
      if (!onlyFailed && p > st.best()) LS.set(K + 'best', p);
      refreshBars();
      const bad = results.filter(r => !r.ok);
      view.innerHTML = `<div class="panel"><h2>${ic('trophy')} Resultado</h2><div class="big">${p}%</div><p class="mut">${good} de ${results.length} correctas${p >= 80 ? ' — ¡vas muy bien!' : p >= 60 ? ' — aprobado, repasa los errores.' : ' — repasa la guía y vuelve a intentar.'}</p>
        <div class="row gap"><button class="btn pri" type="button" id="again">Otra prueba</button><a class="btn" href="#guia">Repasar guía</a></div></div>
        ${bad.length ? `<div class="panel review" style="margin-top:16px"><h2>Repaso de errores (${bad.length})</h2>${bad.map(r => `<div class="qcard"><div class="qtype">${TYPE_LABEL[r.q.t]}</div><div class="qtext">${questionText(r.q)}</div><div class="mut">Respuesta correcta:</div>${answerHTML(r.q)}${r.q.w ? `<div class="why">${fmt(r.q.w)}</div>` : ''}</div>`).join('')}</div>` : '<div class="panel" style="margin-top:16px"><h2>Sin errores</h2><p>Ni una falló. 🎯</p></div>'}`;
      $('#again').onclick = viewPrueba;
      window.scrollTo({ top: 0 });
    }
    show();
  }

  if (!location.hash) history.replaceState(null, '', '#guia');
  route();
}

/* ---------- índice ---------- */
async function pageIndex() {
  $('#themeslot').appendChild(themeButton());
  const ids = (window.TEMA_IDS || []);
  await Promise.all(ids.map(id => loadScript('data/tema' + id + '.js').catch(() => null)));
  const list = ids.map(id => window.TEMAS && window.TEMAS[id]).filter(Boolean);
  let tot = 0, cnt = 0;
  $('#cards').innerHTML = list.map(T => {
    const K = KEY + 't' + T.id + '.';
    const read = LS.get(K + 'read', []).length, dg = LS.get(K + 'diag', []).length, cd = Object.values(LS.get(K + 'cards', {})).filter(v => v === 'ok').length;
    const q = LS.get(K + 'q', {}); const qm = T.preguntas.filter((x, i) => q[T.id + '-' + i] && q[T.id + '-' + i].ok).length;
    const total = T.secciones.length + T.diagramas.length + T.tarjetas.length + T.preguntas.length, done = read + dg + cd + qm;
    tot += total; cnt += done;
    const p = pct(done, total);
    return `<a class="tcard" href="tema.html?t=${T.id}"><span class="n">Tema ${T.id}</span><h2>${esc(T.corto)}</h2><p>${esc(T.titulo)}</p>
      <div class="meta"><span>${T.secciones.length} secciones</span><span>${T.diagramas.length} diagramas</span><span>${T.tarjetas.length} tarjetas</span><span>${T.preguntas.length} preguntas</span></div>
      <div class="pct"><div class="progress" style="--p:${p}%"><i></i></div>${p}%</div></a>`;
  }).join('');
  const g = $('#gpct'); if (g) g.textContent = pct(cnt, tot) + '% completado';
}

window.EDIF = { pageTema, pageIndex };
})();
