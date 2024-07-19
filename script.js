document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let previousInput = '';
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = null;
                display.textContent = '';
                return;
            }

            if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    previousInput = '';
                    operator = null;
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    } else {
                        previousInput = currentInput;
                    }
                    currentInput = '';
                    operator = value;
                }
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });
});
