import React from 'react';
import VideoListItem from './video_list_item';

// Avoid js loops, try to use iterators like map

// Put props as parameter
const VideoList = (props) => {

  // Map into array, React is smart to render array as many elements
  const videoItems = props.videos.map((video) => {
    // common strategy is to use id, it does not need to be too creative, as long as each has one different
    return(
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return(
    <ul className='col-md-4 list-group'>
      { videoItems }
    </ul>
  );
}

export default VideoList;
