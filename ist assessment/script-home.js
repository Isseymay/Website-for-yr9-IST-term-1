var products;


var product = products[0];

var div = document.getElementById("grid-container");

for(var i=0; i < products.length; i++){
	/* fix line below out of python speak with help*/
	if (product.sale == 1){
    var newDiv = document.createElement('div');
    product = products[i]
    
   
    newDiv.className = 'profile step grid-item';
    if (i == 0) {newDiv.className = 'profile step active grid-item ';}
    newDiv.innerHTML = `
        <img id="profile" src="${product.img}.jpg"  class="img">
        <p class="name "><strong>Name:</strong><a href="one.html"> ${product.nam}</a></p>`;
    div.appendChild(newDiv);
	
}


