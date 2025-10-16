let fahrenheit = Number(prompt("Zadej teplotu ve stupních Fahrenheita: "));

let celsius = 5 * (fahrenheit - 32) / 9;

document.body.innerHTML += fahrenheit + '°F = ' + Math.round(celsius * 100)/100 + '°C' + ' (zaokrouhleno na dvě desetinná mista)'
