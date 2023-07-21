import React from 'react';
import {Link} from 'react-router-dom';
import './MyWork.css'
import girlWithHat from '../../img/girlWithHat.png';
import spiderdrawing from '../../img/spiderdrawing.png';
import alien from '../../img/alien.PNG';

function MyWork(){

  const artStyles = [
    {id: 1, name: 'Portraits', image: girlWithHat, url: '/Portraits'},
    {id: 2, name: 'Bugs & Animals', image: spiderdrawing, url: '/Bugs'},
    {id: 3, name: 'Aliens', image: alien, url: '/Alien'}
  ];

  return (
    <div>
        <h1>Categories</h1>
        <div className='art-style-list'>
        {artStyles.map((style) => (
            <Link to={`${style.url}`} key={style.id}>
                <div className='art-style'>
                    <img src={style.image} alt={style.name} />
                    <h3>{style.name}</h3>
                </div>

            </Link>
        ))}
        </div>
    </div>
  );
}

export default MyWork;