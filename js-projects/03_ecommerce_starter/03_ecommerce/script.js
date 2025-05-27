
document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {id:1, name: "Product 1", price: 19.99},
        {id:2, name: "Product 2", price: 29.99},
        {id:3, name: "Product 3", price: 59.99},
        {id:4, name: "Product 4", price: 109.99},
    ]

    let cartItems = JSON.parse(localStorage.getItem('items')) || [];

    //Let us get hold of elements to make use of
    const productsDisplay = document.querySelector("#product-list");
    const cartItemsDisplay = document.querySelector("#cart-items");
    const emptyCartMessage = document.querySelector("#empty-cart");
    const cartTotalDisplay = document.querySelector("#cart-total");
    const priceDisplay = document.querySelector("#total-price");
    const checkoutBtn = document.querySelector("#checkout-btn");

    renderCart();

    //Let us display products
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;
        productsDisplay.appendChild(productDiv);
    })

    productsDisplay.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            e.stopPropagation();
            const productID = parseInt(e.target.getAttribute('data-id'));
            //Let us get this from product list and add to cart
            const product = products.find(p => p.id === productID);
            addToCart(product);
        }
    })

    function addToCart(product){
        cartItems.push(product)
        storeItem();
        renderCart();
    }

    function renderCart(){
        cartItemsDisplay.innerHTML = "";
        let totalPrice = 0;
        
        cartItems.forEach((p, index) => {
            totalPrice += p.price;
            const item = document.createElement('div');
            item.innerHTML = `
            <div class="cartItem">
            <div><span class="item">${p.name} - $${p.price.toFixed(2)}</span></div>
            <div>
            <button class="cartItemBtn">Delete</button>
            </div>
            </div>
            `
            cartItemsDisplay.appendChild(item)
            priceDisplay.textContent = `$${totalPrice}`
        })

        if(cartItems.length > 0){
            emptyCartMessage.classList.add("hidden");
            cartTotalDisplay.classList.remove("hidden");
            priceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            emptyCartMessage.classList.remove("hidden");
            priceDisplay.textContent = `$0.00`;
        }
    }

    checkoutBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        cartItems.length = 0;
        alert("Checkout successful")
        renderCart();
    })

    //Let us target cartItem Display and add listener to it
    cartItemsDisplay.addEventListener("click", (e) => {
        e.stopPropagation()
        if (e.target.tagName === "BUTTON"){
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId)
            removeProduct(product);
        }
    })

    function removeProduct(product){
        cartItems.pop(product);
        storeItem();
        renderCart();
    }

    function storeItem(){
        localStorage.setItem("items", JSON.stringify(cartItems));
    }
})