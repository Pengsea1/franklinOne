"use client";

interface GlobeIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const GlobeIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: GlobeIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Globe Icon</title>
      <g id="globe" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <circle id="globe-circle" stroke={color} strokeWidth="4" cx="60" cy="60" r="50"></circle>
        <ellipse id="horizontal-line" stroke={color} strokeWidth="3" cx="60" cy="60" rx="50" ry="20"></ellipse>
        <line x1="10" y1="60" x2="110" y2="60" stroke={color} strokeWidth="3"></line>
        <line x1="60" y1="10" x2="60" y2="110" stroke={color} strokeWidth="3"></line>
        {/* Location Pin 1 */}
        <circle cx="40" cy="40" r="8" fill={color}></circle>
        <path d="M40,48 L40,60" stroke={color} strokeWidth="3"></path>
        {/* Location Pin 2 */}
        <circle cx="75" cy="45" r="8" fill={color}></circle>
        <path d="M75,53 L75,65" stroke={color} strokeWidth="3"></path>
        {/* Location Pin 3 */}
        <circle cx="55" cy="75" r="8" fill={color}></circle>
        <path d="M55,83 L55,95" stroke={color} strokeWidth="3"></path>
      </g>
    </svg>
  );
};

export default GlobeIcon;
