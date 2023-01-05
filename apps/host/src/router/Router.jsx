import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Loading from '../pages/Loading';

const PreactApp = React.lazy(() => import('../apps/PreactApp'));
const ReactApp = React.lazy(() => import('../apps/ReactApp'));
const SolidApp = React.lazy(() => import('../apps/SolidApp'));
const SvelteApp = React.lazy(() => import('../apps/SvelteApp'));
const VueApp = React.lazy(() => import('../apps/VueApp'));
const AngularApp = React.lazy(() => import('../apps/AngularApp'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="solid" element={<SolidApp />} />
          <Route path="preact" element={<PreactApp />} />
          <Route path="svelte" element={<SvelteApp />} />
          <Route path="vue" element={<VueApp />} />
          <Route path="react" element={<ReactApp />} />
          <Route path="angular" element={<AngularApp />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
