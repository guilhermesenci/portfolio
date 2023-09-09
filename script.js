document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("dark-mode-button");
  const body = document.body;

  darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
});
