import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songName: '',
      artistName: '',
      link: '',
    }
  }

  render() {
    return (
      <form
        className="SongForm"
        onSubmit={(event) => {
          this.props.addSong(event, this.state.comment);
          this.resetInputs();
        }}
      >
        <input
          className="songName-input"
          type="text"
          name='songName'
          placeholder="Song Name"
          value={this.state.songName}
          onChange={(event) => this.handleInput(event)}
        />
        <input
          className="artistName-input"
          type="text"
          name='artistName'
          placeholder="Artist Name"
          value={this.state.artistName}
          onChange={(event) => this.handleInput(event)}
        />
        <input
          className="link-input"
          type="text"
          name='link'
          placeholder="Song Link"
          value={this.state.link}
          onChange={(event) => this.handleInput(event)}
        />
        <button className="addSong-button" type="submit">
          Add Song
        </button>
      </form>
    );
  }
}

export default Form