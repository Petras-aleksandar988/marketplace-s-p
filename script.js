let allTotal = 0

function addToCart(element) {
    let mainEl = element.closest(".single-item");
    let price = mainEl.querySelector(".price").innerText
    let quantity = mainEl.querySelector("input").value
    let name = mainEl.querySelector("h3").innerText

    let cartItems = document.querySelector(".cart-items");

    if (parseInt(quantity) > 0) {

            mainEl.querySelector(".actions input").value = 0;

        price = parseInt(price.substring(1))

        let total = price * parseInt(quantity)
      allTotal += total

        cartItems.innerHTML += ` 
				                   <div class="cart-single-item">
					               <h3>${name}</h3>
					               <p>${price} x ${quantity} = $<span>${total}</span> </p>
                                   <button onclick="removeFromCart(this)" >Remove</button>
				                 </div>
			`;
        
        document.querySelector(".total").innerText = `Total: $${allTotal}`
        element.innerText = "Added"
        element.setAttribute("disabled", true)
    }
}


function removeFromCart(element) {
    let mainEl = element.closest(".cart-single-item");
    let price = mainEl.querySelector("p span").innerText
    let name = document.querySelector(".cart-single-item h3").innerText;
    let vegetables = document.querySelectorAll(".single-item")
    console.log(name);
    price = parseInt(price)
    mainEl.remove()
    allTotal -= price
        document.querySelector(".total").innerText = `Total:$${allTotal}`;
    vegetables.forEach(vege => {
        let itemName = vege.querySelector(".si-content h3").innerText;
        
        if (itemName === name) {
            // vege.querySelector(".actions input").value = 0
            vege.querySelector(".actions button").innerText = "Add"
            vege.querySelector(".actions button").removeAttribute("disabled")
        }
   })
}