import util from '../../helpers/util';
import progressBar from '../progressBar/progressBar';
import './fight.scss';

let total = 100;
// const fightArr = [];
// const doNotFightArr = [];

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
    const brawl = -10;
    // if (e) {
    //   fightArr.push(1);
    // }
    // if (fightArr.length > 5) {
    //   brawl = 0;
    // }
    fight(brawl);
    domStringBuilder();
  });
  document.getElementById('runAway').addEventListener('click', (e) => {
    e.preventDefault();
    const runAway = 1;
    // if (fightArr.length < 1) {
    //   runAway = 0;
    // } else if (fightArr.length > 0) {
    //   runAway = 1;
    // } if (runAway === 1) {
    //   doNotFightArr.push(1);
    // } if (fightArr.length === 1 && doNotFightArr.length > 10) {
    //   runAway = 0;
    // }
    console.error(runAway, 'this is runAway');
    fight(runAway);
    domStringBuilder();
  });
};

export default { domStringBuilder, fight };
