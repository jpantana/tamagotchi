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
  progressBar.totalHealth(num); // used to pass total
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
  document.getElementById('brawl').addEventListener('click', (e) => {
    e.preventDefault();
    let brawl = -10;
    if (total === 0) {
      brawl = 0;
    } else if (total > 0 && total < 9) {
      brawl = -total;
    }
    fight(brawl);
    domStringBuilder();
  });
  document.getElementById('runAway').addEventListener('click', (e) => {
    e.preventDefault();
    let runAway = 1;
    if (total === 100) {
      runAway = 0;
    }
    fight(runAway);
    domStringBuilder();
  });
};

export default { domStringBuilder, fight };
