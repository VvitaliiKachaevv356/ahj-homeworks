import Field from "./Field";
import GoblinScore from "./GoblinScore";
import Score from "./Score";
import GamePlay from "./GamePlay";

const fields = new Field();
document.addEventListener("DOMContentLoaded", () => {
  const container = fields.createFieldElement();
  const fieldElement = fields.renderField(container);

  const cells = container.querySelectorAll(".cell");

  const gamePlay = new GamePlay(fields.size);

  const goblinScore = new GoblinScore(cells);

  const score = new Score();

  fieldElement.addEventListener("click", score.hit.bind(score));

  setInterval(() => {
    const position = gamePlay.setPosition();
    if (position !== null) {
      goblinScore.goblinMove();
    }
  }, 1000);
});
