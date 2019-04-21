import util from '../../helpers/util';
import './pets.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<img src="https://66.media.tumblr.com/a356835717e8afce0d654f88d29ac6cc/tumblr_oqk9fwwY491wq3wtao1_500.gif" width="190" height="190" class="photo" data-pin-url="http://gotchigraph.tumblr.com/post/161092316272/tamabotchi-gif-made-by-gotchigraph" data-pin-description="gotchigraph">';
  util.printToDom('pet', domString);
};

export default { domStringBuilder };
