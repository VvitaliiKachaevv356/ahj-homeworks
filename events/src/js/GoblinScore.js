import images from "../pic/goblin.png";
export default class GoblinScore {
  constructor() {
    this.cell = document.querySelectorAll(".cell");
    this.miss = 0;
    this.intrval = setInterval(this.goblinMove, 1000);
  }
  _createGoblin() {
    const goblin = document.createElement("img");
    goblin.classList.add("goblin");
    goblin.src = images;
    return goblin;
  }
  _getHole() {
    return Math.floor(Math.random() * this.cell.length);
  }
  goblinMove = () => {
    const newPosition = this._getHole();
    const existingGoblin = document.querySelector(".goblin");
    if (existingGoblin) {
      this.miss++;
      existingGoblin.remove();
    }
    if (this.cell[newPosition].childElementCount) {
      this.miss--;
      return;
    }
    const goblin = this._createGoblin();
    this.cell[newPosition].appendChild(goblin);
    if (this.miss >= 5) {
      clearInterval(this.intrval);
      alert("Game Over!");
    }
    document.querySelector(".miss_score").textContent = this.miss;
  };
}
