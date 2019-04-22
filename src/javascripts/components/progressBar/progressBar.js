import util from '../../helpers/util';
import './progressBar.scss';

const totalSecond = (total) => {
  const newObj = {
    eat: 0,
    play: 0,
    sleep: 0,
    fight: 0,
  };
  // util.printToDom('progressbar', domString);
  return newObj;
  // let domString = '';
  // console.error(total);
  // if (total <= 100 && total > 97) {
  //   domString += '<div id="progress">';
  //   domString += '</div>';
  //   domString += `<h1 id="totalH1">${total}</h1>`;
  // }
};

// let maxHealth = 400;

const progressBar = () => {
  let domString = '';
  domString += '<div></div>';
  // domString += '<div id="secondTooth"></div>';
  // domString += '<div id="thirdTooth"></div>';
  // domString += '<div id="fourthTooth"></div>';
  // domString += '<div id="fifthTooth"></div>';
  // domString += '<div id="sixthTooth"></div>';
  // domString += '<div id="seventhTooth"></div>';
  // domString += '<div id="eigthTooth"></div>';
  util.printToDom('progressbar', domString);
  totalSecond();
};
export default { progressBar, totalSecond };
