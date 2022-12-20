const myURLGame = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/mDhWvHDJREqmHvdneZzP/scores/';

const Display = async () => {
  let allScores;
  await fetch(myURLGame)
    .then((response) => response.json())
    // eslint-disable-next-line
    .then((json) => allScores = json);
  if (!allScores.result[0]) {
    return null;
  }
  let toDisplay = '';
  for (let index = 0; index < allScores.result.length; index += 1) {
    let background = '';
    if (index % 2) {
      background = 'grey';
    }
    toDisplay += `<div class="${background} score_list">${allScores.result[index].user}: ${allScores.result[index].score}</div>`;
  }
  const contScores = document.getElementById('scores');
  contScores.innerHTML = `${toDisplay}`;
  return 0;
};

export default Display;
