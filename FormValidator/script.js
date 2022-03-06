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

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        console.log(input);
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}

// Return the name of the input field
function getFieldName(input) {
    var typeStr = String(input.type);
    return typeStr[0].toUpperCase() + typeStr.slice(1);
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
});