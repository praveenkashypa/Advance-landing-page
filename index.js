// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollBtn = document.getElementById("scrollToTopBtn");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    scrollBtn.style.display = "block";
  } else {
    navbar.classList.remove("scrolled");
    scrollBtn.style.display = "none";
  }

  // Highlight active link
  document.querySelectorAll('.section').forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Toggle mobile menu
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

// Scroll to top
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
