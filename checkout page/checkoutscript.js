"use strict";

// Cart data
const cart = JSON.parse(localStorage.getItem("cart")) || [];

//Checkout summary with cart items
function checkoutSummary() {
  const checkoutItems = document.getElementById("checkout-items");
  const checkoutTotal = document.getElementById("checkout-total");

  checkoutItems.innerHTML = "";
  let total = 0;

  cart.forEach((book) => {
    const checkoutItem = document.createElement("li");
    checkoutItem.textContent = `${book.name} - $${book.price.toFixed(2)}`;
    checkoutItems.appendChild(checkoutItem);
    total += book.price;
  });
  checkoutTotal.classList.add("total");
  checkoutTotal.textContent = total.toFixed(2);
}

// Handle form submission
const checkOutForm = document.getElementById("checkout-form");
checkOutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  const fullName = document.getElementById("full-name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;

  // Clear cart after placing order
  localStorage.removeItem("cart");
  alert(
    `Order placed successfully ${fullName}! It wil be sent to ${city}, at the address:${address} in 2-5 working days! Hope to see you again soon!`
  );
  window.location.href = "/home page/index.html";
});

// Initialize the checkout summary on page load
checkoutSummary();
