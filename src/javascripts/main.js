import '../styles/main.scss';
import eat from './components/eat/eat';
import buttonEvents from './components/buttonEvents';

const init = () => {
  eat.domStringBuilder();
  buttonEvents.buttonEvents();
};

init();
