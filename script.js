window.addEventListener("load", function () {
    const loadingScreen = document.querySelector(".loader");
    const mainContent = document.querySelector(".main-content");
  
    loadingScreen.style.display = "none"; // Hide the loading screen
    mainContent.style.display = "block"; // Show the main content
  });
  
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }