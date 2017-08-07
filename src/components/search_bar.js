import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//   return <input />
// }

// Class component - has ability to do things
class SearchBar extends Component {

  // All JS classes have constructor (Called automatically when instantiated)
  // Good for setup variables and state
  constructor(props){
    // calls parent class super constructor
    super(props);

    // Initialize by creating new object
    // Only here you can do that this.state
    this.state = { term : '' };
  }

  // Event handler
  onInputChange(event) {

    // Update state
    this.setState({ term: event.target.value });

    console.log(event.target.value);
  }

  // Class based component must have render
  render() {
    // Whenever you write jsx and wanna use JS variable wrap it with curly braces
    // return <input onChange={ this.onInputChange } />;

    // Controlled form/input element
    // The state should drive the input
    return (
      <div>
        <input
          value={ this.state.term }
          onChange={ event => this.setState({ term: event.target.value }) }
        />
      </div>
    );

    // <input onChange={ event => this.setState({ term: event.target.value }) } />

    // Whenever function has one line, can also drop cicle brackets if only one parameter
    // return <input onChange={(event) => console.log(event.target.value)} />;
  }

}

// To export the code (or small amount) so others can use this stuff
export default SearchBar;

