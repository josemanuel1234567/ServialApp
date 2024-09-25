document.addEventListener('DOMContentLoaded', () => {
    // --- Slider de imágenes ---
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slides img'); // Selección de todas las imágenes del slider
    const totalSlides = slides.length;

    // Mostrar la diapositiva actual
    function showCurrentSlide() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex); // Activa la clase 'active' para la diapositiva actual
        });
    }

    // Cambiar a la siguiente diapositiva
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Incrementa el índice y lo reinicia al final
        showCurrentSlide();
    }

    // Configurar el intervalo para cambiar las diapositivas automáticamente
    setInterval(nextSlide, 3000); // Cambia la diapositiva cada 3 segundos

    // Mostrar la primera diapositiva al cargar la página
    showCurrentSlide();

    // --- Funciones para los modales ---
    function toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block'; // Alterna la visibilidad del modal
    }

    // Agregar manejadores de eventos a los botones de los modales
    document.querySelectorAll('.auth-buttons .btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            const modalId = index === 0 ? 'loginModal' : 'registerModal'; // Determina qué modal abrir
            toggleModal(modalId);
        });
    });

    // Cierra el modal cuando se hace clic fuera de él
    window.addEventListener('click', (event) => {
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        if (event.target === loginModal) {
            loginModal.style.display = 'none'; // Cierra el modal de login
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none'; // Cierra el modal de registro
        }
    });

    // --- Función para cambiar de modo (claro/oscuro) ---
    function toggleMode() {
        document.body.classList.toggle('dark-mode'); // Alterna la clase 'dark-mode' en el body
    }

    // Agregar manejador de eventos al botón de cambiar modo
    document.getElementById('modeToggle').addEventListener('click', toggleMode);
});