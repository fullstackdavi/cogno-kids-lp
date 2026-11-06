import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#0B192C]/50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#38BDF8] via-sky-300 to-[#0284C7] transition-all duration-150 ease-out shadow-[0_0_10px_#38BDF8]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
