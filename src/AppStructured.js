import React from 'react';

import Form from './components/Form'
import List from './components/List'
import Provider from './context/AppContext'

class AppStructured extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>structured</h1>
          <Form />
          <List />
        </div>
      </Provider>
    );
  }
}

export default AppStructured;
