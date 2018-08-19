import React from 'react'

import { withConsumer, Consumer } from '../context/AppContext'

class Form extends React.Component {
  state = { name: '' }
  save = (context) => {
    this.props.addItem(this.state.name)
    this.setState({ name: '' })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.setState({ name: event.target.value })}
          value={this.state.name}
        />
        <button onClick={this.save}>Save</button>
      </div>
    )
  }
}

export default withConsumer(Form)