"use strict";

const menuButton = document.querySelector(".menu-icon");
const navLinks = document.querySelector("#navLinks");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navLinks.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Mở menu");
  }
});
