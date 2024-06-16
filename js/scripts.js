// document.addEventListener('DOMContentLoaded', function() {
//     var menuToggle = document.getElementById('menu-toggle');
//     var menuClose = document.getElementById('menu-close');
//     var menu = document.getElementById('menu');

//     menuToggle.addEventListener('click', function() {
//         menu.classList.add('show');

//     });


//     menuClose.addEventListener('click', function() {
//         menu.classList.remove('show');

//     });
// });

let toggle_menu = document.querySelector('.toggle_menu')
let menu = document.querySelector('.menu')
toggle_menu.onclick=function(){
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
}
document.getElementById("button").addEventListener("click", function() {
    window.location.href = "login.html";
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
        const countryCodeSelect = document.getElementById("country-code");
        const selectedOption = countryCodeSelect.options[countryCodeSelect.selectedIndex];
        const phoneInput = document.getElementById("phone");
        const phoneValue = phoneInput.value.trim();
        const phoneLength = parseInt(selectedOption.getAttribute("data-length"));

        if (!validatePhone(phoneValue, phoneLength)) {
            document.getElementById("phone-error").innerText = `Please enter a valid phone number with ${phoneLength} digits.`;
            isValid = false;
        }

        // Validate password
        const passwordInput = document.getElementById("password");
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 8) {
            document.getElementById("password-error").innerText = "Password must be at least 8 characters long.";
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

    function validatePhone(phone, length) {
        const re = new RegExp(`^\\d{${length}}$`);
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
