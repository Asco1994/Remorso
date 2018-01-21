import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from '../Main'
import Header from '../Header'


import Musics from '../Musics'
import Contact from '../Contact'
import About from '../About'
import Home from '../Home'


const RouterComponent = ({ classes }) => (
  <Router basename='Remorso'>
    <div className='router'>
      <Header/>
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/musics/" component={Musics} />
        <Route path="/contact/" component={Contact} />
      </Main>
    </div>
  </Router>
)

export default RouterComponent
