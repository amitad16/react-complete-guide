import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>I'm {props.name}. I'm {props.age} years old.
        <span> {props.children}</span>
      </p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;