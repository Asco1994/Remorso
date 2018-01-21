import React from 'react'
import injectSheet from 'react-jss'

import { Font, Route as RouteStyle } from '../Styles'

import { t } from '../i18n'

const style = {

  ...RouteStyle,
  paragraph: {
    maxWidth: 560,
    margin: [10, 'auto'],
    display: 'inline-block',
    textAlign: 'justify',

    font: {
      size: 24,
      family: Font.default,
      weight: 400
    },

    '&::first-letter': {
      paddingLeft: 35
    }
  },
  '@media(max-width: 1080px)': {
    paragraph: {
      maxWidth: '80%'
    }
  }
}


const About = ({classes}) => {

  return (
    <div className={classes.container}>
      {
        t('About.Text').map(({text, keyId}) => {
          return (
            <p className={classes.paragraph} key={keyId}>
              {text}
            </p>
          )
        })
      }
    </div>
  )
}

export default injectSheet(style)(About)
