document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('modeToggle');

  function setMode(mode) {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
      toggleButton.textContent = '☀️';
    } else {
      document.body.classList.remove('dark-mode');
      toggleButton.textContent = '🌙';
    }
  }

  const storedMode = localStorage.getItem('theme');
  if (storedMode) {
    setMode(storedMode);
  }

  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '☀️' : '🌙';
  });
});
