import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dfff', name: 'Amit', age: 21 },
      { id: 'kjkj', name: 'Ajay', age: 22 },
      { id: 'bmgu', name: 'Aman', age: 18 }
    ],
    otherState: 'some other value',
    showPerson: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPerson ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];

    if ( this.state.persons.length <= 2 ) {
      classes.push('red');
    }

    if ( this.state.persons.length <= 1 ) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <p className={classes.join(' ')}>Styled Class</p>
        <button
          onClick={this.togglePersonsHandler}
          style={style}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
