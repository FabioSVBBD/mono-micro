import React, { useEffect, useRef } from 'react';

import Wrapper from 'vueApp/App';

const VueApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    Wrapper(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default VueApp;
