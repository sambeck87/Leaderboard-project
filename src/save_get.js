function save(data) {
  data = JSON.stringify(data);
  localStorage.setItem('scores', data);
}

function get() {
  let allScores = localStorage.getItem('scores');
  allScores = JSON.parse(allScores);
  if (!allScores) {
    return null;
  }
  return allScores;
}

function Display() {
  const allScores = get();
  let toDisplay = '';
  if (!allScores) {
    return;
  }
  for (let index = 0; index < allScores.length; index += 1) {
    let background = '';
    if (index % 2) {
      background = 'grey';
    }
    toDisplay += `<div class="${background} score_list">${allScores[index].name}: ${allScores[index].score}</div>`;
  }
  const contScores = document.getElementById('scores');
  contScores.innerHTML = `${toDisplay}`;
}

export { save, get, Display };