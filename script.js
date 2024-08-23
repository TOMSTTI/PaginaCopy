

// Selecciona el elemento que contiene el contenido principal
const mainContent = document.querySelector('main');

// Agrega una clase para ocultar el contenido al principio
mainContent.classList.add('hidden');

// Agrega un evento de carga de la página
window.addEventListener('load', () => {
  // Elimina la clase que oculta el contenido
  mainContent.classList.remove('hidden');

  // Agrega una animación de fade-in
  mainContent.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 1000,
    fill: 'forwards'
  });
});
