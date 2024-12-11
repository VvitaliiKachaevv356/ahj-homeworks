import Field from "./Field";
import GoblinScore from "./GoblinScore";
import Score from "./Score";
import GamePlay from "./GamePlay";

const fields = new Field();
document.addEventListener("DOMContentLoaded", () => {
  const goblinScore = new GoblinScore();
  const score = new Score();
});
const gameplay = new GamePlay(fields);
gameplay.init();
