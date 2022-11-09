
// Store HTML element references in variables for easy access
const generateButton = document.querySelector('#generate');
const nameField = document.querySelector('#name');
const ageField = document.querySelector('#age');
const elArea = document.querySelector('#elArea');
const priceTextField = document.querySelector('#priceText');

// Keep track if fields have correct values
let validName = false;
let validAge = false;
let validEl = false;

// Check values on input field changes
nameField.addEventListener('change', checkName);
ageField.addEventListener('change', checkAge);
elArea.addEventListener('change', checkElArea);

/**
 * Check that the name contains at least one space.
 * // TODO: Find better RegEx/pattern to verify the name
 */
function checkName() {
    if (nameField.value.indexOf(' ') > -1) { // Kollar att det finns mellanslag i namnet
        validName = true;
    } else {
        validName = false;
    }
    activateGenerateButton();
}

/**
 * Check that user's age is equal to or above 18, so
 * that they're legally OK to sign contracts.
 */
function checkAge() {
    if (ageField.value >= 18) {
        validAge = true;
    } else {
        validAge = false;
    }
    activateGenerateButton();
}

/**
 * Check that we have selected an electricity area.
 */
function checkElArea() {
    if (elArea.value != '' ) {
        validEl = true;
    } else {
        validEl = false;
    }
    activateGenerateButton();
}

/**
 * If name is typed correctly, age is above 18 and the electricity area is selected,
 * activate the button and add an event listener to it.
 */
function activateGenerateButton() {
    if (validName && validAge && validEl) {
        generateButton.removeAttribute('disabled');
        generateButton.addEventListener('click', printPrice);
    } else {
        generateButton.setAttribute('disabled', '')
        generateButton.removeEventListener('click', printPrice);
    }
}

/**
 * Let the user know their price.
 */
function printPrice() {
    if (elArea.value === 'area1') {
    priceTextField.textContent = 'Ditt pris är 20 kr.';
    } else if(elArea.value === 'area2' || elArea.value === 'area3') {
        priceTextField.textContent = 'Ditt pris är 100 kr.';
    } else {
        priceTextField.textContent = 'Ditt pris är 1 000 kr.';
    }
  
}