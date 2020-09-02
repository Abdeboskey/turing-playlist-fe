import React from 'react'
import './Song.css'

const Song = ({ songName, artistName, link}) => {
  return (
    <article className='Song'>
      <h2>{songName}</h2>
      <p>{artistName}</p>
      <a href={link} target='_blank'>Listen Here</a>
    </article>
  )
}

export default Song