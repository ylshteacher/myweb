document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('navLinks');
  const navLinks = document.querySelectorAll('.nav-links li');

  // 手機版選單切換
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Burger 動畫效果
    burger.classList.toggle('toggle');
  });

  // 點擊連結後自動收起選單
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
      }
    });
  });
});