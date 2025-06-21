"use client";

interface ShieldIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const ShieldIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: ShieldIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Shield Icon</title>
      <g id="shield" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* Server/Dashboard with Shield */}
        <rect id="server" x="15" y="30" width="90" height="60" rx="5" stroke={color} strokeWidth="3" fill="none"></rect>
        {/* Server Lines */}
        <line x1="15" y1="50" x2="105" y2="50" stroke={color} strokeWidth="2"></line>
        <line x1="15" y1="70" x2="105" y2="70" stroke={color} strokeWidth="2"></line>
        {/* Shield Overlay */}
        <path d="M60,25 L80,35 V55 C80,65 70,75 60,80 C50,75 40,65 40,55 V35 L60,25z" stroke={color} strokeWidth="3" fill="none"></path>
        {/* Checkmark in Shield */}
        <path d="M52,55 L58,62 L68,48" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
        {/* Buttons/Indicators */}
        <circle cx="25" cy="40" r="3" fill={color}></circle>
        <circle cx="35" cy="40" r="3" fill={color}></circle>
        <rect x="85" y="38" width="10" height="4" fill={color}></rect>
        <rect x="25" y="60" width="20" height="4" fill={color}></rect>
        <rect x="55" y="60" width="20" height="4" fill={color}></rect>
        <rect x="85" y="60" width="10" height="4" fill={color}></rect>
        <rect x="25" y="80" width="30" height="4" fill={color}></rect>
        <circle cx="85" cy="80" r="5" fill={color}></circle>
        <circle cx="95" cy="80" r="5" fill={color}></circle>
      </g>
    </svg>
  );
};

export default ShieldIcon;
