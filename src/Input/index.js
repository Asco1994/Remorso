import React from 'react'

import injectSheet from 'react-jss'

import { Colors, Font } from '../Styles'


const style = {
  container: {
    position: 'relative',
    borderBottom: '2px solid black',
    paddingBottom: 10,
    height: 30,
    margin: [25, 'auto'],
    flexBasis: '100%'
  },
  input: {
    background: 'transparent',
    position: 'absolute',

    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',

    padding: [0, 5],

    '&, &::placeholder': {
      color: Colors.Black,
      font: {
        family: Font.default,
        size: 16,
        weight: 800,
        line: 1.2
      },
      letterSpacing: 2
    }
  }
}

const Input = ({ classes, type, placeholder, onChange}) => (
  <div className={classes.container}>
    <input
      className={ classes.input }
      onChange={ onChange }
      placeholder={ placeholder }
      type={ type }/>
  </div>
)


export default injectSheet(style)(Input)
