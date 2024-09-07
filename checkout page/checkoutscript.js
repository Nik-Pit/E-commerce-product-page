// Cart data
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Populate the checkout summary with cart items
function populateCheckoutSummary() {
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

  checkoutTotal.textContent = total.toFixed(2);
}

// Handle form submission
document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  const fullName = document.getElementById("full-name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postal-code").value;
  const country = document.getElementById("country").value;
  const cardNumber = document.getElementById("card-number").value;
  const expirationDate = document.getElementById("expiration-date").value;
  const cvv = document.getElementById("cvv").value;

  // Here you would normally send the data to your server
  console.log("Order placed!", {
    fullName,
    address,
    city,
    postalCode,
    country,
    cardNumber,
    expirationDate,
    cvv,
  });

  // Clear cart after placing order
  localStorage.removeItem("cart");
  alert("Order placed successfully!");
  window.location.href = "/products page/index1.html";
});

// Initialize the checkout summary on page load
populateCheckoutSummary();
