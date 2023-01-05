import { createSignal } from 'solid-js';

const Counter = () => {
  const [count, setCount] = createSignal(0);

  return (
    <button
      class="px-4 rounded-md border-2 border-gray-900 text-gray-900 text-lg"
      onClick={() => setCount(count() + 1)}
    >
      clicked {count()} time{count() !== 1 && 's'}
    </button>
  );
};

export default Counter;
