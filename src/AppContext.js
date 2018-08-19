import React from 'react';

const Context = React.createContext()

class Provider extends React.Component {
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
    const value = {
      items: this.state.items,
      addItem: this.addItem,
      checkItem: this.checkItem
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

class Form extends React.Component {
  state = { name: '' }
  save = (context) => {
    context.addItem(this.state.name)
    this.setState({ name: '' })
  }
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <div>
            <input
              type="text"
              onChange={(event) => this.setState({ name: event.target.value })}
              value={this.state.name}
            />
            <button onClick={() => this.save(context)}>Save</button>
          </div>
        )}
      </Context.Consumer>
    )
  }
}

class ListItem extends React.Component {
  render() {
    const { item } = this.props
    const style = item.checked ? 'line-through' : 'none'
    return (
      <Context.Consumer>
        {(context) => (
          <li onClick={() => context.checkItem(this.props.item)} style={{textDecoration: style}}>
            {this.props.item.name}
          </li>
        )}
      </Context.Consumer>
    )
  }
}

class List extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <div>
            <ul>
              {context.items.map(item => (
                <ListItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        )}
      </Context.Consumer>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>context without props</h1>
          <Form />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
