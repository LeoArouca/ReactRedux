import React, {Component} from 'react';

const VideoDetail = ({video}) => {

  // To handle the quick load to make sure props are there
  if (!video){
    return <div>Loading...</div>;
  }

  // whenever you embed a video, the only thing that changes is the video ID
  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url} ></iframe>
      </div>

      <div className='details'>
        <div>{ video.snippet.title }</div>
        <div>{ video.snippet.description }</div>
      </div>
    </div>
  );
}

export default VideoDetail;
