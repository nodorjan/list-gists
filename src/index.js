import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/page';
import {setIsDemo} from "./calls";

setIsDemo(window.location.href);

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);
