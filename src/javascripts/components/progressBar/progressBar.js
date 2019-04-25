import util from '../../helpers/util';
import './progressBar.scss';

let thisNum = 300;
const newArr = [];

const progressBar = (num) => {
  let domString = '';
  console.error(num);
  if (num !== undefined) {
    thisNum = num + 300;
    console.error(thisNum);
  }
  if (thisNum >= 400) {
    thisNum = 400;
    // console.error(thisNum);
  } else if (thisNum <= 0) {
    thisNum = 0;
    // console.error(thisNum);
  }
  domString += '<h3 id="totalH1">HEALTH</h3>';
  domString += `<progress style="background-color:#FF0000;" id="progressbar" value="${thisNum}" max="400"></progress>`;
  domString += `<p id="totalNumPrint">${thisNum}</p>`;
  util.printToDom('progress', domString);
};

const totalHealth = (x) => {
  newArr.push(x);
  thisNum = newArr.reduce((acc, b) => acc + b);
  // if (thisNum >= 400) {
  //   thisNum = 400;
  //   console.error(thisNum);
  // } else if (thisNum <= 0) {
  //   thisNum = 0;
  // }
  progressBar(thisNum);
};

export default { progressBar, totalHealth };
