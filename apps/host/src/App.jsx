import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import './index.scss';

const App = () => {
  return <Router />;
};
ReactDOM.render(<App />, document.getElementById('app'));
