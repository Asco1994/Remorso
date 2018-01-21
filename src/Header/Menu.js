import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import { t } from '../i18n'

import { menu as styles } from './Styles'

const Menu = ({ classes, onChange }) => (
  <ul className={classes.list}>
    <li className={ classes.listItem } onClick={onChange}>
      <NavLink exact activeClassName={ classes.linkActive } className={ classes.link } to='/'>
        { t('Header.Menu.Home') }
      </NavLink>
    </li>

    <li className={ classes.listItem } onClick={onChange}>
      <NavLink exact activeClassName={ classes.linkActive } className={ classes.link } to='/about'>
        { t('Header.Menu.About') }
      </NavLink>
    </li>

    <li className={ classes.listItem } onClick={onChange}>
      <NavLink exact activeClassName={ classes.linkActive } className={ classes.link } to='/musics'>
        { t('Header.Menu.Musics') }
      </NavLink>
    </li>

    <li className={ classes.listItem } onClick={onChange}>
      <NavLink exact activeClassName={ classes.linkActive } className={ classes.link } to='/contact'>
        { t('Header.Menu.Contact') }
      </NavLink>
    </li>
  </ul>
)

Menu.propTypes = {
  visible: PropTypes.bool.isRequired
}


export default injectSheet(styles)(Menu)
