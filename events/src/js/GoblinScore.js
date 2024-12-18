import images from "../pic/goblin.png";

export default class GoblinScore {
  constructor(cells) {
    this.cells = cells;
    this.miss = 0;
    this.interval = 0;
  }

  _createGoblin() {
    const goblin = document.createElement("img");
    goblin.classList.add("goblin");
    goblin.src = images;
    return goblin;
  }

  _getHole() {
    return Math.floor(Math.random() * this.cells.length);
  }

  goblinMove() {
    const newPosition = this._getHole();
    const existingGoblin = document.querySelector(".goblin");

    if (existingGoblin) {
      this.miss++;
      existingGoblin.remove();
    }

    if (this.cells[newPosition].childElementCount) {
      this.miss--;
      return;
    }

    const goblin = this._createGoblin();
    this.cells[newPosition].appendChild(goblin);

    if (this.miss >= 5) {
      clearInterval(this.interval);
      alert("Game Over!");
    }

    this.updateMissScore();
  }

  updateMissScore() {
    document.querySelector(".miss_score").textContent = this.miss;
  }
}
