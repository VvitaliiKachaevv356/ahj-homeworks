import tooltip from "../popover";
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const data = {
    "btn-1": {
      title: "Popover first title",
      message: "And here`s some amazing content. It`s very engaging. Right?",
    },
    "btn-2": {
      title: "Popover second title",
      message: "And here`s some amazing content. It`s very engaging. Right?",
    },
    "btn-3": {
      title: "Popover third title",
      message: "And here`s some amazing content. It`s very engaging. Right?",
    },
    "btn-4": {
      title: "Popover fourth title",
      message: "And here`s some amazing content. It`s very engaging. Right?",
    },
  };
  container.addEventListener("click", (event) => {
    event.preventDefault();
    const { target } = event;
    const btn = target.closest(".btn");

    if (btn) {
      let popover = btn.querySelector(".popover");
      if (popover) {
        popover.classList.toggle("hidden");
      } else {
        popover = tooltip(data[btn.id], btn);
      }
    }
  });
  document.addEventListener("click", (event) => {
    const btn = event.target.closest(".btn");
    if (!btn) {
      const popovers = document.querySelectorAll(".popover");
      popovers.forEach((popover) => {
        popover.classList.add("hidden");
      });
    }
  });
});
