"use strict";

//NavBar
const navBtn = document.getElementById("logo-btn");
const navBar = document.getElementById("navbar");
navBtn.addEventListener("click", () => {
  navBar.classList.toggle("hidden");
});
navBar.addEventListener("mouseleave", () => {
  navBar.classList.add("hidden");
});
// SearchBar
