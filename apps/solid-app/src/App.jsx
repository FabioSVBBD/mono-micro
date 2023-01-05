import { render } from 'solid-js/web';
import Counter from './components/Counter';
import solidJs from './assets/solid.svg';
import './index.scss';

export const App = () => (
  <div class="mt-10 flex flex-col items-center">
    <img src={solidJs} alt="solid" class="h-32 w-32" />
    <Counter />
  </div>
);

export default (element) => {
  render(App, element);
};
