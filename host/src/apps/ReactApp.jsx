import React, { useEffect, useRef } from 'react';

import Wrapper from 'reactApp/App';

const ReactApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    Wrapper(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default ReactApp;
