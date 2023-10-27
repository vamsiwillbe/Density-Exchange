import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GsapText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    );

    tl.to(
      textRef.current,
      { opacity: 0, y: -20, duration: 1, ease: 'power4.inOut', delay: 1 }
    );
  }, []);

  return <h1 ref={textRef}>Hello, GSAP Animation!</h1>;
};

export default GsapText;
