const displayInput = document.getElementById('display-input');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearInput();
        } else if (value === 'backspace') {
            backspaceInput();
        } else {
            appendToInput(value);
        }
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || key === '.' || ['+', '-', '*', '/',].includes(key)) {
        appendToInput(key);
    } else if (key === 'Backspace') {
        backspaceInput();
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearInput();
    }
});

function appendToInput(value) {
    displayInput.value += value;
}

function clearInput() {
    displayInput.value = '';
}

function backspaceInput() {
    displayInput.value = displayInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(displayInput.value.replace('÷', '/').replace('×', '*'));
        displayInput.value = result;
    } catch (error) {
        displayInput.value = 'Error';
    }
}