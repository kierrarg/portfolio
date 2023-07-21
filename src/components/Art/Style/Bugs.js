import spiderdrawing from '../../../img/spiderdrawing.png';
import bee from '../../../img/bee.JPG';
import beetle from '../../../img/beetle.JPG';
import cat from '../../../img/cat.JPG';
import deer from '../../../img/deer.JPG';
import './style.css'

const drawings = [
  {id: 1, name: 'Spider', image: spiderdrawing, description: '2023 - This is one of my favourite pieces created using Procreate, I drew it for a close friend who loves Tarantulas.'},
  {id: 2, name: 'Bee', image: bee, description: '2020 - I often times tend to repeat drawings I have made in my past, I tend to make multiple different eye and bee drawings. This is one of my favourite bee drawings at the moment.'},
  {id: 3, name: 'Beetle', image: beetle, description: '2019 - This is a drawing of a Rhino Beetle, they are my favourite beetle.'},
  {id: 4, name: 'Cat', image: cat, description: '2020 - I like cats.'},
  {id: 5, name: 'Deer', image: deer, description: '2019 - I like deer.'}
];

const Bugs = () => (
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

export default Bugs;