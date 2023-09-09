const cursor = document.querySelector(".cursor");
const cursorTrail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
  // Move o cursor para a posição do mouse
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";

  // Move o rastro para a posição do cursor
  cursorTrail.style.left = e.pageX + "px";
  cursorTrail.style.top = e.pageY + "px";
});

// Quando o cursor entra em um elemento com a classe .trail-item, mude a cor do rastro
const trailItems = document.querySelectorAll(".trail-item");
trailItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursorTrail.style.backgroundColor = getComputedStyle(item).color;
  });
  item.addEventListener("mouseleave", () => {
    cursorTrail.style.backgroundColor = "transparent";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const elements = body.querySelectorAll("*");

  elements.forEach(function (element) {
    element.classList.add("trail-item");
  });
});
