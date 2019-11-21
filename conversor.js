var usd = document.getElementById("USD");
var eur = document.getElementById("EUR");

function usd(){
    eur.value = parseFloat(usd.value) * 1.11;
}