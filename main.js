document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav');
  var openBtn = document.querySelector('.nav_menu-open');
  var closeBtn = document.querySelector('.nav_menu-close');
  var themeBtn = document.querySelector('.theme_btn');
  var menu = document.querySelector('.nav_menu');

  // Dark mode functionality
  function initDarkMode() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.body.classList.add('dark');
      updateThemeIcon(true);
    }
  }

  function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
  }

  function updateThemeIcon(isDark) {
    if (themeBtn) {
      const icon = themeBtn.querySelector('i');
      if (icon) {
        icon.className = isDark ? 'uil uil-sun' : 'uil uil-moon';
      }
    }
  }

  function openMenu() {
    if (nav) nav.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    if (nav) nav.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // Initialize dark mode on page load
  initDarkMode();

  // Event listeners
  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menu) Array.from(menu.querySelectorAll('a')).forEach(function (a) { a.addEventListener('click', closeMenu); });
  if (themeBtn) themeBtn.addEventListener('click', toggleDarkMode);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
      document.body.classList.toggle('dark', e.matches);
      updateThemeIcon(e.matches);
    }
  });
});
