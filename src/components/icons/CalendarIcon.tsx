"use client";

interface CalendarIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const CalendarIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: CalendarIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Calendar Icon</title>
      <g id="calendar" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect id="background" stroke={color} strokeWidth="4" x="10" y="20" width="100" height="90" rx="5"></rect>
        <line x1="10" y1="40" x2="110" y2="40" stroke={color} strokeWidth="4"></line>
        <line x1="30" y1="10" x2="30" y2="30" stroke={color} strokeWidth="4"></line>
        <line x1="90" y1="10" x2="90" y2="30" stroke={color} strokeWidth="4"></line>
        <text x="33" y="35" fontFamily="Arial" fontSize="12" fill={color}>Jul 2000</text>
        <rect x="25" y="50" width="15" height="15" fill={color}></rect>
        <rect x="45" y="50" width="15" height="15" fill={color}></rect>
        <rect x="65" y="50" width="15" height="15" fill={color}></rect>
        <rect x="85" y="50" width="15" height="15" fill={color}></rect>
        <rect x="25" y="70" width="15" height="15" fill={color}></rect>
        <rect x="45" y="70" width="15" height="15" fill={color}></rect>
        <rect x="65" y="70" width="15" height="15" fill={color}></rect>
        <rect x="85" y="70" width="15" height="15" fill={color}></rect>
        <rect x="25" y="90" width="15" height="15" fill={color}></rect>
        <rect x="45" y="90" width="15" height="15" fill={color}></rect>
        <rect x="65" y="90" width="15" height="15" fill={color}></rect>
        <rect x="85" y="90" width="15" height="15" fill={color}></rect>
      </g>
    </svg>
  );
};

export default CalendarIcon;
