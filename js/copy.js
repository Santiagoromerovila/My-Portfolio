document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
      const code = button.nextElementSibling.querySelector('code').innerText;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = '✅ Copiado';
        setTimeout(() => button.textContent = '📋', 2000);
      });
    });
  });
});
