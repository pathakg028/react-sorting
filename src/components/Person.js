import React from 'react';

class Person extends React.Component{
  render() {
    const {fn, ln, city} = this.props
    return (
        <p>{fn} {ln} from {city}</p>
    );
  }
}

export default Person;
