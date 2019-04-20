import util from '../../helpers/util';
import './sleep.scss';

let total = 0;

const sleep = (num) => {
  total += num;
  if (total > 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '  <h1>Eat Quad</h1>';
  domString += '  <p>jpan</p>';
  domString += `  <p>Fullness Score: <span>${total}</span></p>`;
  domString += '  <button type="submit" id="catNap">Cat Nap</button>';
  domString += '  <button type="submit" id="solid8">Solid Eight Hours</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  document.getElementById('catNap').addEventListener('click', (e) => {
    e.preventDefault();
    const catNap = 50;
    sleep(catNap);
    domStringBuilder();
  });
  document.getElementById('solid8').addEventListener('click', (e) => {
    e.preventDefault();
    const solid8 = 60;
    sleep(solid8);
    domStringBuilder();
  });
};

export default { domStringBuilder, sleep };
