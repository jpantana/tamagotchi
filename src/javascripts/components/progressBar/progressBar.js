import util from '../../helpers/util';
import './progressBar.scss';

let thisNum = 300;
const newArr = [];

const progressBar = (num) => {
  let domString = '';
  if (num !== undefined) {
    thisNum = 300 + num;
    if (thisNum > 400) {
      thisNum = 400;
    } else if (thisNum < 0) {
      thisNum = 0;
    }
  }
  domString += '  <h3 id="totalH1">HEALTH</h3>';
  domString += `  <progress style="background-color: #FF0000;" id="progressbar" value="${thisNum}" max="400"></progress>`;
  domString += `  <p id="totalNumPrint">${thisNum}</p>`;
  util.printToDom('progress', domString);
};

const totalHealth = (x) => {
  newArr.push(x);
  thisNum = newArr.reduce((acc, b) => acc + b);
  progressBar(thisNum);
};

export default { progressBar, totalHealth };
