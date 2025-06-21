"use client";

interface GrowthIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const GrowthIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: GrowthIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Growth Icon</title>
      <g id="growth" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* World/Globe */}
        <circle cx="60" cy="60" r="40" stroke={color} strokeWidth="3" fill="none"></circle>
        
        {/* Latitude Lines */}
        <path d="M20,60 L100,60" stroke={color} strokeWidth="2"></path>
        <path d="M30,40 L90,40" stroke={color} strokeWidth="2"></path>
        <path d="M30,80 L90,80" stroke={color} strokeWidth="2"></path>
        
        {/* Longitude Lines */}
        <path d="M60,20 L60,100" stroke={color} strokeWidth="2"></path>
        <path d="M40,30 L40,90" stroke={color} strokeWidth="2"></path>
        <path d="M80,30 L80,90" stroke={color} strokeWidth="2"></path>
        
        {/* Growth Arrow */}
        <path d="M40,70 L60,50 L80,70" stroke={color} strokeWidth="3" fill="none"></path>
        <path d="M60,50 L60,30" stroke={color} strokeWidth="3" fill="none"></path>
        <path d="M52,38 L60,30 L68,38" stroke={color} strokeWidth="3" fill="none"></path>
        
        {/* Connection Points */}
        <circle cx="40" cy="70" r="3" fill={color}></circle>
        <circle cx="60" cy="50" r="3" fill={color}></circle>
        <circle cx="80" cy="70" r="3" fill={color}></circle>
      </g>
    </svg>
  );
};

export default GrowthIcon;
