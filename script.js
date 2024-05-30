const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const txtResult = document.getElementById('txtResult');

function calculate() {
    try {

        const num1 = parseFloat(number1.value);
        const num2 = parseFloat(number2.value);

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid number(s)');
        }

        const op = operation.value;
        let result;
        switch (op) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    throw new Error('Division by zero');
                }
                result = num1 / num2;
                break;
            default:
                throw new Error('Unknown operation');
        }
        txtResult.innerText = `Result: ${result}`;
        txtResult.classList.remove('error')
    } catch (error) {
        txtResult.innerHTML = 'Please enter valid numbers';
        txtResult.classList.add('error')
    }
}

function clearCalculator() {
    number1.value = "";
    number2.value = "";
    txtResult.innerText = "";
    txtResult.classList.remove('error');
}

const clearButton = document.querySelector('btn-clean');

clearButton.addEventListener('mouseover', function() {
    this.title = 'Clean all the fields';
});

clearButton.addEventListener('mouseout', function() {
    this.title = '';
});
