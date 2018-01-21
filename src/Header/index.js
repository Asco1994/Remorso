import React, { Component } from 'react'
import injectSheet from 'react-jss'

import { header as style } from './Styles'

import HamburgerBar from './HamburgerBar'
import Menu from './Menu'
import Logo from '../Logo'

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.classes = props.classes
  }

  toogleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    return (
      <header className={this.classes.wrapper}>
        <div className={this.classes.container}>
          <Logo />
          <Menu visible={this.state.isOpen} onChange={this.toogleMenu}/>
          <HamburgerBar isOpen={this.state.isOpen} onClick={this.toogleMenu}/>
        </div>
      </header>
    )
  }
}



export default injectSheet(style)(Header)
