import './style.css';
import Scores from './add.js';
import Display from './save_get.js';

window.addEventListener('load', Display());

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const warning = document.getElementById('warning');
  if (!nameInput.value || !scoreInput.value) {
    warning.classList.remove('hide');
    return;
  }
  warning.classList.add('hide');
  const newScore = new Scores(nameInput.value, scoreInput.value);
  newScore.add();
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  Display();
});
