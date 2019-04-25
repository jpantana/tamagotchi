import util from '../../helpers/util';
import './eat.scss';
import progressBar from '../progressBar/progressBar';

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
  progressBar.totalHealth(num); // used to pass total
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h1 id="brand">Tamogachi</h1>';
  domString += '<div class="flxCol" id="eatQuad">';
  domString += '  <h1>Eat</h1>';
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
    domStringBuilder();
  });
  document.getElementById('unhealthy').addEventListener('click', (e) => {
    e.preventDefault();
    const unhealthPoints = -3;
    eat(unhealthPoints);
    domStringBuilder();
  });
};

export default { domStringBuilder, eat, total };
