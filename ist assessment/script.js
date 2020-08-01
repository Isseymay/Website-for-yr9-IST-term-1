var products;


var product = products[0];

var div = document.getElementById("cont-div");

for(var i=0; i < products.length; i++){

    var newDiv = document.createElement('div');
    product = products[i]
    
   
    newDiv.className = 'profile step border';
    if (i == 0) {newDiv.className = 'profile step active border';}
    newDiv.innerHTML = `
        <img id="profile" src="${product.img}.jpg" width="400" class="styling">
        <p class="name styling"><strong>Name:</strong> ${product.nam}</p>
        <p class="price styling"><strong>Price:</strong> ${product.price}</p>
        <p class="description styling"><strong>Description:</strong> ${product.description}</p>
        <p class = "rating styling"><strong>rating:</strong> ${product.rating}/5</p>
        <p class="comments styling"><strong >comments:</strong>${product.comments}</p>
        <p class="specs styling"><strong >Specs:</strong> ${product.specs}</p>`;
    div.appendChild(newDiv);
}