import { Parallax,} from 'react-parallax';
import girlWithHat from '../../img/girlWithHat.png'


const Image = () => (
  <Parallax className='image' bgImage={girlWithHat} bgImageAlt="drawing" strength={800}>
    <div className="content">
      <span className="txt">
      welcome to my art portfolio!
      </span>
    </div>
  </Parallax>
);

export default Image;