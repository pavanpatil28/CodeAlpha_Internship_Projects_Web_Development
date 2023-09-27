// Javascript to Convert the Temperatures

// Function to Convert the Temperature
function convertTemperature() 
{
    const temperatureInput = document.getElementById('temperature');
    const fromScale = document.getElementById('fromScale').value;
    const toScale = document.getElementById('toScale').value;
    const resultElement = document.getElementById('result');
    
    const temperature = parseFloat(temperatureInput.value);
    
    if (isNaN(temperature)) 
    {
        resultElement.innerText = ' Please Enter a Valid Number. ';
        return;
    }

    let convertedTemperature;

    if (fromScale === 'celsius') 
    {
        if (toScale === 'fahrenheit') 
        {
            convertedTemperature = (temperature * 9/5) + 32;
        }
        else if (toScale === 'kelvin') 
        {
            convertedTemperature = temperature + 273.15;
        } 
        else 
        {
            convertedTemperature = temperature;
        }
    }
    else if (fromScale === 'fahrenheit') 
    {
        if (toScale === 'celsius') 
        {
            convertedTemperature = (temperature - 32) * 5/9;
        }
        else if (toScale === 'kelvin') {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        } 
        else 
        {
            convertedTemperature = temperature;
        }
    } 
    else if (fromScale === 'kelvin') 
    {
        if (toScale === 'celsius') 
        {
            convertedTemperature = temperature - 273.15;
        } 
        else if (toScale === 'fahrenheit') 
        {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        }
        else 
        {
            convertedTemperature = temperature;
        }
    }
    
    resultElement.innerText = `Converted Temperature = ${convertedTemperature.toFixed(2)} ${toScale}`;
}
