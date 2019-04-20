import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
};

init();
