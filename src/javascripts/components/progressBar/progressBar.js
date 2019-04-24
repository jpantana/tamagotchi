import util from '../../helpers/util';
import './progressBar.scss';

let thisNum = 300;

const progressBar = (num) => {
  let domString = '';
  domString += '<h3 id="totalH1">HEALTH</h3>';
  domString += `<progress id="progressbar" value="${num}" max="400"></progress>`;
  util.printToDom('progress', domString);
  // totalHealth();
};

const totalHealth = (x) => {
  console.error(x);
  const newArr = [];
  newArr.push(x);
  console.error(newArr);
  thisNum = newArr.reduce((acc, b) => acc + b);
  progressBar(thisNum); // try and extra utility function IN THE MIDDLE OF IT
  // const eventId = e.target;
  // console.error(eventId);
  // util.printToDom('progressbar', domString);
};

export default { progressBar, totalHealth };
