import { useEffect, useState } from "react";

interface ScanLineProps {
  className?: string;
  duration?: number;
  color?: string;
}

const ScanLine = ({
  className = "",
  duration = 3000,
  color = "hsl(270, 95%, 60%)",
}: ScanLineProps) => {
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const startScan = () => {
      setIsScanning(true);
      setTimeout(() => setIsScanning(false), duration);
    };

    // Initial scan
    startScan();

    // Repeat scan
    const interval = setInterval(startScan, duration + 2000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 transition-transform duration-3000 ease-linear ${
          isScanning ? "translate-y-full" : "-translate-y-full"
        }`}
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${color}40 45%, ${color} 50%, ${color}40 55%, transparent 100%)`,
          height: "200%",
          transform: isScanning ? "translateY(0%)" : "translateY(-100%)",
        }}
      />
    </div>
  );
};

export default ScanLine;
