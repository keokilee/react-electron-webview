import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class WebviewTest extends Component {
  render () {
    return (
      <h1>Yo!</h1>
    )
  }
}

ReactDOM.render(WebviewTest, document.getElementById('content'))
