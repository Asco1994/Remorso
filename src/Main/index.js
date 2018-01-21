import React, { Component } from 'react'
import injectSheet from 'react-jss'

import background from './cover.jpg'

import album from './album.jpg'
import youtubeIcon from './youtube.png'

import Glitch from '../Glitch'

import { Font, Colors } from '../Styles'

const style = {
  cover: {
    position: 'absolute',

    width: '100%',
    minHeight: '100%',

    background: {
      image: `url(${background})`,
    },

    overflowY: 'hidden'
  },

  container: {
    display: 'flex',

    alignItems: 'center',
    justifyContent: '',

    maxWidth: 1280,
    width: '100%',

    margin: [0, 'auto', 0],
    padding: [144, 0, 0]
  },

  album: {

    border: 'solid black 2px',
    maxHeight: '90%',
    height: 476,
    maxWidth: '95%',

    boxShadow: {
      y: 10,
      x: 2,
      blur: 15,
      spread: 1,
      color: 'rgba(0,0,0,.3)'
    }
  },

  section: {
    flex: {
      basis: '50%'
    },

  },

  pages: {
    position: 'relative'
  },

  socialLinks: {
    position: 'absolute',
    bottom: 30,
    right: 80,
    display: 'flex',
    padding: 0,
    margin: 0
  },

  socialLink: {
    display: 'block'
  },

  icon: {
    width: 40,
    height: 40,
    transition: 'all .1s',

    '&:hover': {
      width: 50,
      height: 50,
      margin: [-5],
      transform: 'rotate(-20deg)'
    }
  },

  corpright: {
    display: 'none',

  },

  '@media (max-width: 1080px)': {
    cover: {
      overflowY: 'auto',
    },
    container: {
      paddingTop: 200,
      flexWrap: 'wrap',
      paddingBottom: 0,
      height: 'auto !important'
    },
    section: {
      width: '100%',
      display: 'flex',
      flexBasis: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 40,

      '&:nth-of-type(1)': {
        position: 'fixed',
        opacity: .2,
        top: 60,
        pointerEvents: 'none',
        height: '100vh'
      }
    },
    album: {
      height: 'auto'
    },

    footer: {
      padding: [40, 0],
      background: 'rgb(50,50,50)'
    },

    corpright: {
      textAlign: 'center',
      color: Colors.White,
      fontFamily: Font.default,
      display: 'block'
    },

    socialLinks: {
      width: '100%',
      position: 'relative',
      justifyContent: 'center',
      right: 0,
      bottom: 0,
    },

    socialLink: {
      display: 'block'
    },

    icon: {
      width: 40,
      height: 40

    },
  }
}


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: window.innerHeight - 144,
      isMobile: window.innerWidth < 1080
    }

    this.classes = props.classes
  }

  componentWillMount() {
    this.image = document.createElement('img')
    this.image.src = album
    this.image.alt = 'album cover'

    window.addEventListener('resize',
      () => this.setState({
        minHeight: window.innerHeight - 144,
        isMobile: window.innerWidth < 1080
      })
    )
  }


  render() {


    return (
      <main className={ this.classes.cover }>
        <div style={{ height: this.state.height }} className={ this.classes.container }>
          <section className={ this.classes.section }>
            {
              this.state.isMobile
                ? <img src={album} className={ this.classes.album } alt='album cover'/>
                : <Glitch element={this.image} className={ this.classes.album }/>
            }

          </section>
          <section className={`${this.classes.section} ${this.classes.pages}`}>
            {this.props.children}
          </section>
        </div>
        <footer className={this.classes.footer}>
          <p className={this.classes.corpright}>A.S.C.O @ Corpright 2018</p>
          <ul className={this.classes.socialLinks}>
            <li className={this.classes.socialLink}>
              <a href='https://www.youtube.com/channel/UCpZUltSz7olYHXzqybL2akQ' rel="noopener noreferrer" target='_blank'>
                <img className={this.classes.icon} alt='youtube' src={youtubeIcon} />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    )
  }
}

export default injectSheet(style)(Main)
