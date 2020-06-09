const handleResponsiveHeader = () => {
  console.log("here");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });
};

handleResponsiveHeader();
