import React from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import Header from '../components/Header';
import Link from '../components/Link';
import solidLogo from '../assets/solid.svg';
import preactLogo from '../assets/preact.png';
import reactLogo from '../assets/react.png';
import svelteLogo from '../assets/svelte.png';
import vueLogo from '../assets/vue.png';
import angularLogo from '../assets/angular.png';

const Home = () => {
  const outlet = useOutlet();

  return (
    <article>
      <Header />

      {outlet ? (
        <Outlet />
      ) : (
        <section className="flex flex-wrap justify-center my-8 gap-x-4 gap-y-2">
          <Link to="angular" src={angularLogo} alt="angular" />
          <Link to="preact" src={preactLogo} alt="preact" />
          <Link to="react" src={reactLogo} alt="react" />
          <Link to="solid" src={solidLogo} alt="solid" />
          <Link to="svelte" src={svelteLogo} alt="svelte" />
          <Link to="vue" src={vueLogo} alt="vue" />
        </section>
      )}
    </article>
  );
};

export default Home;
