import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Root from './Root'

import 'normalize.css'

registerServiceWorker()

ReactDOM.render(<Root />, document.getElementById('app'))
