import { Parallax,} from 'react-parallax';
import hatGirl from '../../img/hatGirl.PNG'


const Image1 = () => (
  <Parallax className='image' bgImage={hatGirl} strength={800}>
    <div className="content">
    </div>
  </Parallax>
);

export default Image1;