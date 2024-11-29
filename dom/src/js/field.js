export default class Field {
  constructor(size = 4) {
    this.size = size;
  }
  gameField() {
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `<h1 class='title'>The Goblin Game</h1><div class='field'></div>`;
    const field = container.querySelector(".field");
    for (let i = 0; i < this.size ** 2; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      field.appendChild(cell);
    }
    document.body.prepend(container);
    return field;
  }
}