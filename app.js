// show cart
(function(){
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");
  
     cartInfo.addEventListener("click", function(){
     cart.classList.toggle("show-cart"); 
  })
  })();

  // show item
  (function(){
    const card = document.querySelector(".card-item");
    const item = document.querySelector(".item");
    
       card.addEventListener("click", function(){
       item.classList.toggle("show-item"); 
    })
    })();

  /*(function(){
    const cardList = document.querySelectorAll(".card-item");
    const itemList = document.querySelectorAll(".item");

    cardList.forEach(function(node, index){
      node.addEventListener("click", function(){
      itemList[index].classList.toggle("show-item"); 
     })});
    });*/


  
  // add items to the cart
  (function(){
  const cartBtn = document.querySelectorAll(".store-item-icon");
  
  cartBtn.forEach(function(btn){
      btn.addEventListener("click",function(event){
       //console.log(event.target);
       
       if (event.target.parentElement.classList.contains("store-item-icon")){
          let fullPath =
          event.target.parentElement.previousElementSibling.src;
          let pos = fullPath.indexOf('assets');
          let partPath = fullPath.slice(pos);
  
          const item = {};
          item.img = `cart-${partPath}`;
          let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
          item.name = name;
  
          let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
          
          let finalPrice = price.slice(1).trim();
          item.price = finalPrice;
          //console.log(finalPrice);
          
          //console.log(name);
          
          //console.log(item);
  
          const cartItem = document.createElement('div');
          
          cartItem.innerHTML =`
          <div class="cart-item left-align">
            <img src="${item.img}" id="item-img" alt="">
            <div class="cart-item-text">
  
              <div id="cart-item-title" class="blue-text">${item.name}</div>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price">${item.price}</span>
            </div>
            
          </div>
          `;


         /* const cartItem = document.createElement('div');
          cartItem.classList.add(
              'item'
              );
          
          cartItem.innerHTML =`
          <div class="item">
          <div class="img-container">
            <img src="assets/board04.jpg" class="store-img" alt="">
            <span class="store-item-icon">
                <i class="small material-icons pointer">add_shopping_cart</i>
            </span>
          </div>
          <div class="card-body">
            <div class="card-text">
              <h5 id="store-item-name">board item</h5>
              <h5 class="store-item-value">$ <strong id="store-item-price">5</strong></h5>
              <input id="cColor" type="color" list="presetColors"><br>
          <datalist id="presetColors">
            <option>#000000</option>/>
            <option>#FFFFFF</option>
            <option>#2277AA</option>
          </datalist>
              <label for="cQtd">Quantity:</label><input type="number" name="tQtd" id="cQtd" min="0" max="5" value="0" onclick="changePrice()"/>
            </div>
          </div>
        </div> 
          `;*/  

      // select cart
      const cart = document.getElementById('cart');
      const total = document.querySelector('.cart-total-container');
      
      cart.insertBefore(cartItem,total)
      alert('item added to the cart');
      showTotals();
       }
       
    //Put data in localStorage
       const item = document.getElementById('store-item-name');
       const price = document.querySelector('.store-item-value');
       const color = document.getElementById('cColor');
       const qtd = document.getElementById('cQtd');
       
       var data = JSON.parse(localStorage.getItem("datauser"));
     
       if(data == null) {
           localStorage.setItem("datauser","[]")
           data = [];
       }
     
       var register = {
           name: item.textContent,
           price: price.textContent,
           color: color.value,
           quantity: qtd.value
            
       }
     
       data.push(register);
       localStorage.setItem("datauser", JSON.stringify(data))

      });
  });
  
  // show totals
  function showTotals() {
  
      const total = [];
      const items = document.querySelectorAll('.cart-item-price');
  
  items.forEach(function(item){
    total.push(parseFloat(item.textContent));  
  })
  //console.log(total);
  
  const totalMoney = total.reduce(function(total,item){
      total += item;
    return total;  
  },0);
  const finalMoney = totalMoney.toFixed(2);
  
  document.getElementById('cart-total').textContent = finalMoney; 
  document.querySelector('.item-total').textContent = finalMoney;
  document.getElementById('item-count').textContent = total.length;
  
  }
  })();
