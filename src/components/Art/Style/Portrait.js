import './style.css'
import cartoon from '../../../img/cartoon.PNG';
import christina from '../../../img/christina.JPG';
import eye from '../../../img/eye.PNG';
import eye1 from '../../../img/eye1.JPG';
import eye2 from '../../../img/eye2.JPG';
import girlWithHat from '../../../img/girlWithHat.png';
import lineart from '../../../img/lineart.PNG';
import lineart1 from '../../../img/lineart1.JPG';
import lineart2 from '../../../img/lineart2.JPG';

const drawings = [
  {id: 1, name: 'Cartoon Girl', image: cartoon, description: '2023 - For this piece I wanted to try something new, it is a first attempt with colour and a cartoon style.'},
  {id: 2, name: 'Album Cover', image: christina, description: '2020 - This is a recreation of a childhood drawing I made of Christina Aguileras Bionic Album'},
  {id: 3, name: 'Eye', image: eye, description: '2023 - This is one of my first drawing attempts on procreate, I chose to do an eye because it was something I have drawn many times and felt comfortable creating.'},
  {id: 4, name: 'Eye', image: eye1, description: '2019 - This was a self portrait drawing of my own eye.'},
  {id: 5, name: 'Eye', image: eye2, description: '2019 - This was just another eye drawing, I clearly like to draw eyes.'},
  {id: 6, name: 'Girl', image: girlWithHat, description: '2023 - I have done a multitude of portraits, this was one of the first ones I did on Procreate.'},
  {id: 7, name: 'Scribbles', image: lineart, description: '2023 - For this piece I wanted to create a drawing that was made up of many scribbles. I wanted it to feel messy and choatic and felt that scribbling was the best way to achieve that.'},
  {id: 8, name: 'Line Art', image: lineart1, description: '2019 - This is a single line drawing inspired by the statue of Poseidon of Melos'},
  {id: 9, name: 'Line Art', image: lineart2, description: '2019 - This is a single line drawing inspired by the statue of Rhea'},
]

const Portrait = () => (
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

export default Portrait;