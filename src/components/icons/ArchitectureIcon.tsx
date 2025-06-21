"use client";

interface ArchitectureIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const ArchitectureIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: ArchitectureIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Architecture Icon</title>
      <g id="architecture" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* Document/Blueprint */}
        <rect x="20" y="20" width="60" height="80" rx="3" stroke={color} strokeWidth="3" fill="none"></rect>
        
        {/* Document Lines */}
        <line x1="30" y1="35" x2="70" y2="35" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="45" x2="70" y2="45" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="55" x2="60" y2="55" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="65" x2="70" y2="65" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="75" x2="50" y2="75" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="85" x2="70" y2="85" stroke={color} strokeWidth="2"></line>
        
        {/* Compass/Architect Tool */}
        <circle cx="85" cy="70" r="15" stroke={color} strokeWidth="2" fill="none"></circle>
        <path d="M85,55 L85,85" stroke={color} strokeWidth="2"></path>
        <path d="M70,70 L100,70" stroke={color} strokeWidth="2"></path>
        <circle cx="85" cy="70" r="3" fill={color}></circle>
        
        {/* Ruler/Drawing Tool */}
        <rect x="65" y="30" width="30" height="10" rx="2" stroke={color} strokeWidth="2" fill="none"></rect>
      </g>
    </svg>
  );
};

export default ArchitectureIcon;
