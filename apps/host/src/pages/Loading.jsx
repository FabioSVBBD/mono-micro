import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import clockAnimation from '../assets/animations/clock.json';

const Loading = () => {
  const ref = useRef(null);
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: ref.current,
      animationData: clockAnimation,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    const onDomLoad = () => {
      animation.setSpeed(1);
      animation.setDirection(1);
    };

    animation.addEventListener('DOMLoaded', onDomLoad);

    return () => {
      animation.removeEventListener('DOMLoaded', onDomLoad);
    };
  }, []);

  return (
    <section
      className="flex items-center justify-center w-full"
      style={{ height: '40rem' }}
    >
      <div ref={ref} className="w-1/2 sm:w-1/4" />
    </section>
  );
};

export default Loading;
