import React, { Component } from 'react'

import injectSheet from 'react-jss'
import { Route as RouteStyle } from '../Styles'

import { musics } from '../Data/musics'

import Music from './Music'
import MusicList from './MusicList'

const style = {
  ...RouteStyle
}


class Musics extends Component {

  constructor(props) {
    super(props)

    this.classes = props.classes

    this.state = {musics}
  }

  componentDidMount() {
    const musics = this.state.musics.map(music => ({
      ...music,
      played: false
    }))


    this.setState({musics})
  }

  changePlayedMusic = (musicId, played) => {
    const musics = this.state.musics.map(music => {
      if(music.id === musicId) {
        music.played = played
      } else if(played === true) {
        music.played = false
      }

      return music
    })

    this.setState({musics})
  }

  render() {

    return (
      <div className={this.classes.container}>
        <MusicList>
          {
            this.state.musics.map(music => {
              return (
                <Music
                  togglePlay={ this.changePlayedMusic }
                  key={music.id}
                  played={music.played || false}
                  music={music}
                />
              )
            })
          }
        </MusicList>
      </div>
    )
  }
}

export default injectSheet(style)(Musics)
