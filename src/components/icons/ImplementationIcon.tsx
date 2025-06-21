"use client";

interface ImplementationIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const ImplementationIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: ImplementationIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Implementation Icon</title>
      <g id="implementation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* Hand */}
        <path d="M40,70 C50,70 60,75 70,70 S80,55 70,50 S60,60 50,60 S35,65 40,70 Z" stroke={color} strokeWidth="3" fill="none"></path>
        <path d="M40,70 L40,85 C40,90 45,95 55,95 S70,90 70,85 L70,70" stroke={color} strokeWidth="3" fill="none"></path>
        
        {/* Wrench Tool */}
        <path d="M30,40 L50,60" stroke={color} strokeWidth="3" strokeLinecap="round"></path>
        <path d="M25,45 C20,40 20,30 25,25 C30,20 40,20 45,25 L55,35 C58,38 58,43 55,46 C52,49 47,49 44,46 L34,36" stroke={color} strokeWidth="3" fill="none"></path>
        
        {/* Screwdriver */}
        <path d="M65,30 L85,50" stroke={color} strokeWidth="3" strokeLinecap="round"></path>
        <path d="M90,55 L80,45" stroke={color} strokeWidth="3" strokeLinecap="round"></path>
        <rect x="60" y="25" width="10" height="5" transform="rotate(-45 65 27.5)" fill={color}></rect>
      </g>
    </svg>
  );
};

export default ImplementationIcon;
