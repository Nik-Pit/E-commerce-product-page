"use strict";
// Books Data
export const books = [
  {
    id: 1,
    name: "Nineteen Eighty-Four",
    price: 19.99,
    image: "/images/0334040-264x264-800x800-96x96-560x560.webp",
    description:
      "Winston Smith is an employee at the Ministry of Truth. He is responsible for rewriting past records to align with the Party's current opinions. He greatly opposes the Party and wants to overthrow them. He meets a woman named Julia and starts an illegal affair with her, hiding in a secret apartment and discussing their feelings about the government. They soon find out that they were being watched the whole time, and they are tortured into saying that they no longer oppose the Party and Big Brother anymore.",
  },
  {
    id: 2,
    name: "The Art of Not Eating",
    price: 29.99,
    image: "/images/book2.avif",
    description:
      "n this bold and radical book, Hamel-Akré follows Cheyne through the pages of medical studies, novels and historical scandals, meeting ash-eating mystics, wasting society girls, impoverished female fasters and early feminist philosophers, all of whom were once grappling with nascent ideas around food, longing and the body. In doing so, she uncovers the eighteenth-century origins of both today's diet culture and her own troubled relationship with wanting.",
  },
  {
    id: 3,
    name: "What Are Children For",
    price: 9.99,
    image: "/images/book3.webp",
    description:
      "Across the developed world, fewer and fewer people are becoming parents. We seek self-fulfilment; we want women to find meaning and self-worth outside the household; we wish to protect the planet from the ravages of climate change; we do what we can to protect others from senseless suffering. On the face of it, none of these goals are served by having children. Amid such pressures, how on earth can we make the choice to do so?Anastasia Berg and Rachel Wiseman offer a way out of this inertia and indecision by reminding us that in making the individual decision whether to have children, we confront a profound philosophical question: for all its pains and failures, is human life worth living? What Are Children For? is a stirring call to overcome fear and dread and embrace the value of human existence and a human future.",
  },
  {
    id: 4,
    name: "To Kill A Mockingbird",
    price: 39.99,
    image: "/images/book4.jpg",
    description:
      "'Shoot all the Bluejays you want, if you can hit 'em, but remember it's a sin to kill a Mockingbird.' Lawyer Atticus Finch gives this advice to his children as he defends the real mockingbird of Harper Lee's classic novel - a black man charged with the rape of a white girl.Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man's struggle for justice. But the weight of history will only tolerate so much...A benchmark of classic American literature, To Kill A Mockingbird approaches the highly sensitive topic of racism in 1930s America with humour, warmth and compassion, making it widely recognised as one of the best books of the twentieth century and in American literature.Winner of the 1961 Pulitzer Prize for Literature, Fiction.",
  },
  {
    id: 5,
    name: "The Great Gatsby",
    price: 9.99,
    image: "/images/book5.avif",
    description:
      "Generally considered to be F. Scott Fitzgerald's finest novel, The Great Gatsby is a consummate summary of the 'roaring twenties', and a devastating expose of the 'Jazz Age'. Through the narration of Nick Carraway, the reader is taken into the superficially glittering world of the mansions which lined the Long Island shore in the 1920s, to encounter Nick's cousin Daisy, her brash but wealthy husband Tom Buchanan, Jay Gatsby and the mystery that surrounds him.",
  },
  {
    id: 6,
    name: "Book 6",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    description: "This is yet another great book.",
  },
  {
    id: 7,
    name: "Book 7",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    description: "This is yet another great book.",
  },
  {
    id: 8,
    name: "Book 8",
    price: 9.99,
    image: "https://via.placeholder.com/150",
    description: "This is yet another great book.",
  },
  {
    id: 9,
    name: "Book 9",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    description: "This is yet another great book.",
  },
  {
    id: 10,
    name: "Book 10",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    description: "This is yet another great book.",
  },
];

// Display books on the page
function displayBooks() {
  const booksList = document.querySelector(".books-list");
  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    const truncatedDescription = truncateText(book.description, 3);
    bookItem.innerHTML = `
      <img src="${book.image}" alt="${book.name}">
      <h2>${book.name}</h2>
      <p>${truncatedDescription}</p>
      <h3>${book.price.toFixed(2)}€</h3>
      
    `;
    // Description button
    const descriptionBtn = document.createElement("button");
    descriptionBtn.textContent = "Read Description";
    descriptionBtn.addEventListener("click", () => openModal(book.description));
    bookItem.appendChild(descriptionBtn);
    // Add to cart btn
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(book.id));
    bookItem.appendChild(addButton);
    booksList.appendChild(bookItem);
  });
}
// Description text shortened
function truncateText(text, wordLimit) {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}
// Description Modal
function openModal(description) {
  const modal = document.getElementById("description-modal");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");

  modalDescription.textContent = description;
  modal.classList.remove("hidden");
  modal.style.display = "block";

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });
}

// Initialize the books display
displayBooks();

// // Cart state
let cart = [];
// // Add product to cart
function addToCart(bookId) {
  const book = books.find((b) => b.id === bookId);
  cart.push(book);
  updateCartCount();
}

// // Update cart item count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

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
