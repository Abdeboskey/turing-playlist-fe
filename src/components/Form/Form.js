import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songName: '',
      artistName: '',
      link: '',
    }
  }

  handleInput(event) {
    const inputName = event.target.id
    const inputValue = event.target.value
    this.setState({ [inputName]: inputValue })
  }

  resetInputs() {
    this.setState({
      songName: '',
      artistName: '',
      link: ''
    })

  }

  render() {
    return (
      <form
        className='SongForm'
        onSubmit={(event) => {
          this.props.addSong(event, this.state.songName, this.state.artistName, this.state.link)
          this.resetInputs()
        }}
      >
        <h2>Add a Song</h2>
        <input
          className='input'
          type='text'
          id='songName'
          placeholder='Song Name'
          value={this.state.songName}
          onChange={(event) => this.handleInput(event)}
        />
        <input
          className='input'
          type='text'
          id='artistName'
          placeholder='Artist Name'
          value={this.state.artistName}
          onChange={(event) => this.handleInput(event)}
        />
        <input
          className='input'
          type='text'
          id='link'
          placeholder='Song Link'
          value={this.state.link}
          onChange={(event) => this.handleInput(event)}
        />
        <button className='addSong-button' type='submit'>
          Add Song
        </button>
      </form>
    );
  }
}

export default Form