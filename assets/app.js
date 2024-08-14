// Append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;

    // Map keyboard keys to calculator buttons
    const keyMap = {
        'Enter': '=',
        'Escape': 'C',
        'Backspace': 'Backspace',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '.': '.',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9'
    };

    // Check if the key is in the keyMap
    if (keyMap[key]) {
        if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape') {
            clearDisplay();
        } else if (key === 'Backspace') {
            backspace();
        } else {
            appendToDisplay(keyMap[key]);
        }
    }
}

// Event listeners
document.addEventListener('keydown', handleKeyboardInput);
