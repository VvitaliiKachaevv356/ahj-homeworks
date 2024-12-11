export default class Score {
  constructor() {
    this.score = 0;
    document.querySelector(".field").addEventListener("click", this.hit);
  }
  hit = (event) => {
    if (
      (event.target.classList.contains("cell") &&
        event.target.children.length) ||
      event.target.classList.contains("goblin")
    ) {
      this.score++;
      document.querySelector(".score_count").textContent = this.score;
      document.querySelector(".goblin").remove();
    }
  };
}

