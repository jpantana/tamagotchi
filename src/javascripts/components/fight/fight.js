import util from '../../helpers/util';
import './fight.scss';

let total = 0;

const fight = (num) => {
  total += num;
  if (total > 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div id="fightQuad">';
  domString += '  <h1>Fight</h1>';
  domString += '  <p>jpan</p>';
  domString += `  <p>Fullness Score: <span>${total}</span></p>`;
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
