// Kistler-IT — Client-Interaktionen (progressive enhancement)

const $ = <T extends HTMLElement>(s: string, c: ParentNode = document) => c.querySelector<T>(s);
const $$ = <T extends HTMLElement>(s: string, c: ParentNode = document) => Array.from(c.querySelectorAll<T>(s));

function initTheme() {
  const stored = localStorage.getItem('theme');
  const theme = stored === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
}
initTheme();

const themeToggle = $('#themeToggle');
const iconSun = $('#iconSun');
const iconMoon = $('#iconMoon');
function renderThemeIcons(theme: string) {
  const light = theme === 'light';
  iconSun?.classList.toggle('icon-hide', light);
  iconMoon?.classList.toggle('icon-hide', !light);
}
renderThemeIcons(document.documentElement.getAttribute('data-theme') || 'dark');
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  renderThemeIcons(next);
});

/* Navbar + Fortschritt + Nach-oben */
const nav = $('#navbar');
const progress = $('#progressBar');
const toTop = $('#toTop');
function onScroll() {
  const y = window.scrollY;
  nav?.classList.toggle('scrolled', y > 16);
  const h = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  toTop?.classList.toggle('show', y > 640);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
toTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* Mobiles Menü */
const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');
const menuIcon = $('#menuIcon');
const closeIcon = $('#closeIcon');
function setMenu(open: boolean) {
  mobileMenu?.classList.toggle('open', open);
  menuIcon?.classList.toggle('icon-hide', open);
  closeIcon?.classList.toggle('icon-hide', !open);
  menuBtn?.setAttribute('aria-expanded', String(open));
}
menuBtn?.addEventListener('click', () => setMenu(!mobileMenu?.classList.contains('open')));
$$('.mm-link').forEach((a) => a.addEventListener('click', () => setMenu(false)));

/* Scrollspy */
const spyLinks = $$('.nav-link');
const sections = spyLinks
  .map((a) => document.getElementById(a.getAttribute('href')!.slice(1)))
  .filter(Boolean) as HTMLElement[];
function spy() {
  const pos = scrollY + 130;
  let id = '';
  for (const s of sections) if (s.offsetTop <= pos) id = s.id;
  spyLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
}
addEventListener('scroll', spy, { passive: true });
spy();

/* Scroll-Reveal */
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
    });
  },
  { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
);
$$('[data-reveal]').forEach((el) => revealObs.observe(el));

/* Animatierte Zähler */
function animateCount(el: HTMLElement) {
  const target = parseFloat(el.dataset.count || '0');
  const suffix = el.dataset.suffix || '';
  const dec = parseInt(el.dataset.decimal || '0', 10);
  const dur = 1300;
  let start: number | null = null;
  const fmt = (n: number) =>
    n.toLocaleString('de-CH', { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  function step(ts: number) {
    if (start === null) start = ts;
    let p = Math.min((ts - start) / dur, 1);
    p = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(target * p * Math.pow(10, dec)) / Math.pow(10, dec)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const countObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animateCount(e.target as HTMLElement); countObs.unobserve(e.target); }
    });
  },
  { threshold: 0.5 }
);
$$('[data-count]').forEach((el) => countObs.observe(el));

/* Kontaktformular via Formspree (progressive enhancement) */
const form = $('#kontaktForm') as HTMLFormElement | null;
const status = $('#formStatus');
const submitBtn = $('#submitBtn') as HTMLButtonElement | null;
if (form && status) {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) return; // native Validierung zuerst
    e.preventDefault();
    status.className = 'form-status';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sende…'; }
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then((r) => r.json())
      .then((d) => {
        if (d && d.ok) {
          status.className = 'form-status ok';
          status.textContent = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich.';
          form.reset();
        } else throw new Error('submit failed');
      })
      .catch(() => {
        status.className = 'form-status err';
        status.textContent = 'Leider ist ein Fehler aufgetreten. Bitte senden Sie uns direkt eine E-Mail an info@kistler-it.ch.';
      })
      .finally(() => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Nachricht senden →'; }
      });
  });
}

/* Calendly */
const cal = $('.calendly-inline-widget') as HTMLElement | null;
function initCal() {
  if (cal && (window as any).Calendly) (window as any).Calendly.initInlineWidget({ url: cal.dataset.url, parentElement: cal });
}
if ((window as any).Calendly) initCal();
else if (cal) {
  const s = document.createElement('script');
  s.src = 'https://assets.calendly.com/assets/external/widget.js';
  s.async = true;
  s.onload = initCal;
  document.head.appendChild(s);
}
