// Tema toggle con persistencia
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  themeIcon.textContent = '☀️';
}

// Toggle del tema
themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  const isLight = body.classList.contains('light-theme');
  themeIcon.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});