import React, { Component } from 'react'
import './App.css'
import SongController from '../SongController/SongController'
import Songs from '../Songs/Songs'
import { getSongs } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songQueue: []
    }
  }

  componentDidMount() {
    getSongs()
      .then(songs => {
        this.setState({
        songQueue: [...songs]
      })
    }
      )
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <Songs songs={this.state.songQueue} />
            <SongController />
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
