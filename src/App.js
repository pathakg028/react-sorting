import React from 'react';
import Person from './components/Person'
import './App.css';

class App extends React.Component{
  state = {
    people : [
    {
      firstName: 'Sara',
      lastName: 'Hegdal',
      city: 'Hawaii',
    },
    {
      firstName: 'Cahal',
      lastName: 'Louis',
      city: 'Jakarta',
    },  
    {
      firstName: 'Edite',
      lastName: 'Williams',
      city: 'Perth',
    },  
    {
      firstName: 'Billy',
      lastName: 'Wong',
      city: 'Hong Kong',
    },  
    {
      firstName: 'Edite',
      lastName: 'Williams',
      city: 'Perth',
    }
  ]
};
sortByCity = () => {
  const { people } = this.state;
  const sortedPeople = people.sort((cityA, cityB) => {
    return cityA.city.localeCompare(cityB.city);
  });
  this.setState({
    people: sortedPeople
  });
};
// when setState runs it autmoatically runs render
sortByLastName = () => {
  const { people } = this.state;
  const sortedPeople = people.sort((lastNameA, lastNameB) => {
    return lastNameA.lastName.localeCompare(lastNameB.lastName);
  });
  this.setState({
    people: sortedPeople
  });
};

sortByFirstName = () => {
  const { people } = this.state;
  const sortedPeople = people.sort((firstNameA, firstNameB) => {
    return firstNameA.firstName.localeCompare(firstNameB.firstName);
  });
  this.setState({
    people: sortedPeople
  });
};

  render() {
    return (
      <div className="App">
        <button onClick={this.sortByCity}>sort by name</button>
        <button onClick={this.sortByLastName}>sort by last name</button>
        <button onClick={this.sortByFirstName}>sort by firstName</button>
      
    
      {this.state.people.map((detail, index) => {
        return <Person 
          key={index} 
          fn={detail.firstName} 
          ln={detail.lastName}
          city={detail.city}
        />
      })}
    </div>
    );
  }
}

export default App;
