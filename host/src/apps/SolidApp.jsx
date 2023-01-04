import React, { useEffect, useRef } from 'react';

import Wrapper from 'solidApp/App';

const SolidApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    Wrapper(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default SolidApp;
