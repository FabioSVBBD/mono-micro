import { render, h } from 'preact';
import Counter from './components/Counter';
import preactLogo from './assets/preact.png';

import './index.scss';

export const App = () => (
  <div class="mt-10 flex flex-col items-center">
    <img src={preactLogo} alt="preact" class="h-32 w-32" />
    <Counter />
  </div>
);

export default (element) => {
  render(<App />, element);
};
