"use strict";

// Product data

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    description: "This is a great product.",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    description: "This is another great product.",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    description: "This is yet another great product.",
  },
];
// Cart state
let cart = [];
// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCartCount();
}

// Update cart item count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

// Display products on the page
function displayProducts() {
  const productList = document.querySelector(".product-list");
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>$${product.price.toFixed(2)}</p>
    `;
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(product.id));
    productItem.appendChild(addButton);
    productList.appendChild(productItem);
  });
}

// Show the cart modal
function showCart() {
  const cartModal = document.getElementById("cart-modal");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(cartItem);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
  cartModal.classList.remove("hidden");
}

// Hide the cart modal
function hideCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.classList.add("hidden");
}

// Event listeners
document.getElementById("cart").addEventListener("click", showCart);
document.getElementById("close-cart").addEventListener("click", hideCart);

// Initialize the product display
displayProducts();
