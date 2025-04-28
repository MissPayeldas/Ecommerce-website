document.addEventListener("DOMContentLoaded", function () {
    const cartTable = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        cartTable.innerHTML = ""; // Clear previous items
        let total = 0;

        if (cart.length === 0) {
            cartTable.innerHTML = "<tr><td colspan='3'>Your cart is empty.</td></tr>";
            totalPriceEl.innerText = "0.00";
            return;
        }

        cart.forEach((item, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${item.image}" width="50"> ${item.name}</td>
                <td>₹${item.price}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;
            cartTable.appendChild(row);
            total += parseFloat(item.price);
        });

        totalPriceEl.innerText = total.toFixed(2);
    }

    // Remove item from cart
    cartTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    });

    checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
        } else {
            // Save cart items and total amount to localStorage
            localStorage.setItem("cartItems", JSON.stringify(cart));
            const totalAmount = cart.reduce((total, item) => total + parseFloat(item.price), 0);
            localStorage.setItem("cartTotal", totalAmount.toFixed(2));

            // Redirect to checkout page
            window.location.href = "checkout.html";
        }
    });

    updateCart(); // Call function to load items when page loads
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-to-cart")) {
            const product = {
                name: event.target.getAttribute("data-name"),
                price: event.target.getAttribute("data-price"),
                image: event.target.getAttribute("data-image")
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            // Instead of alert, show a message on the page
            showCartMessage(`${product.name} added to cart!`);
        }
    });

    function showCartMessage(message) {
        let messageBox = document.getElementById("cart-message");

        if (!messageBox) {
            messageBox = document.createElement("div");
            messageBox.id = "cart-message";
            messageBox.style.position = "fixed";
            messageBox.style.bottom = "20px";
            messageBox.style.right = "20px";
            messageBox.style.backgroundColor = "#4CAF50";
            messageBox.style.color = "white";
            messageBox.style.padding = "10px 20px";
            messageBox.style.borderRadius = "5px";
            messageBox.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
            document.body.appendChild(messageBox);
        }

        messageBox.innerText = message;
        messageBox.style.display = "block";

        setTimeout(() => {
            messageBox.style.display = "none";
        }, 2000); // Message disappears after 2 seconds
    }
});