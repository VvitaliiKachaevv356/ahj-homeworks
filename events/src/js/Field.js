export default class Field {
  constructor(size = 4) {
    this.size = size;
  }

  createFieldElement() {
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `<h1 class='title'>The Goblin Game</h1><div class='field'></div>
      <div class="gameInfo">
        <span class="miss">Гоблинов прошло : <p class="miss_score">0</p></span>
        <span class="score">Очков : <p class="score_count">0</p></span>
      </div>`;
    return container;
  }

  renderField(container) {
    const field = container.querySelector(".field");
    for (let i = 0; i < this.size * this.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      field.appendChild(cell);
    }
    document.body.prepend(container);
    return field;
  }
}
