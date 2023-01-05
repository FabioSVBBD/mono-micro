import React, { useEffect, useRef } from 'react';

import Wrapper from 'preactApp/App';

const PreactApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    Wrapper(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default PreactApp;
