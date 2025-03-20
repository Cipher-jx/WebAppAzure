function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('result');
 
    let result;
 
    if (temperatureInput === "") {
        resultElement.textContent = "Please enter a temperature value.";
        return;
    }
 
    const temperature = parseFloat(temperatureInput);
 
    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }
 
    if (conversionType === "CtoF") {
        result = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
    } else if (conversionType === "FtoC") {
        result = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
    } else {
        resultElement.textContent = "Please select a conversion type.";
    }
}