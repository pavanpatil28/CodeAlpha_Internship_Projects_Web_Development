const colorPicker = document.getElementById('color-picker');
const generateButton = document.getElementById('generate-button');
const colorBox = document.getElementById('color-box');
const copyButton = document.getElementById('copy-button');

generateButton.addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    colorBox.style.backgroundColor = selectedColor;
});

copyButton.addEventListener('click', () => {
    const generatedColor = colorPicker.value;
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.value = generatedColor;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Color code copied to clipboard: ' + generatedColor);
});
