import React from 'react'
import Logo from '../Logo.png'

const Mask = ({ nextSong }) => (
  <div className="mask">
    <div className="noise-wrapper">
      <div className="noise">

      </div>
    </div>
    <div className="logo">
      <img className="img" src={Logo} alt="Sonzera!"></img>
      <div className="next-song" onClick={nextSong}>próxima música</div>
    </div>
  </div>
)

export default Mask