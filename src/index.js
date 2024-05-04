import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Home';
import NewPage from './NewPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      {/* <Home/> */}
      <NewPage/>
    </>
);