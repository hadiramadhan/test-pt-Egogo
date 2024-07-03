document.addEventListener('DOMContentLoaded', () => {
    const cardNumberField = document.getElementById('number');
    const cardNameField = document.getElementById('name');
    const cardExpiryField = document.getElementById('expiry');
    const cardNumberDisplay = document.getElementById('card-number');
    const cardNameDisplay = document.getElementById('card-name');
    const cardExpiryDisplay = document.getElementById('card-expiry');
    const formLogo = document.getElementById('form-logo');

    const defaultValues = {
        number: 'XXXX XXXX XXXX XXXX',
        name: 'XXXXX XXXXX',
        expiry: 'XX/XX'
    };

    cardNumberField.addEventListener('input', () => {
        let value = cardNumberField.value.replace(/\D/g, '').substring(0, 16);
        value = value !== '' ? value.match(/.{1,4}/g).join(' ') : '';
        cardNumberField.value = value;
        cardNumberDisplay.textContent = value.padEnd(19, 'X');
        updateFormLogo(value.replace(/\s/g, ''));
    });

    cardNameField.addEventListener('input', () => {
        const value = cardNameField.value;
        cardNameDisplay.textContent = value.padEnd(20, 'X');
    });

    cardExpiryField.addEventListener('input', () => {
        let value = cardExpiryField.value.replace(/\D/g, '').substring(0, 4);
        if (value.length >= 3) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        cardExpiryField.value = value;
        cardExpiryDisplay.textContent = value.padEnd(5, 'X');
    });

    function updateFormLogo(number) {
        if (/^4/.test(number)) {
            formLogo.src = 'mastercard-logo.png'; // Replace with the actual path to the Visa logo image
        } else if (/^5[1-5]/.test(number)) {
            formLogo.src = 'mastercard-logo.png'; // Replace with the actual path to the MasterCard logo image
        } else {
            formLogo.src = 'mastercard-logo.png'; // Default placeholder image
        }
    }

    // Initial values
    cardNumberDisplay.textContent = defaultValues.number;
    cardNameDisplay.textContent = defaultValues.name;
    cardExpiryDisplay.textContent = defaultValues.expiry;
});
