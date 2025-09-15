import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText = ({ text, className = '', intensity = 'medium' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*(){}[]|\\:;"<>,.?/~`';
  
  const intensitySettings = {
    low: { frequency: 3000, duration: 100, charCount: 2 },
    medium: { frequency: 2000, duration: 150, charCount: 4 },
    high: { frequency: 1000, duration: 200, charCount: 6 }
  };

  const settings = intensitySettings[intensity];

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        
        // Create glitched version
        const textArray = text.split('');
        const numGlitches = Math.min(settings.charCount, text.length);
        
        for (let i = 0; i < numGlitches; i++) {
          const randomIndex = Math.floor(Math.random() * text.length);
          textArray[randomIndex] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        
        setDisplayText(textArray.join(''));
        
        // Restore original text after duration
        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, settings.duration);
      }
    }, settings.frequency);

    return () => clearInterval(glitchInterval);
  }, [text, settings]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'text-red-500' : ''} transition-colors duration-100`}
      style={{
        textShadow: isGlitching ? '2px 0 #ff0000, -2px 0 #00ffff' : 'none',
        transform: isGlitching ? `translateX(${Math.random() * 4 - 2}px)` : 'none'
      }}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;