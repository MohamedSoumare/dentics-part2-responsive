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
 

document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function(event) {
        let isValid = true;

        // Clear previous errors
        document.getElementById("full-name-error").innerText = "";
        document.getElementById("email-error").innerText = "";
        document.getElementById("phone-error").innerText = "";
        document.getElementById("password-error").innerText = "";

        // Validate full name
        const fullNameInput = document.getElementById("full-name");
        const fullNameValue = fullNameInput.value.trim();
        if (!validateFullName(fullNameValue)) {
            document.getElementById("full-name-error").innerText = "Full name should contain only alphabetic characters.";
            isValid = false;
        }

        // Validate email
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value.trim();
        if (!validateEmail(emailValue)) {
            document.getElementById("email-error").innerText = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate phone number
        const phoneInput = document.getElementById("phone");
        const phoneValue = phoneInput.value.trim();
        if (!validatePhone(phoneValue)) {
            document.getElementById("phone-error").innerText = "Please enter a valid phone number.";
            isValid = false;
        }

        // Validate password
        const passwordInput = document.getElementById("password");
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 6) {
            document.getElementById("password-error").innerText = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // If not valid, prevent form submission
        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateFullName(name) {
        const re = /^[A-Za-z\s]+$/;
        return re.test(name);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\(\d{3}\)\s\d{3}-\d{4}$/;
        return re.test(phone);
    }
});



/*******************Signin *****************************/
document.addEventListener("DOMContentLoaded", function() {
    const signinForm = document.getElementById("signin-form");

    signinForm.addEventListener("submit", function(event) {
        let isValid = true;

        // Clear previous errors
        document.getElementById("email-error").innerText = "";
        document.getElementById("password-error").innerText = "";

        // Validate email
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value.trim();
        if (!validateEmail(emailValue)) {
            document.getElementById("email-error").innerText = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate password
        const passwordInput = document.getElementById("password");
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 6) {
            document.getElementById("password-error").innerText = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // If not valid, prevent form submission
        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
