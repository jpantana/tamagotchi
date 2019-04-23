import util from '../../helpers/util';
import './progressBar.scss';

const totalSecond = (total) => {
  console.error(total);
  console.error()
  // util.printToDom('progressbar', domString);
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
