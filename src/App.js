import React from 'react';

class Form extends React.Component {
  state = { name: '' }
  save = () => {
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

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <ListItem key={item.id} item={item} checkItem={this.props.checkItem} />
          ))}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    items: []
  }

  addItem = (name) => {
    this.setState((prev) => {
      const newItem = { id: prev.items.length + 1, name, checked: false }
      return {
        items: prev.items.concat(newItem)
      }
    })
  }

  checkItem = (item) => {
    this.setState((prev) => {
      const items = prev.items.map(prevItem => {
        if (prevItem.id === item.id) prevItem.checked = true
        return prevItem
      })
      return { items }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>props</h1>
        <Form addItem={this.addItem} />
        <List items={this.state.items} checkItem={this.checkItem} />
      </div>
    );
  }
}

export default App;
