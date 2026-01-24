import { useEffect, useRef } from "react";

interface CircuitBoardProps {
  className?: string;
}

const CircuitBoard = ({ className = "" }: CircuitBoardProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll(".circuit-path");

    const animatePath = (path: Element, delay: number) => {
      setTimeout(() => {
        path.classList.add("animate-pulse");
        setTimeout(() => {
          path.classList.remove("animate-pulse");
        }, 1000);
      }, delay);
    };

    const animateCircuits = () => {
      paths.forEach((path, index) => {
        animatePath(path, index * 200);
      });
    };

    // Initial animation
    animateCircuits();

    // Repeat animation
    const interval = setInterval(animateCircuits, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 400 400"
      style={{ opacity: 0.1 }}
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Circuit paths */}
      <g className="text-primary">
        <path
          className="circuit-path transition-all duration-300"
          d="M50 50 L150 50 L150 150 L250 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="50"
          cy="50"
          r="4"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="150"
          cy="50"
          r="3"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="150"
          cy="150"
          r="3"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="250"
          cy="150"
          r="4"
          fill="currentColor"
        />

        <path
          className="circuit-path transition-all duration-300"
          d="M350 50 L300 50 L300 200 L100 200 L100 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="350"
          cy="50"
          r="4"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="300"
          cy="50"
          r="3"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="300"
          cy="200"
          r="3"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="100"
          cy="200"
          r="3"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="100"
          cy="300"
          r="4"
          fill="currentColor"
        />

        <path
          className="circuit-path transition-all duration-300"
          d="M200 350 L200 250 L350 250 L350 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="200"
          cy="350"
          r="4"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="200"
          cy="250"
          r="3"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="350"
          cy="250"
          r="3"
          fill="currentColor"
        />
        <circle
          className="circuit-path transition-all duration-300"
          cx="350"
          cy="300"
          r="4"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default CircuitBoard;
