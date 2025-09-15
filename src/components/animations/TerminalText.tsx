import { useEffect, useState } from 'react';

interface TerminalTextProps {
  text: string;
  speed?: number;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

const TerminalText = ({ 
  text, 
  speed = 50, 
  showCursor = true, 
  className = '',
  onComplete 
}: TerminalTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (showCursor) {
      const interval = setInterval(() => {
        setShowBlinkingCursor(prev => !prev);
      }, 530);

      return () => clearInterval(interval);
    }
  }, [showCursor]);

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      {showCursor && (
        <span className={`${showBlinkingCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
          _
        </span>
      )}
    </span>
  );
};

export default TerminalText;