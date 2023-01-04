import { h } from 'preact';
import { useState } from 'preact/hooks';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      class="px-4 rounded-md border-2 border-gray-900 text-gray-900 text-lg"
      onClick={() => setCount(count + 1)}
    >
      clicked {count} time{count !== 1 && 's'}
    </button>
  );
};

export default Counter;
