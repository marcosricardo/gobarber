import React, {  useState, useEffect } from 'react';
import Routes from './routes';
import history from './services/history';
import { Router } from 'react-router-dom';

function App() {
  return
      (
        <Router history={history}>
            <Routes />
        </Router>
      );
}

export default App;
