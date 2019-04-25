import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import sleep from './components/sleep/sleep';
import fight from './components/fight/fight';
import pets from './components/pets/pets';
import progressBar from './components/progressBar/progressBar';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  sleep.domStringBuilder();
  fight.domStringBuilder();
  pets.domStringBuilder();
  progressBar.progressBar();
  // document.getElementById('app').addEventListener('click', progressBar.totalHealth);
};

init();
