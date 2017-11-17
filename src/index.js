import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
  return React.createElement('div', null, [
  React.createElement('h1', null, 'Hello'),
  React.createElement('h2', null, 'There')
  ]);
 } 

ReactDOM.render(
  App(),
  document.getElementById('root')
);
