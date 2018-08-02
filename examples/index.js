import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import Picker from '../src'

class App extends PureComponent {
  render () {
    return (
      <div>
        <h1>普通选择器</h1>
        <Picker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
