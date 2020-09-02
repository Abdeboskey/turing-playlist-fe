import React from 'react'
import App from '../App/App'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Form Component', () => {

  it('should have an input for a song name', () => {
    render(<App />)

    const songNameInput = screen.getByPlaceholderText(/song name/i)

    expect(songNameInput).toBeInTheDocument()
  })

  it('should have an input for a song title', () => {
    render(<App />)

    const artistNameInput = screen.getByPlaceholderText(/artist name/i)

    expect(artistNameInput).toBeInTheDocument()
  })

  it('should have an input for a song link', () => {
    render(<App />)

    const songLinkInput = screen.getByPlaceholderText(/song link/i)

    expect(songLinkInput).toBeInTheDocument()
  })

  it('should have an button to add a song', () => {
    render(<App />)

    const addSongButton = screen.getByRole('button', { name: 'Add Song' })

    expect(addSongButton).toBeInTheDocument()
  })

  it('should hold the information that is put into the form', () => {
    render(<App />)

    fireEvent.change(screen.getByPlaceholderText(/song name/i), {target: {value: 'Never Gonna Give You Up'}})
    fireEvent.change(screen.getByPlaceholderText(/artist name/i), {target: {value: 'Rick Astley'}})
    
    expect(screen.getByPlaceholderText(/song name/i).value).toEqual('Never Gonna Give You Up')
    expect(screen.getByPlaceholderText(/artist name/i).value).toEqual('Rick Astley')
  })


})