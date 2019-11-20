function getcard() {
    var card = document.querySelector(".card");
    
    var data = JSON.parse(localStorage.getItem("datauser"));
  
    if(data == null) {
        localStorage.setItem("datauser","[]")
        data = [];
    }
  
    var register = {
        item: card.value
    }
  
    data.push(register);
    localStorage.setItem("datauser", JSON.stringify(data))
  }