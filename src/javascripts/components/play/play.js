import util from '../../helpers/util';
import progressBar from '../progressBar/progressBar';
import './play.scss';

let total = 50;

const fun = (num) => {
  total += num;
  if (total > 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
  progressBar.totalSecond(total);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div id="progressbar"></div>';
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
    const superFun = 50;
    fun(superFun);
    domStringBuilder();
  });
  document.getElementById('slightlyFun').addEventListener('click', (e) => {
    e.preventDefault();
    const slightlyFun = 2;
    fun(slightlyFun);
    domStringBuilder();
  });
};

export default { domStringBuilder, fun };
