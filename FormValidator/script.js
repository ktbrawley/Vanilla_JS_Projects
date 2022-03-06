const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Show input error message
function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = msg;
}

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

// Show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'email is not valid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'password is required');
    } else {
        showSuccess(password);
    }

    if (password2.value !== password.value || password2.value === '') {
        showError(password2, 'passwords do not match');
    } else {
        showSuccess(password2);
    }
});