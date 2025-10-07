'use client';

import dynamic from 'next/dynamic';

const AnimationLottie = ({ animationPath, width }) => {
  // Dynamically import Lottie only on the client (no SSR)
  const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;