import React, { useState } from 'react';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;

//     &:hover {
//       background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//       color: black;
//     }
//   `;

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  });

  //const [otherState, setOtherState] = useState('some other value');
  //console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 355 },
        { name: 'Heey', age: -125 },
        { name: 'bb', age: 0 }
      ],
      otherState: personsState.otherState
    });
  }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...personsState.persons[personIndex] };
    //const person = Object.assign({}, personsState.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
      showPersons: personsState.showPersons
    });
  }

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    borger: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    // ':hover': {
    //   backgroundColor: 'lightgreen',
    //   color: 'black'
    // }
  };

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      persons: [
        { id: '123', name: 'Max', age: 28 },
        { id: 'asdf', name: 'Manu', age: 29 },
        { id: 'uytr', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: !doesShow
    });
  };

  const deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons.slice();
    console.log(personIndex);
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons, showPersons: personsState.showPersons });
  }

  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person name={person.name} age={person.age}
            click={() => deletePersonHandler(index)}
            key={person.id}
            changed={(event) => nameChangedHandler(event, person.id)}
          // click={switchNameHandler.bind(this, 'MMMMM')}
          // change={nameChangedHandler}
          >My hobbies: Racing</Person>
        })}
      </div>
    );

    style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  }

  const classes = [];
  if (personsState.persons.length <= 2) {
    classes.push('red');
  }
  if (personsState.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    // <StyleRoot>
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className="button" 
        // alt={personsState.showPersons}
        // style={style}
        onClick={togglePersonsHandler}>Switch Name</button>
      {persons}
      {/* {personsState.showPersons ? */}

      {/* : null
        } */}
    </div>
    // </StyleRoot> 
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

export default app; //Radium(app);