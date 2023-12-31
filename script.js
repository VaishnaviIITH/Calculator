let displayValue = '';

function handleClick(event) {
    const clickedButton = event.target.innerText;

    switch (clickedButton) {
        case '=':
            calculate();
            break;
        case 'C':
            clearDisplay();
            break;
        default:
            updateDisplay(clickedButton);
    }
}

function updateDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(displayValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}