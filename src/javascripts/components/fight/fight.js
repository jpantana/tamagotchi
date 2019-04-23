import util from '../../helpers/util';
import progressBar from '../progressBar/progressBar';
import './fight.scss';

let total = 100;

const fight = (num) => {
  total += num;
  if (total > 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
  const newObj = {};
  newObj[fight] = total;
  progressBar.totalSecond(total);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="flxCol" id="fightQuad">';
  domString += '  <h1>Fight</h1>';
  domString += '  <h3>User: uniqueUserName</h3>';
  domString += `  <h3>Fullness Score: <span>${total}</span></h3>`;
  domString += '  <button type="submit" id="runAway">Run Away... <em>bravely</em></button>';
  domString += '  <button type="submit" id="brawl">Brawl</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
  document.getElementById('runAway').addEventListener('click', (e) => {
    e.preventDefault();
    const runAway = 1;
    fight(runAway);
    domStringBuilder();
  });
  document.getElementById('brawl').addEventListener('click', (e) => {
    e.preventDefault();
    const brawl = -10;
    fight(brawl);
    domStringBuilder();
  });
};

export default { domStringBuilder, fight };
