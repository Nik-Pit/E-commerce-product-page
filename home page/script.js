"use strict";

//NavBar
const navBtn = document.getElementById("logo-btn");
const navBar = document.getElementById("navbar");
navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
});
//SearchBar
const search = document.getElementById("search-book");
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    window.location.href = "/products page/index1.html";
  }
});
