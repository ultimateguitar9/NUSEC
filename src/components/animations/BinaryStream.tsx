import { useEffect, useRef } from 'react';

interface BinaryStreamProps {
  className?: string;
  speed?: number;
}

const BinaryStream = ({ className = '', speed = 30 }: BinaryStreamProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBinaryLine = () => {
      const line = document.createElement('div');
      line.className = 'absolute text-xs font-mono text-primary/30 whitespace-nowrap';
      line.style.right = '-100%';
      line.style.top = `${Math.random() * 100}%`;
      
      // Generate random binary string
      const binaryLength = Math.floor(Math.random() * 50) + 20;
      let binaryString = '';
      for (let i = 0; i < binaryLength; i++) {
        binaryString += Math.random() > 0.5 ? '1' : '0';
      }
      line.textContent = binaryString;
      
      container.appendChild(line);

      // Animate across screen
      line.animate([
        { transform: 'translateX(0)' },
        { transform: `translateX(-${container.offsetWidth + line.offsetWidth}px)` }
      ], {
        duration: 8000 + Math.random() * 4000,
        easing: 'linear'
      }).addEventListener('finish', () => {
        if (line.parentNode) {
          line.parentNode.removeChild(line);
        }
      });
    };

    const interval = setInterval(createBinaryLine, speed);

    return () => {
      clearInterval(interval);
      // Clean up any remaining elements
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden pointer-events-none ${className}`}
    />
  );
};

export default BinaryStream;