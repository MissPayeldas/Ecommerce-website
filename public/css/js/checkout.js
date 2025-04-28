document.addEventListener("DOMContentLoaded", function () {
    const shippingAddressDiv = document.getElementById("shipping-address");
    const paymentForm = document.getElementById("payment-form");
    let total = 100; // Order total, modify as needed
  
    // Retrieve selected shipping address
    let shippingAddress = JSON.parse(localStorage.getItem("selectedAddress"));
    if (shippingAddress) {
      shippingAddressDiv.innerHTML = `
        <strong>${shippingAddress.fullName}</strong><br>
        ${shippingAddress.address}<br>
        ${shippingAddress.city}, ${shippingAddress.state} - ${shippingAddress.pincode}<br>
        Phone: ${shippingAddress.phone}
      `;
    } else {
      shippingAddressDiv.innerHTML = "No address selected.";
    }
  
    // Handle payment form submission
    paymentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
      
      // You can implement further logic for payment handling here
      if (selectedPayment === "cod") {
        window.location.href = "order-success.html";
      }
    });
  });
  
