const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const themeToggle = document.querySelector('.theme-toggle');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const themeIcon = themeToggle.querySelector('img');
  if (document.body.classList.contains('light-mode')) {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    themeIcon.src = 'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png';
  } else {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#ffffff';
    themeIcon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png';
  }
});