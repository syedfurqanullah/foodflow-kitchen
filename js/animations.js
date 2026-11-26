document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-reveal");

  function revealElements() {
    for (let i = 0; i < elements.length; i++) {
      const position = elements[i].getBoundingClientRect().top;

      if (position < window.innerHeight - 100) {
        elements[i].classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", revealElements);

  revealElements();
});