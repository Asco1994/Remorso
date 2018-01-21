import React from 'react'
import injectSheet from 'react-jss'
import { Font, Colors, Button, Route as RouteStyle} from '../Styles'

import { t } from '../i18n'

const style = {
  ...RouteStyle,
  ...Button,
  title: {
    flex: {
      basis: '100%'
    },
    margin: 0,
    font: {
      line: '1em',
      size: 48,
      family: Font.default,
      weight: 400
    },
    textAlign: 'center',
    textTransform: 'uppercase'
  },

  blockquote: {
    margin: [60, 'auto'],
    flex: {
      basis: '100%'
    },
    maxWidth: 365,
    font: {
      family: Font.default,
      size: 18,
      weight: 100
    },
    color: Colors.Black
  },
  link: {
    display: 'block',
    textAlign: 'center',
    font: {
      size: 30,
      family: Font.default,
      weight: 100
    },
    color: Colors.Black,
    textDecoration: 'none'
  },
  '@media(max-width: 1080px)': {
    container: {
      maxWidth: '80%'
    }
  }
}

const downloadAlbum = (ev) => {
  ev.preventDefault()


}

const Home = ({ classes }) => {

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{ t('Home.AlbumName') }</h1>
      <blockquote className={classes.blockquote}>{ t('Home.BlockQuote') }</blockquote>
      <button onClick={downloadAlbum} className={classes.btn} >
        <a className={classes.link} href='http://asco1994.github.io/Remorso.zip'>
          { t('Home.ButtonDownload') }
        </a>
      </button>
    </div>
  )
}

export default injectSheet(style)(Home)
