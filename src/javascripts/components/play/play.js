import util from '../../helpers/util';
import './play.scss';
import progressBar from '../progressBar/progressBar';

let total = 50;
const superFunArr = [];
const slightlyFunArr = [];

const fun = (num) => {
  total += num;
  if (total > 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
  progressBar.totalHealth(num);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="flxCol" id="playQuad">';
  domString += '  <h1>Play</h1>';
  domString += '  <h3>User: uniqueUserName</h3>';
  domString += `  <h3>Fullness Score: <span>${total}</span></h3>`;
  domString += '  <button type="submit" id="superFun">European Vacation</button>';
  domString += '  <button type="submit" id="slightlyFun">Coding Homework</button>';
  domString += '</div>';
  util.printToDom('play', domString);
  document.getElementById('superFun').addEventListener('click', (e) => {
    e.preventDefault();
    let superFun = 50;
    if (e) {
      superFunArr.push(1);
    }
    if (superFunArr.length > 1) {
      superFun = 0;
    }
    fun(superFun);
    domStringBuilder();
  });
  document.getElementById('slightlyFun').addEventListener('click', (e) => {
    e.preventDefault();
    let slightlyFun = 2;
    if (e) {
      slightlyFunArr.push(1);
    }
    if (slightlyFunArr.length > 25) {
      slightlyFun = 0;
    }
    fun(slightlyFun);
    domStringBuilder();
  });
};

export default { domStringBuilder, fun };
