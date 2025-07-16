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

            // Call the function to display a message instead of an alert
            displayMessage(`${product.name} has been added to your cart!`);
        });
    });

    // Function to display a message on the page
    function displayMessage(message) {
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.textContent = message; // Set the message text
        messageContainer.style.display = 'block'; // Show the message container

        // Hide the message after 3 seconds
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 3000);
    }
});

