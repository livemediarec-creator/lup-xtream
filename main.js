// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Carousel
    const carousel = document.getElementById('channelsCarousel');
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    
    function updateCarousel() {
        inner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < items.length - 3) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Registration Modal
    const modal = document.getElementById('registrationModal');
    const registerBtn = document.getElementById('registerBtn');
    const closeBtn = document.querySelector('.close');
    const loginLink = document.getElementById('loginLink');
    
    registerBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidad de login en desarrollo.');
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form Validation
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('¡Registro exitoso! Bienvenido a Lup-Xtream.');
            modal.style.display = 'none';
            form.reset();
        }
    });
    
    function validateForm() {
        let isValid = true;
        
        // Username validation
        const username = document.getElementById('username');
        const usernameError = document.getElementById('usernameError');
        if (username.value.length < 3) {
            usernameError.textContent = 'El nombre de usuario debe tener al menos 3 caracteres.';
            usernameError.style.display = 'block';
            isValid = false;
        } else {
            usernameError.style.display = 'none';
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Por favor, introduce un email válido.';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Password validation
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        if (password.value.length < 6) {
            passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }
        
        // Confirm password validation
        const confirmPassword = document.getElementById('confirmPassword');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
            confirmPasswordError.style.display = 'block';
            isValid = false;
        } else {
            confirmPasswordError.style.display = 'none';
        }
        
        return isValid;
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = document.getElementById(`${this.id}Error`);
            if (errorElement) {
                errorElement.style.display = 'none';
            }
        });
    });
});