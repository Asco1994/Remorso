import React from 'react'

export default (props) => (
  <ul style={{width: '100%', padding: 0, margin: 0}} {...props}>
    {props.children}
  </ul>
)
