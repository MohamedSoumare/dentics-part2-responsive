const menuToggle = document.getElementById('menu-toggle');
        const menuClose = document.getElementById('menu-close');
        const menu = document.getElementById('menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
            menuToggle.style.display = 'none';
            menuClose.style.display = 'block';
        });

        menuClose.addEventListener('click', () => {
            menu.classList.remove('show');
            menuToggle.style.display = 'block';
            menuClose.style.display = 'none';
        });


/**********************Validation de Sign up *********************/
 

// Validation du formulaire
 document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;

    // Validation du nom complet
    const fullName = document.getElementById('full-name').value;
    const fullNameError = document.getElementById('full-name-error');
    const fullNamePattern = /^[A-Za-z\s]+$/;
    if (!fullNamePattern.test(fullName)) {
        fullNameError.textContent = 'Le nom complet ne doit contenir que des lettres.';
        valid = false;
    } else {
        fullNameError.textContent = '';
    }

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

    // Validation du téléphone
    const countryCode = document.getElementById('country-code').value;
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phone-error');
    let phonePattern;

    switch (countryCode) {
        case '+1': // USA
            phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            break;
        case '+33': // France
            phonePattern = /^\d{9}$/;
            break;
        case '+49': // Germany
            phonePattern = /^\d{10,11}$/;
            break;
        case '+91': // India
            phonePattern = /^\d{10}$/;
            break;
        case '+34': // Spain
            phonePattern = /^\d{9}$/;
            break;
        case '+212': // Morocco
            phonePattern = /^\d{9}$/;
            break;
        case '+222': // Mauritania
            phonePattern = /^\d{8}$/;
            break;
        case '+223': // Mali
            phonePattern = /^\d{8}$/;
            break;
        case '+221': // Senegal
            phonePattern = /^\d{9}$/;
            break;
        default:
            phonePattern = /^\d+$/;
            break;
    }

    if (!phonePattern.test(phone)) {
        phoneError.textContent = `Veuillez entrer un numéro de téléphone valide pour l'indicatif ${countryCode}.`;
        valid = false;
    } else {
        phoneError.textContent = '';
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



/*******************Signin *****************************/

 // Validation du formulaire
//  document.getElementById('signin-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let valid = true;

    // Validation de l'e-mail
    // const email = document.getElementById('email').value;
    // const emailError = document.getElementById('email-error');
    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (!emailPattern.test(email)) {
    //     emailError.textContent = 'Veuillez entrer un e-mail valide.';
    //     valid = false;
    // } else {
    //     emailError.textContent = '';
    // }

    // Validation du mot de passe
    // const password = document.getElementById('password').value;
    // const passwordError = document.getElementById('password-error');
    // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // if (!passwordPattern.test(password)) {
    //     passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
    //     valid = false;
    // } else {
    //     passwordError.textContent = '';
    // }

    // Soumettre le formulaire si toutes les validations sont correctes
//     if (valid) {
//         this.submit();
//     }
// });