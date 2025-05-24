document.addEventListener("DOMContentLoaded", () => {
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
  const swipeDistance = touchEndX - touchStartX;
  const threshold = 70;
  if (swipeDistance > threshold) goToPreviousPage();
  else if (swipeDistance < -threshold) goToNextPage();
}

function goToPreviousPage() {
  const pages = ['SantiagoRomeroVila.html', 'curriculum.html', 'proyectos.html', 'prensa.html'];
  const current = window.location.pathname.split('/').pop();
  const index = pages.indexOf(current);
  if (index > 0) window.location.href = pages[index - 1];
}

function goToNextPage() {
  const pages = ['SantiagoRomeroVila.html', 'curriculum.html', 'proyectos.html', 'prensa.html'];
  const current = window.location.pathname.split('/').pop();
  const index = pages.indexOf(current);
  if (index < pages.length - 1 && index !== -1) window.location.href = pages[index + 1];
}

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});
document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
});
});