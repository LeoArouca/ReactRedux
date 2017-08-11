import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// ./ means current dir
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyB7ug5wuB17ns8l66Z8WcXsz7Prj6y5LBs';

// Create a new component. This component should produce some HTML
// const App = function(){

// Function
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component{

  constructor(props){
    super(props);
    this.state = { videos: [] };

    // Fetch youtube stuff
    // YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // Standard way
      // this.setState({ videos: videos });
      // When have key and property/variable with the same name ES6 allows this:
      this.setState({ videos });
    });
  }

  render(){

    // Passing props
    // <VideoList videos={ this.state.videos } />

    return (
      <div>
        <SearchBar />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }
}

// Take this component's HTML and put it on the page (DOM)
// ReactDOM.render(component, target container);
ReactDOM.render(<App />, document.querySelector('.container'));
