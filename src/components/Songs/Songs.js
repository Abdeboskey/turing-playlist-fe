import React from 'react'
import Song from '../Song/Song'
import './Songs.css'

const Songs = ({ songs }) => {

  const songsList = songs.map(song => {
    return (
      <Song 
        key={song.id}
        songName={song.songName}
        artistName={song.artistName}
        link={song.link}
      />
    )
  })

  return (
    <section className='Songs'>
      {songsList}
    </section>
  )
}

export default Songs