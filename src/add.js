const myURLGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mDhWvHDJREqmHvdneZzP/scores/';

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  add = async () => {
    await fetch(myURLGame, {
      method: 'POST',
      body: JSON.stringify({
        user: this.name,
        score: this.score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
  }
}

export default Scores;
