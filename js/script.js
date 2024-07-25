function handleClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu for hamburger icon
  document
    .getElementById("hamburger-icon")
    .addEventListener("click", toggleMenu);

  // Select all buttons with the class 'button'
  const sidebarButtons = document.querySelectorAll(".nav-button");

  sidebarButtons.forEach((sidebarButton) => {
    sidebarButton.addEventListener("click", function () {
      // Construct the section ID by appending '-section' to the button ID
      const targetId = this.id + "-section";
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smoothly scroll to the target section
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }); // Check if the viewport width is less than or equal to 768px before toggling the menu
        if (window.innerWidth <= 768) {
          toggleMenu();
        }
      }
    });
  });
});

function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}
