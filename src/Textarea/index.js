import React from 'react'

import injectSheet from 'react-jss'

import { Colors, Font } from '../Styles'


const style = {
  container: {
    position: 'relative',
    border: '2px solid black',
    borderRadius: 10,
    height: 100,
    margin: [25, 'auto'],
    flexBasis: '100%'
  },
  textarea: {
    background: 'transparent',
    position: 'absolute',

    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    resize: 'none',
    overflowY: 'auto',
    overflowX: 'hidden',

    maxHeight: 80,

    padding: [10, 5],

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

const Textarea = ({ classes, placeholder, onChange }) => (
  <div className={ classes.container }>
    <textarea
      className={ classes.textarea }
      placeholder={ placeholder } 
      onChange={ onChange }>
    </textarea>
  </div>
)


export default injectSheet(style)(Textarea)
