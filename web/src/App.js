import React from 'react';
import Routes from './routes';
import history from './services/history';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig'

function App() {
  return (
        <Router history={history}>
            <Routes />
        </Router>
      );
}

export default App;
