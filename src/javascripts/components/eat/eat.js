import util from '../../helpers/util';

let total = 100;
const points = [];

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
  domString += '  <p>JoshP</p>';
  domString += `  <p>Fullness Score: <span>${total}</span></p>`;
  domString += '  <button type="submit" id="healthy">Healthy</button>';
  domString += '  <button type="submit" id="unhealthy">Unhealthy</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', (e) => {
    e.preventDefault();
    const healthPoints = 10;
    points.push(healthPoints);
    pointTally(points.reduce((acc, b) => acc + b));
    points.splice(0, 1);
    domStringBuilder();
  });
  document.getElementById('unhealthy').addEventListener('click', (e) => {
    e.preventDefault();
    const unhealthPoints = -3;
    points.push(unhealthPoints);
    pointTally(points.reduce((acc, b) => acc + b));
    points.splice(0, 1);
    domStringBuilder();
  });
};

export default { domStringBuilder, pointTally };
