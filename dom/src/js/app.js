import Field from './field';
import GamePlay from './gamePlay';

const fields = new Field();
const gameplay = new GamePlay(fields);
gameplay.init();