



//email validation
function validateEmail(){
    const email = document.getElementById("email");
    const emailValidText = document.getElementById("emailValidText");

    if(!isvalidEmail(email.value)){
        emailValidText.innerText="Email is not valid. ";
        emailValidText.style.color="red";
        return false;
    }else{
        emailValidText.innerText="Email is valid. ";
        emailValidText.style.color="green";
        return true;
    }
}

function isvalidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}




//alpha validation
function validateAlpha(){
    const alpha = document.getElementById("alpha");
    const alphaValidText = document.getElementById("alphaValidText");

    if(!isvalidAlpha(alpha.value)){
        alphaValidText.innerText="Alpha not valid. ";
        alphaValidText.style.color="red";
        return false;
    }else{
        alphaValidText.innerText="Alpha Valid ";
        alphaValidText.style.color="green";
        return true;
    }
}

function isvalidAlpha(alpha){
    const alphaRegex = /^[A-Za-z ]+$/;
    return alphaRegex.test(alpha);
}


//url validation
function validateURL(){
    const url = document.getElementById("url");
    const urlValidText = document.getElementById("urlValidText");

    if(!isvalidURL(url.value)){
        urlValidText.innerText="URL not valid. ";
        urlValidText.style.color="red";
        return false;
    }else{
        urlValidText.innerText="URL Valid ";
        urlValidText.style.color="green";
        return true;
    }
}

function isvalidURL(url){
    const urlRegex = /^https:\/\/(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s]*)?$/;
    ;
    return urlRegex.test(url);
}




//textarea validation
function validateTextarea() {
    var textareaValue = document.getElementById('textarea').value;
    //whitespace removd
    var trimmedValue = textareaValue.trim();
    // Split the text into words
    var words = trimmedValue.split(/\s+/);
    // word count
    var wordCount = words.length;    
    var validationMessage = document.getElementById('tareaValidText');
    if (wordCount < 10) {
        validationMessage.textContent = 'Minimum 10 words required.';
        validationMessage.style.color="red";
    } else if (wordCount > 200) {
        validationMessage.textContent = 'Maximum 200 words allowed.';
        
    } else {
        
        validationMessage.textContent = 'Maximum 200 words';
        validationMessage.style.color="green";
    }
}

//password validation

function validatePass() {
    var password = document.getElementById("pass").value;
     
    var validationMessage = document.getElementById('passValidText');   
    if (password.length !== 8) {
        validationMessage.textContent="Password must require 8 characters"
        validationMessage.style.color="red";
    }
    else{
        validationMessage.textContent = '';
    }
}

function PasswordVisibility() {
    var passwordInput = document.getElementById('pass');
    var button = document.querySelector('hide');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        button.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        button.textContent = 'View';
    }
}

//phone number validatrion
function validatePhone() {
    var phone = document.getElementById("phone").value;
     
    var validationMessage = document.getElementById('phoneValidText');   
    if (phone.length !== 10) {
        validationMessage.textContent="Phone Number should be of 10 Digits"
        validationMessage.style.color="red";
    }
    else{
        validationMessage.textContent = '';
    }
}

//date validation
function validateDate() {
    var birthdateInput = document.getElementById('birthdate');
    var validationMessage = document.getElementById('dateValidText');

    var today = new Date();
    // Calculate the date 100 years ago
    var minDate = new Date(today);
    minDate.setFullYear(today.getFullYear() - 100);
    
    // Format the minDate as yyyy-mm-dd for input's min attribute
    var minDateFormatted = minDate.toISOString().split('T')[0];
    
    // Set the min and max attributes on the input element
    birthdateInput.setAttribute('min', minDateFormatted);
    birthdateInput.setAttribute('max', today.toISOString().split('T')[0]);
    
    // Check if the selected date is within the valid range
    var selectedDate = new Date(birthdateInput.value);
    
    if (selectedDate < minDate || selectedDate > today) {
        validationMessage.textContent = 'Please select a date within the last 100 years.';
    } else {
        validationMessage.textContent = '';
    }
}


// currency validation

function validateCurrency(){
    const currency = document.getElementById("currency");
    const currencyValidText = document.getElementById("currencyValidText");

    if(!isvalidcurrency(currency.value)){
        currencyValidText.innerText="Enter only Number ";
        currencyValidText.style.color="red";
        return false;
    }else{
        currencyValidText.innerText="valid currency";
        currencyValidText.style.color="green";
        return true;
    }
}

function isvalidcurrency(currency){
    const currencyRegex = /^\$?\d+(,\d{3})*(\.\d{1,2})?$/;
    return currencyRegex.test(currency);
}

















// function submitfORM() {
//     var isValid = validateEmail() &&
//                   validateAlpha() &&
//                   validateURL() &&
//                   validateTextarea() &&
//                   validatePass() &&
//                   validatePhone() &&
//                   validateDate() &&
//                   validateCurrency();

//     if (isValid) {
//         window.alert("Form submitted");
//     } else {
//         window.alert("Please fill in the form correctly");
//     }
// }


// function submitForm() {
//     // Validation for text fields
//     if (!validateEmail() || !validateAlpha() || !validateURL() || !validateTextarea() || !validatePass() || !validatePhone() || !validateDate() || !validateCurrency()) {
//         window.alert("Please fill in all fields correctly.");
//         return;
//     }

    // // Validation for checkboxes
    

    // window.alert("Form submitted successfully!");


