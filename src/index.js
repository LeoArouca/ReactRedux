import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// ./ means current dir
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // Fetch youtube stuff
    // YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    // npm install --s youtube-api-search
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // Standard way
      // this.setState({ videos: videos });
      // When have key and property/variable with the same name ES6 allows this:
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){

    // Passing props
    // <VideoList videos={ this.state.videos } />

    // Having the [0] it will try to do it before the data is there

    // Send callback down to get the click of a video

    // Function that send it in
    // onVideoSelect={selectedVideo => this.setState({selectedVideo})

    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={ this.state.videos }
        />
      </div>
    );
  }
}

// Take this component's HTML and put it on the page (DOM)
// ReactDOM.render(component, target container);
ReactDOM.render(<App />, document.querySelector('.container'));
