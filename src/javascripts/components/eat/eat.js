import util from '../../helpers/util';
import './eat.scss';
import progressBar from '../progressBar/progressBar';

let total = 100;

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
    let healthPoints = 10;
    if (total >= 90) {
      healthPoints = 0;
    }
    eat(healthPoints);
    domStringBuilder();
  });
  document.getElementById('unhealthy').addEventListener('click', (e) => {
    e.preventDefault();
    let unhealthPoints = -3;
    if (total <= 0) {
      unhealthPoints = 0;
    } else if (total === 2) {
      unhealthPoints = -2;
    } else if (total === 1) {
      unhealthPoints = -1;
    }
    eat(unhealthPoints);
    domStringBuilder();
  });
};

export default { domStringBuilder, eat, total };
