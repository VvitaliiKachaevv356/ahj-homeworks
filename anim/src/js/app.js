const button = document.querySelector("button");
const tooltip = document.querySelector(".tooltip");
button.addEventListener("click", () => {
  tooltip.classList.toggle("tooltip_toggle");
});

export default function demo(value) {
  return `Demo: ${value}`;
}
