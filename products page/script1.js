"use strict";
import books from "./books";

// Display books on the page
function displayBooks() {
  const booksList = document.querySelector(".books-list");
  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `
      <img src="${book.image}" alt="${book.name}">
      <h2>${book.name}</h2>
      <p>${book.description}</p>
      <p>$${book.price.toFixed(2)}</p>
    `;
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(book.id));
    bookItem.appendChild(addButton);
    booksList.appendChild(bookItem);
  });
}
// Initialize the books display
displayBooks();

// // Cart state
// let cart = [];
// // Add product to cart
// function addToCart(bookId) {
//   const book = books.find((b) => b.id === bookId);
//   cart.push(book);
//   updateCartCount();
// }

// // Update cart item count
// function updateCartCount() {
//   const cartCount = document.getElementById("cart-count");
//   cartCount.textContent = cart.length;
// }

// // Show the cart modal
// function showCart() {
//   const cartModal = document.getElementById("cart-modal");
//   const cartItems = document.getElementById("cart-items");
//   const cartTotal = document.getElementById("cart-total");

//   cartItems.innerHTML = "";
//   let total = 0;

//   cart.forEach((item) => {
//     const cartItem = document.createElement("li");
//     cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//     cartItems.appendChild(cartItem);
//     total += item.price;
//   });

//   cartTotal.textContent = total.toFixed(2);
//   cartModal.classList.remove("hidden");
// }

// // Hide the cart modal
// function hideCart() {
//   const cartModal = document.getElementById("cart-modal");
//   cartModal.classList.add("hidden");
// }

// // Event listeners
// document.getElementById("cart").addEventListener("click", showCart);
// document.getElementById("close-cart").addEventListener("click", hideCart);
