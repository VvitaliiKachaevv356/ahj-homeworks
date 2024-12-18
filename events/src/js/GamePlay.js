export default class GamePlay {
  constructor(size) {
    this.size = size;
    this.position = -1;
  }

  setPosition() {
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.size * this.size);
    } while (newPosition === this.position);
    this.position = newPosition;
    return newPosition;
  }

  delPosition(position) {
    if (position !== -1) {
      return position;
    }
    return null;
  }
}