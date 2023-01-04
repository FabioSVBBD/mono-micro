import App from './App.svelte';
import './index.scss';

export default (element) => {
  const app = new App({
    target: element,
  });
};
