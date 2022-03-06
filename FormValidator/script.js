"use strict";

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

// Show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
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

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(input.value).toLowerCase())) {
        showError(input, 'Email address is not valid');
    } else {
        showSuccess(input);
    }
}

// Check password is valid
function checkPassword(input, confirmInput) {
    if (input.value != confirmInput.value) {
        showError(confirmInput, 'Password does not match');
    } else {
        showSuccess(confirmInput);
    }
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
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassword(password, password2);
});