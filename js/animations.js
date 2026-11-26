
// Simple scroll reveal
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-reveal");

  function revealElements() {
    elements.forEach(function (element) {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        element.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealElements);

  revealElements();
});
