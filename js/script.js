function removeActiveClass() {
  const buttons = document.querySelectorAll(".sidebar .nav-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}
function removeAnimation() {
  document.getElementById("sidebar").classList.remove("animate");
  document.getElementById("main-content").style.marginLeft = "240px";
}
function removeAnimation1() {
  document.getElementById("sidebar").classList.remove("animate1");
  sidebar.style.display = "none";
  document.getElementById("main-content").style.marginLeft = "30px";
}

function handleClick() {
  removeActiveClass();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  toggleMenu();
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
      removeActiveClass();
      this.classList.add("active");
      // Construct the section ID by appending '-section' to the button ID
      const targetId = this.id + "-section";
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smoothly scroll to the target section
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }); // Check if the viewport width is less than or equal to 768px before toggling the menu

        toggleMenu();
      }
    });
  });
});

function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  // sidebar is currently visible
  if (sidebar.style.display === "block") {
    document.getElementById("sidebar").classList.add("animate1");
    document.getElementById("main-content").style.marginLeft = "30px";
    setTimeout(removeAnimation1, 1001);
  }
  // sidebar is currently hidden
  else {
    sidebar.style.display = "block";
    document.getElementById("sidebar").classList.add("animate");
    setTimeout(removeAnimation, 1001);
  }
}
