import validate from "./validator";
import paySystem from "./paySystem";

document.addEventListener("DOMContentLoaded", () => {
  const cardSubmitButton = document.querySelector("#card-submit");
  if (cardSubmitButton) {
    cardSubmitButton.addEventListener("click", (event) => {
      event.preventDefault();
      const num = document.querySelector("#numberCard-input").value;
      if (validate(num)) {
        const system = paySystem(num);
        alert(`Valid card number. Payment system: ${system}`);
      } else {
        alert("Invalid card number");
      }
    });
  } else {
    console.error("Элемент с ID card-submit не найден");
  }
});
