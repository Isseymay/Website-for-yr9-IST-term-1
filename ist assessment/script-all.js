var products;


var product = products[0];

var div = document.getElementById("grid-container");

for(var i=0; i < products.length; i++){

    var newDiv = document.createElement('div');
    product = products[i]
    
   
    newDiv.className = 'profile step grid-item';
    if (i == 0) {newDiv.className = 'profile step active grid-item ';}
    newDiv.innerHTML = `
        <img id="profile" src="${product.img}.jpg"  class="img">
        <p class="name " ><strong>Name:</strong> ${product.nam}</p>`;
    div.appendChild(newDiv);
}
