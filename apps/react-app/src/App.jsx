import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import reactLogo from './assets/react.png';
import './index.scss';

export const App = () => (
  <div className="flex flex-col items-center mt-10">
    <img src={reactLogo} alt="react" className="w-32 mb-1" />
    <Counter />
  </div>
);

export default (element) => {
  ReactDOM.render(<App />, element);
};
