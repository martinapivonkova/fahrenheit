let fahrenheit = Number(prompt("Zadej teplotu ve stupních Fahrenheita: "));

let celsius = 5 * (fahrenheit - 32) / 9;

document.body.innerHTML += '<div class=calc>' + fahrenheit + '°F = ' + Math.round(celsius * 100)/100 + '°C<div/>'

if (Math.round(celsius * 100) != celsius * 100) {
    document.body.innerHTML += '<div class=calc-note>(zaokrouhleno na dvě desetinná mista)<div>'
}
