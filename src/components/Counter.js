import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

const fruits = [
    'bananes',
]

function Counter() {
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count” 
  const [count, setCount] = useState(5);

  const [fruit, setFruit] = useState(fruits);
  const [value, setValue] = useState('');
  const [hovered, setHovered] = useState(false);


  const toggleHover = () => setHovered(!hovered);

  const handleChange = (e) => {
      setValue(e.target.value)
  }

  const handleSubmit = (e) => {
      if (value) {
          setFruit(fruit.concat(value));
      }

      setValue('');
      e.preventDefault();

  }

  var classNames = require('classnames');



  return (
          
      
    <div>
     <h1>SALUT</h1>
      <button className='btn btn-primary'>Salut</button>
      <p>Je dois acheter des {fruit} </p>
      
      <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}/>
      <button type="submit">Ajouter un ingrédient</button>

      <h3 className='mt-5'>Je dois acheter:</h3>
      <ul className='list-group'>
          {fruit.map(element => (
              <li
               className={hovered ? 'list-group-item active' : 'list-group-item'} 
               onMouseEnter={toggleHover}
               onMouseLeave={toggleHover}
               key={element}>{element}</li>
          )
          )}
      </ul>
          
      </form>
     

      
      
      
    </div>
  );
}
/// <form onSubmit={() => setFruit([...fruits] + e.target.value )}>


export default Counter