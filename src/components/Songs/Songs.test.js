import React from 'react'
import Songs from '../Songs/Songs'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Songs Component', () => {

  it('should display a list of songs', () => {
    const songs = [
      {
        songName: "Columbo Soundtrack",
        artistName: "Columbo",
        link: "https://www.youtube.com/watch?v=nVP6onBEVRg",
        id: 1,
      },
      {
        songName: "Never Gonna Give You Up",
        artistName: "Rick Astley",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        id: 2,
      },
      {
        songName: "Portrait of Tracy",
        artistName: "Jaco Pastorius",
        link: "hhttps://www.youtube.com/watch?v=fxG1YUtix_o",
        id: 3,
      }
    ]

    render(<Songs songs={songs} />)
    
    const song1 = screen.getByText(/columbo soundtrack/i)
    const song2 = screen.getByText(/never gonna/i)
    const song3 = screen.getByText(/portrait/i)

    expect(song1).toBeInTheDocument()
    expect(song2).toBeInTheDocument()
    expect(song3).toBeInTheDocument()

  })

})
