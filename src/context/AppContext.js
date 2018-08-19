import React from 'react'

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

const Consumer = Context.Consumer

const withConsumer = (Component) => (props) =>(
  <Consumer>
    {(context) => (
      <Component {...{...props, ...context}} />
    )}
  </Consumer>
)

export {
  Provider as default,
  Consumer,
  withConsumer
}