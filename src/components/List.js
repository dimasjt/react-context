import React from 'react'

import ListItem from './ListItem'
import { withConsumer } from '../context/AppContext'

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    )
  }
}

export default withConsumer(List)