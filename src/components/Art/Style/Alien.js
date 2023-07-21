import alien from '../../../img/alien.PNG';
import alien1 from '../../../img/alien1.PNG';
import './style.css'

const drawings = [
  {id: 1, name: 'Alien', image: alien, description: '2023 - For this piece I slightly overused the blend tool. I chose to create a long neck and face because I have always liked pieces with inaccurate proportions. I did not blend my top layer of shading so that the piece did not feel too smooth.'},
  {id: 2, name: 'Alien', image: alien1, description: '2023 - This was one of my first pieces I created using procreate. I wanted to practice with layers and blending layers to make them look more cohesive. Naturally, it is difficult to achieve flawless results. The slight splotchiness that you notice when you look closely is the result of multiple layers overlapping.'},
];

const Alien = () => (
    <div className="cont">
      {drawings.map((drawing) => (
        <div key={drawing.id}>
          <h2>{drawing.name}</h2>
          <a href={drawing.image} target="_blank" rel="noopener noreferrer">
          <img src={drawing.image} alt={drawing.name} />
          </a>
          <div className="description-container">
          <p className="description">{drawing.description}</p>
          </div>
        </div>
      ))}
    </div>
);

export default Alien;