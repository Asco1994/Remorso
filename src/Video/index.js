import React from 'react'

import injectSheet from 'react-jss'

import video from './cover.mp4'

const styles = {
  video: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0
  }
}


const Video = ({ classes }) => (
  <video className={ classes.video } loop autoPlay>
    <source src={ video }></source>
  </video>
)

export default injectSheet(styles)(Video)
