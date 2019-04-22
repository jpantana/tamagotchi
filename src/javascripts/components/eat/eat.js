import util from '../../helpers/util';
import progressBar from '../progressBar/progressBar';
import './eat.scss';

let total = 100;
// const healthArray = [];
// const unhealthArray = [];


const eat = (num) => {
  total += num;
  if (total > 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
  progressBar.totalSecond(total[eat]);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h1 id="brand">Tamogachi</h1>';
  domString += '<div class="flxCol" id="eatQuad">';
  domString += '  <h1>Eat</h1>';
  // domString += '  <p>Progress: <progress id="bar" value="0" max="100"><span>0</span>%</progress></p>';
  domString += '  <h3>User: uniqueUserName</h3>';
  domString += `  <h3>Fullness Score: <span>${total}</span></h3>`;
  domString += '  <button type="submit" id="healthy">Lemon Grass Oil</button>';
  domString += '  <button type="submit" id="unhealthy">Cheeseburger Pizza</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', (e) => {
    e.preventDefault();
    const healthPoints = 10;
    eat(healthPoints);
    // healthArray.push(healthPoints);
    // const score = healthArray.reduce((acc, b) => acc + b); // trying this for progress bar
    // console.error(score);
    domStringBuilder();
  });
  document.getElementById('unhealthy').addEventListener('click', (e) => {
    e.preventDefault();
    const unhealthPoints = -3;
    eat(unhealthPoints);
    // unhealthArray.push(unhealthPoints);
    // const score = unhealthArray.reduce((acc, b) => acc + b); // trying this for progress bar
    // console.error(score);
    domStringBuilder();
  });
};

export default { domStringBuilder, eat, total };
