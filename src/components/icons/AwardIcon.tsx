"use client";

interface AwardIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const AwardIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: AwardIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Award Icon</title>
      <g id="award" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* Trophy/Award Base */}
        <path d="M40,90 L80,90 L80,100 C80,104.418 76.418,108 72,108 L48,108 C43.582,108 40,104.418 40,100 L40,90 Z" stroke={color} strokeWidth="3" fill="none"></path>
        {/* Trophy/Award Shield */}
        <path d="M35,40 L85,40 L85,75 C85,83.284 78.284,90 70,90 L50,90 C41.716,90 35,83.284 35,75 L35,40 Z" stroke={color} strokeWidth="3" fill="none"></path>
        {/* Lock Icon in Center */}
        <rect x="52" y="55" width="16" height="20" rx="3" stroke={color} strokeWidth="2" fill="none"></rect>
        <circle cx="60" cy="55" r="5" stroke={color} strokeWidth="2" fill="none"></circle>
        {/* Stars on Top */}
        <path d="M45,25 L48,32 L56,32 L49,37 L52,44 L45,39 L38,44 L41,37 L34,32 L42,32 Z" fill={color}></path>
        <path d="M60,15 L63,22 L71,22 L64,27 L67,34 L60,29 L53,34 L56,27 L49,22 L57,22 Z" fill={color}></path>
        <path d="M75,25 L78,32 L86,32 L79,37 L82,44 L75,39 L68,44 L71,37 L64,32 L72,32 Z" fill={color}></path>
      </g>
    </svg>
  );
};

export default AwardIcon;
