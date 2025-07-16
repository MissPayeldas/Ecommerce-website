document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = {
                name: this.getAttribute("data-name"),
                price: this.getAttribute("data-price"),
                image: this.getAttribute("data-image")
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${product.name} added to cart!`);
        });
    });
});



