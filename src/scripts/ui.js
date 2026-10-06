const hdr = document.querySelector('[data-hdr]');
const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav]');
const dds = [...document.querySelectorAll('.dd')];
const setDd = (dd, open) => { dd.classList.toggle('open', open); dd.querySelector('button')?.setAttribute('aria-expanded', String(open)); };
if (menu && nav) menu.addEventListener('click', () => { const o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(o)); if (!o) dds.forEach((d) => setDd(d, false)); });
dds.forEach((dd) => dd.querySelector('button').addEventListener('click', () => { const o = !dd.classList.contains('open'); dds.forEach((x) => setDd(x, x === dd ? o : false)); }));
document.addEventListener('click', (e) => dds.forEach((d) => { if (!d.contains(e.target)) setDd(d, false); }));
nav?.addEventListener('click', (e) => { if (e.target.closest('a')) { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); } });
const onScroll = () => hdr?.classList.toggle('scrolled', window.scrollY > 20);
onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

/* Desktop dropdowns open on hover; touch/mobile keeps the existing tap controls. */
(function () {
  var groups = [].slice.call(document.querySelectorAll('header .navlinks__dropdown, header .site-nav__dropdown, header .dd, header .sat-desktop-nav details, header nav#nav > details'));
  function desktop(group) {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return false;
    var header = group.closest('header');
    var toggle = header && header.querySelector('[data-menu-button], [data-menu], [data-mobile-menu], .site-header__toggle, button.menu');
    return !toggle || getComputedStyle(toggle).display === 'none';
  }
  function set(group, open) {
    if (group.tagName === 'DETAILS') group.open = open;
    else group.classList.toggle(group.classList.contains('site-nav__dropdown') ? 'is-open' : 'open', open);
    var trigger = group.querySelector('button, summary');
    if (trigger) trigger.setAttribute('aria-expanded', String(open));
  }
  groups.forEach(function (group) {
    var trigger = group.querySelector('button, summary');
    if (!trigger) return;
    group.addEventListener('mouseenter', function () {
      if (!desktop(group)) return;
      groups.forEach(function (other) { if (other !== group) set(other, false); });
      set(group, true);
    });
    group.addEventListener('mouseleave', function () { if (desktop(group)) set(group, false); });
    group.addEventListener('focusin', function () { if (desktop(group)) set(group, true); });
    group.addEventListener('focusout', function (event) { if (desktop(group) && !group.contains(event.relatedTarget)) set(group, false); });
    trigger.addEventListener('click', function (event) {
      if (!desktop(group) || event.detail === 0) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      set(group, true);
    }, true);
    group.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') { trigger.focus(); set(group, false); }
    });
  });
  window.addEventListener('resize', function () { groups.forEach(function (group) { set(group, false); }); });
})();
