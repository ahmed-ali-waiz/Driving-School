document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav');
  var openBtn = document.querySelector('.nav_menu-open');
  var closeBtn = document.querySelector('.nav_menu-close');
  // var themeBtn = document.querySelector('.theme_btn');
  var menu = document.querySelector('.nav_menu');

  // Removed dark mode functionality

  function openMenu() {
    if (nav) nav.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    if (nav) nav.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // Removed dark mode initialization

  // Event listeners
  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menu) Array.from(menu.querySelectorAll('a')).forEach(function (a) { a.addEventListener('click', closeMenu); });
  // Removed theme toggle event listener

  // Removed system theme change listener
});
