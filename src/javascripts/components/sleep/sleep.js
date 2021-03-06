import util from '../../helpers/util';
import './sleep.scss';
import progressBar from '../progressBar/progressBar';

let total = 50;

const sleep = (num) => {
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
  domString += '<div class="flxCol" id="sleepQuad">';
  domString += '  <h1>Sleep</h1>';
  domString += '  <h3>User: uniqueUserName</h3>';
  domString += `  <h3>Fullness Score: <span>${total}</span></h3>`;
  domString += '  <button type="submit" id="catNap">Cat Nap</button>';
  domString += '  <button type="submit" id="solid8">Solid Eight Hours</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  document.getElementById('catNap').addEventListener('click', (e) => {
    e.preventDefault();
    let catNap = 50;
    if (total >= 100) {
      catNap = 0;
    }
    sleep(catNap);
    domStringBuilder();
  });
  document.getElementById('solid8').addEventListener('click', (e) => {
    e.preventDefault();
    let solid8 = 60;
    if (total >= 100) {
      solid8 = 0;
    } else if (total === 50) {
      solid8 = 50;
    }
    sleep(solid8);
    domStringBuilder();
  });
};

export default { domStringBuilder, sleep };
