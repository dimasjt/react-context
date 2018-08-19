import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AppContext from './AppContext'
import AppStructured from './AppStructured'

const Apps = () => (
  <React.Fragment>
    <App />
    <hr/>
    <AppContext />
    <hr/>
    <AppStructured />
  </React.Fragment>
)

ReactDOM.render(<Apps />, document.getElementById('root'));
