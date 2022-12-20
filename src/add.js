import { save, get } from './save_get.js';

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  add() {
    let scoresArray = get();
    if (!scoresArray) {
      scoresArray = [];
    }
    scoresArray.push({ index: this.index, name: this.name, score: this.score });
    save(scoresArray);
  }
}

export default Scores;