import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import sleep from './components/sleep/sleep';
import fight from './components/fight/fight';
import pets from './components/pets/pets';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  sleep.domStringBuilder();
  fight.domStringBuilder();
  pets.domStringBuilder();
};

init();
