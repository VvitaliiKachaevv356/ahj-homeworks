export default class GamePlay {
  constructor(fields) {
    this.fields = fields;
    this.size = 4;
    this.board = null;
    this.position = -1;
  }
  init() {
    this.board = this.fields.gameField();
    this.start();
  }
  setPosition() {
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.size ** 2);
    } while (newPosition === this.position);
    this.delPosition(this.position);
    this.board.children[newPosition].classList.add("goblin");
    this.position = newPosition;
  }
  delPosition(position) {
    if (position !== -1) {
      this.board.children[position].classList.remove("goblin");
    }
  }
  start() {
    setInterval(() => this.setPosition(), 1000);
  }
}
