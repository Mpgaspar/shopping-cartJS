var usd = document.getElementById("USDbtn");
var symbol = document.getElementById("symbol");
var eur = document.getElementById("EURbtn");
var total = document.querySelector(".item-total");

usd.addEventListener("click", function(){
    if(symbol.textContent=="€"){
    total.textContent = parseFloat((total.textContent) * 1.11).toFixed(2);
    symbol.textContent = "$";} 
 })

eur.addEventListener("click", function(){
    if(symbol.textContent=="$")
    total.textContent = parseFloat((total.textContent) / 1.11).toFixed(2); 
    symbol.textContent = "€";
 })


