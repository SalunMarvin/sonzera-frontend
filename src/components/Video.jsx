import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from 'axios'

const Video = () => {
  const [videoList, setVideoList] = useState([])
  const [actualVideo, setActualVideo] = useState('')
  const [isLoaded, setLoaded] = useState(false)
  const [index, setIndex] = useState(0)

  const getVideos = async () => {
    return await axios
      .get(
        `http://127.0.0.1:3000/api/videos`, {}
      )
      .then(response => {
        return response.data.videos
      })
      .catch(error => {
        return false
      })
  }

  useEffect(() => {
    async function startLoading() {
      const videos = await getVideos()
      await setVideoList(videos);
      await setActualVideo(videos[index]);
      setLoaded(true)
    }

    startLoading()
  }, [])

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

  const nextSong = async () => {
    setLoaded(false)
    const newIndex = index + 1
    await setIndex(newIndex)
    await setActualVideo(videoList[newIndex])
    setLoaded(true)
  }

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