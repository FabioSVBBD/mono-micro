import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="px-4 text-lg text-gray-900 border-2 border-gray-900 rounded-md"
      onClick={() => setCount(count + 1)}
    >
      clicked {count} time{count !== 1 && 's'}
    </button>
  );
};

export default Counter;
