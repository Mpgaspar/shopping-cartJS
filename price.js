var qtd = document.getElementById("cQtd");
var price = document.getElementById("store-item-price");

function changePrice(){
    var newprice = qtd.value * 250;
    price.textContent = newprice;
}
