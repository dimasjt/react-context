import React from 'react'

import { withConsumer } from '../context/AppContext'

class ListItem extends React.Component {
  render() {
    const { item } = this.props
    const style = item.checked ? 'line-through' : 'none'

    return (
      <li onClick={() => this.props.checkItem(this.props.item)} style={{textDecoration: style}}>
        {this.props.item.name}
      </li>
    )
  }
}

export default withConsumer(ListItem)