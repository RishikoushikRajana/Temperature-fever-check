function checkTemperature() {
    let choice = parseInt(document.getElementById('choiceInput').value);
    let tempFahrenheit = parseFloat(document.getElementById('tempFahrenheitInput').value);

    const THIRTYTWO = 32;
    const TEMP_CONVERSION_FACTOR = 1.8;
    const NORMAL_CELSIUS = 37;

    let result1 = tempFahrenheit - THIRTYTWO;
    let result2 = result1 / TEMP_CONVERSION_FACTOR;

    const outputArea = document.getElementById('outputArea');
    let outputMessage = "";

    switch (choice) {
        case 1:
            outputMessage += `Your body temperature in Celsius is: ${result2.toFixed(2)}&#176;C<br>`;
            result2 > NORMAL_CELSIUS
                ? outputMessage += "You have fever, take rest!"
                : outputMessage += "You are absolutely OK!! Enjoy";
            break;

        case 2:
            outputMessage += "No, I don't want to check whether I have fever or not<br>";
            break;

        default:
            outputMessage += "Sorry, wrong choice provided. Please enter 1 or 2.<br>";
    }

    outputArea.innerHTML = outputMessage;
}
