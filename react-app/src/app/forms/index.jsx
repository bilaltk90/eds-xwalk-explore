import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

const elem = document.querySelector('.form');
if (elem) {
  let formURL = elem.querySelector("form")?.dataset?.action;
  if(!formURL){
    formURL =  elem.querySelector(".button-container a").href;
  }
  const root = createRoot(elem);
  root.render(<App formURL={formURL} />);
}
