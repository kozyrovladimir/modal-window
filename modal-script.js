const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const sendButton = document.querySelector('#submit-form');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const checkboxPolitic = document.querySelector('#politic');

let name;
let email;
let errorNameInfo;
let errorEmailInfo;


nameInput.addEventListener('input',() => {
    name = nameInput.value;
    nameError.innerHTML = '';
});

emailInput.addEventListener('input', () => {
    email = emailInput.value;
    emailError.innerHTML = '';
});

checkboxPolitic.addEventListener('change', () => {
    if (!checkboxPolitic.checked) {
        sendButton.disabled = true;
    } else {
        sendButton.disabled = false;
    }
})

sendButton.addEventListener('click', () => {
    errorNameInfo = validateName();
    errorEmailInfo = validateEmail();
    if(errorNameInfo.error) {
        nameError.innerHTML = errorNameInfo.errorMessage;
    }
    if(errorEmailInfo.error) {
        emailError.innerHTML = errorEmailInfo.errorMessage;
    }

    if(!errorNameInfo.error && !errorEmailInfo.error) {
        console.log('data is correct');
        setTimeout(() => {
            $.modal.close();
            nameInput.value = '';
            emailInput.value = '';
        } , 2000);
    }
})

function validateName() {
    let localName = name ? name : '';
    if (!localName.trim()) {
        return {
            error: true,
            errorMessage: 'Field cannot be empty'
        }
    } else {
        return {
            error: false,
            errorMessage: ''
        }
    }
    ;
};

function validateEmail() {
    let localEmail = email ? email : '';
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(localEmail.trim())) {
        return {
            error: false,
            errorMessage: '',
        }
    } else {
        return {
            error: true,
            errorMessage: 'Incorrect email'
        }
    }
};

