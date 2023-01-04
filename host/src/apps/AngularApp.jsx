import React, { useEffect, useRef } from 'react';

import { mount } from 'angularApp/App';

const AngularApp = () => {
  useEffect(() => {
    mount();
  }, []);

  return (
    <div>
      <app-root></app-root>
    </div>
  );
};

export default AngularApp;
