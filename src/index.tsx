import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './pages/app';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
  () => {
    setTimeout(() => {
      const loading = document.getElementById('lds');
      loading && (loading.style.display = 'none');
    }, 500);
  }
);
