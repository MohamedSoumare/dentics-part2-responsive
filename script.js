document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('toggle_menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});



   // Validation du formulaire
   document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Validation de l'e-mail
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = 'Veuillez entrer un e-mail valide.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validation du mot de passe
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordPattern.test(password)) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    // Soumettre le formulaire si toutes les validations sont correctes
    if (valid) {
        this.submit();
    }
});