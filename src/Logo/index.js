import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'


const Logo = ({ size }) => (
  <Link to='/'>
    <img src={ require(`./logo@${size}x.png`) } alt='logo'/>
  </Link>
)

Logo.propTypes = {
  size: PropTypes.number
}

Logo.defaultProps = {
  size: 1
}

export default Logo
