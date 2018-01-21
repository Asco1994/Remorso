import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import { hamburgerBar as style } from './Styles'

const Hamburguer = ({ isOpen, onClick, classes }) => {

  return (
    <div className={classes.hamburger} onClick={onClick}>
      <div className={classes.tiles}></div>
      <div className={classes.tiles}></div>
      <div className={classes.tiles}></div>
    </div>
  )
}

Hamburguer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default injectSheet(style)(Hamburguer)
