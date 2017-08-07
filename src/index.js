import React from 'react';
import ReactDOM from 'react-dom';
// ./ means current dir
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB7ug5wuB17ns8l66Z8WcXsz7Prj6y5LBs';

// Create a new component. This component should produce some HTML
// const App = function(){
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's HTML and put it on the page (DOM)
// ReactDOM.render(component, target container);
ReactDOM.render(<App />, document.querySelector('.container'));
