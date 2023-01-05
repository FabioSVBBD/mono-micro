import React, { useEffect, useRef } from 'react';

import Wrapper from 'svelteApp/App';

const SvelteApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    Wrapper(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default SvelteApp;
