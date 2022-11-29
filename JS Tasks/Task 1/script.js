/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", (event) => {
    let kg = document.querySelector("#search").value;
    document.querySelector("#output").innerHTML = `<p>Svarai: ${kg*2.2046}</p> <p>Gramai: ${kg/0.001}</p> <p>Uncijos: ${kg*35.274}</p>`;
    return false;
});
