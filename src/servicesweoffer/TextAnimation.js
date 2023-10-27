import dynamic from 'next/dynamic';

const DynamicGsapText = dynamic(() => import('./GsapText'), { ssr: false });

const TextAnimation = () => {
  return <DynamicGsapText />;
};

export default TextAnimation;
