import util from '../../helpers/util';

let total = 100;

const fun = (num) => {
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
  domString += '  <button type="submit" id="superFun">Pure Lemon Grass Seed Oil Extract</button>';
  domString += '  <button type="submit" id="slightlyFun">Cheeseburger Pizza</button>';
  domString += '</div>';
  util.printToDom('play', domString);
  document.getElementById('superFun').addEventListener('click', (e) => {
    e.preventDefault();
    const superFun = 50;
    fun(superFun);
    domStringBuilder();
  });
  document.getElementById('slightlyFun').addEventListener('click', (e) => {
    e.preventDefault();
    const slightlyFun = 2;
    fun(slightlyFun);
    domStringBuilder();
  });
};

export default { domStringBuilder, fun };
