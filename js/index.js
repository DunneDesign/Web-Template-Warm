const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Toggle dropdown on mobile click (Updated window breakpoint check)
dropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 1024) {
    e.preventDefault(); // Prevents link from navigating
    const dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("active");
  }
});
