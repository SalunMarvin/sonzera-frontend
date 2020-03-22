import React from 'react'
import YouTube from 'react-youtube';

const Video = ({actualVideo, nextSong, isLoaded}) => {
  const opts = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
    }
  };

  return (
    isLoaded &&
    <div className="video">
      <YouTube
        videoId={actualVideo.videoID}
        opts={opts}
        onEnd={nextSong}
      />
    </div>
  )
}

export default Video