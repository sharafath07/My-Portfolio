window.addEventListener("load", function () {
    const loadingScreen = document.querySelector(".loader");
    const mainContent = document.querySelector(".main-content");
  
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  });
  
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }