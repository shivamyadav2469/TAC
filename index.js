const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product__btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showToast("Item added to cart!", "success");
    });
  });
});

function showToast(message, type) {
  const toastContainer = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  toastContainer.appendChild(toast);

  // Show the toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3000);
}

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".hero__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".hero__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".hero__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".hero__btns", {
  ...scrollRevealOption,
  delay: 1500,
});
