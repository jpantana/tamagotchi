import util from '../../helpers/util';

let total = 100;

const pointTally = (num) => {
  total += num;
  if (total > 100) {
    total = 100;
  } else if (total <= 0) {
    total = 0;
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '  <h1>Eat Quad</h1>';
  domString += '  <p>jpan</p>';
  domString += `  <p>Fullness Score: <span>${total}</span></p>`;
  domString += '  <button type="submit" id="healthy">Pure Lemon Grass Seed Oil Extract</button>';
  domString += '  <button type="submit" id="unhealthy">Cheeseburger Pizza</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', (e) => {
    e.preventDefault();
    const healthPoints = 10;
    pointTally(healthPoints);
    domStringBuilder();
  });
  document.getElementById('unhealthy').addEventListener('click', (e) => {
    e.preventDefault();
    const unhealthPoints = -3;
    pointTally(unhealthPoints);
    domStringBuilder();
  });
};

export default { domStringBuilder, pointTally };
