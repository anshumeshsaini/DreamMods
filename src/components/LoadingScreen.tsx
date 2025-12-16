import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const loadingTexts = [
    "Igniting Performance",
    "Tuning Perfection",
    "Unleashing Power"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsExiting(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % loadingTexts.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-carbon-fiber opacity-30" />
      
      {/* Smoke particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-muted/30 animate-smoke"
            style={{
              left: `${20 + i * 10}%`,
              bottom: "30%",
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Tire SVG with rotation */}
      <div className="relative mb-8">
        {/* Glow effect behind tire */}
        <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full scale-110 animate-glow-pulse" />
        
        {/* Tire container */}
        <div className="relative animate-tire-spin">
          <svg
            viewBox="0 0 200 200"
            className="w-40 h-40 md:w-56 md:h-56"
          >
            {/* Outer tire */}
            <circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="hsl(var(--carbon))"
              strokeWidth="10"
              className="drop-shadow-lg"
            />
            
            {/* Tire tread pattern */}
            {[...Array(24)].map((_, i) => (
              <rect
                key={i}
                x="96"
                y="5"
                width="8"
                height="15"
                fill="hsl(var(--muted))"
                transform={`rotate(${i * 15} 100 100)`}
                rx="2"
              />
            ))}
            
            {/* Inner tire wall */}
            <circle
              cx="100"
              cy="100"
              r="75"
              fill="hsl(var(--secondary))"
              stroke="hsl(var(--border))"
              strokeWidth="3"
            />
            
            {/* Rim outer */}
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="hsl(var(--chrome))"
              strokeWidth="4"
            />
            
            {/* Rim spokes */}
            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d={`M 100 100 L ${100 + 55 * Math.cos((i * 72 - 90) * Math.PI / 180)} ${100 + 55 * Math.sin((i * 72 - 90) * Math.PI / 180)}`}
                stroke="hsl(var(--chrome))"
                strokeWidth="12"
                strokeLinecap="round"
              />
            ))}
            
            {/* Center cap */}
            <circle
              cx="100"
              cy="100"
              r="20"
              fill="hsl(var(--secondary))"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
            />
            
            {/* Center logo hint */}
            <circle
              cx="100"
              cy="100"
              r="8"
              fill="hsl(var(--primary))"
            />
          </svg>
        </div>
        
        {/* Motion blur effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full blur-xl animate-pulse" />
      </div>

      {/* Brand text */}
      <div className="text-center space-y-4 z-10">
        <h1 className="font-display text-4xl md:text-5xl tracking-wider text-gradient">
          DREAM MODS
        </h1>
        
        {/* Animated loading text */}
        <div className="h-8 overflow-hidden">
          <p
            key={textIndex}
            className="font-body text-lg md:text-xl text-muted-foreground animate-fade-in"
          >
            {loadingTexts[textIndex]}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-12 w-64 md:w-80">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full gradient-racing transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between items-center">
          <span className="font-digital text-xs text-muted-foreground tracking-wider">
            LOADING
          </span>
          <span className="font-digital text-sm text-primary">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
