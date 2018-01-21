import React, { Component } from 'react'

import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import moment from 'moment'

import Youtube from 'react-youtube'
import { Font, Colors } from '../Styles'

const styles = {
  item: {
    listStyle: 'none',
    margin: [45, 'auto'],
    fontFamily: Font.default,
    cursor: 'pointer',
    transition: 'opacity 1s'
  },
  wrapper: {
    maxWidth: 500,
    padding: [0, 10],
    minHeight: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '2px solid black'
  },
  title: {
    flexBasis: '100%',
    font: {
      size: 16,
      weight: 600
    },
    margin: 0
  },
  feat: {
    font: {
      size: 12,
      weight: 300
    },
    paddingLeft: 10
  },
  time: {
    minWidth: 100,
    textAlign: 'right',
    fontSize: 16
  },
  youtube: {
    visibility: 'hidden',
    width: 0,
    height: 0
  },
  icon: {
    outline: 'none',
    border: 0,
    borderRadius: 50,
    minWidth: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    verticalAlign: 'middle',

    position: 'relative',
    fontSize: 20,
    lineHeigth: 30,
    marginRight: 20,
    color: Colors.Black,
    background: 'transparent'
  },
  '@media(max-width: 1080px)': {
    wrapper: {
      maxWidth: '80%',
      margin: [0, 'auto'],
      padding: 0
    },
    feat: {
      display: 'block',
      padding: [5, 0]
    },
    time: {
      minWidth: 80
    },
    youtube: {
      width: 1,
      height: 1
    }
  }
}

class Music extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentTime: '0:00',
      playedFirstTime: false,
      ready: false,
      isMobile: window.innerWidth <= 1080
    }

    this.timeout = null;
    this.classes = props.classes
  }

  componentWillMount() {
    window.addEventListener('resize', () => {
      this.setState({isMobile: window.innerWidth <= 1080})
    })
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.played === true && nextProps.played === false) {
      this.pause()
    }
  }

  pause = () => {
    console.log('pause', this.props.music.title)
    if(!this.state.ready)
      return

    if(this.props.played) {
      this.emitPlayOrPause(false)
      this.video.pauseVideo()
    }
  }

  play = () => {
    console.log('play', this.props.music.title)
    if(!this.state.ready)
      return

    if(!this.props.played) {
      this.emitPlayOrPause(true)
      this.video.playVideo()
    }
  }

  static propTypes = {
    music: PropTypes.object.isRequired,
    played: PropTypes.bool.isRequired,
    togglePlay: PropTypes.func.isRequired
  }

  emitPlayOrPause = (played) => {
    this.props.togglePlay(this.props.music.id, played)
  }

  onPlay = ev => {
    console.log('onPlay', this.props.music.title)
    this.setState({playedFirstTime: true})
    this.emitPlayOrPause(true)

    this.timeout = setInterval(() => {
      const currentTime = moment().startOf('day').add(this.video.getCurrentTime(), 'seconds').format('m:ss')

      this.setState({ currentTime })
    }, 1000)
  }

  onPause = ev => {
    console.log('onPause', this.props.music.title)
    this.emitPlayOrPause(false)

    clearTimeout(this.timeout)
  }

  setVideo = ev => {
    ev.target.pauseVideo()
    ev.target.setVolume(100)

    this.video = ev.target
    this.setState({ready: true})
  }

  end = ev => {
    ev.target.stopVideo()

    this.emitPlayOrPause(false)
    this.setState({currentTime: '0:00'})
  }

  render() {
    return (
      <li className={this.classes.item} onClick={ this.props.played ? this.pause : this.play } style={{opacity: this.state.ready ? 1 : .3}}>
        <div className={this.classes.wrapper} >
          <button className={this.classes.icon} >
            {
              this.props.played ? (<span>❚❚</span>) : (<span>▶</span>)
            }
          </button>
          <p className={this.classes.title}>
            {this.props.music.title}
            <span className={this.classes.feat}>
              (prod. {this.props.music.participations.production} ft. {this.props.music.participations.feat})
            </span>
          </p>
          <time className={this.classes.time}> {this.state.playedFirstTime ? `${this.state.currentTime} / ${this.props.music.time }` : this.props.music.time }</time>
          <Youtube onEnd={this.end} onPlay={this.onPlay} onPause={this.onPause} videoId={this.props.music.id} className={this.classes.youtube} width={this.state.isMobile ? 1 : 0} height={this.state.isMobile ? 1 : 0}  onReady={this.setVideo}/>
        </div>
      </li>
    )
  }

}

export default injectSheet(styles)(Music)
