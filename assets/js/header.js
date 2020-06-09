const handleResponsiveHeader = () => {

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    nextElement = navbar.nextElementSibling;

    navLinks.classList.toggle("nav-open");
    nextElement.classList.toggle("push-down");
  });
};

handleResponsiveHeader();
