import React, { useState, useEffect } from 'react'
import './App.css'
import Video from './components/Video'
import Mask from './components/Mask'
import axios from 'axios'

const App = () => {
  const [videoList, setVideoList] = useState([])
  const [actualVideo, setActualVideo] = useState('')
  const [isLoaded, setLoaded] = useState(false)
  const [index, setIndex] = useState(0)

  const getVideos = async () => {
    return await axios
      .get(
        `https://sonzera-api.herokuapp.com/api/videos`, {}
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

  const nextSong = async () => {
    setLoaded(false)
    let newIndex = index + 1
    if (newIndex == videoList.length) {
      newIndex = 0
    }
    await setIndex(newIndex)
    await setActualVideo(videoList[newIndex])
    setLoaded(true)
  }

  return (
    <div className='App'>
      <Mask nextSong={nextSong} ></Mask>
      <Video actualVideo={actualVideo} isLoaded={isLoaded} nextSong={nextSong}></Video>
    </div>
  )
}

export default App
