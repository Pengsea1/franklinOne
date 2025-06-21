"use client";

interface SupportIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const SupportIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: SupportIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Support Icon</title>
      <g id="support" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* Headset */}
        <path d="M40,60 L40,75 C40,87.5 52.5,100 75,100 L80,100 C85,100 90,95 90,90 L90,75" stroke={color} strokeWidth="3" fill="none"></path>
        <path d="M40,60 L40,50 C40,33.5 53.5,20 70,20 C86.5,20 100,33.5 100,50 L100,60" stroke={color} strokeWidth="3" fill="none"></path>
        
        {/* Left Earpiece */}
        <path d="M30,48 L40,48 L40,72 L30,72 C25,72 20,67 20,60 C20,53 25,48 30,48 Z" stroke={color} strokeWidth="3" fill="none"></path>
        
        {/* Right Earpiece */}
        <path d="M100,48 L90,48 L90,72 L100,72 C105,72 110,67 110,60 C110,53 105,48 100,48 Z" stroke={color} strokeWidth="3" fill="none"></path>
        
        {/* 24/7 Text */}
        <text x="60" y="55" fontFamily="Arial" fontSize="12" fill={color} textAnchor="middle" fontWeight="bold">24/7</text>
        
        {/* Clock Hands */}
        <circle cx="60" cy="55" r="15" stroke={color} strokeWidth="2" fill="none"></circle>
        <line x1="60" y1="55" x2="60" y2="45" stroke={color} strokeWidth="2" strokeLinecap="round"></line>
        <line x1="60" y1="55" x2="68" y2="55" stroke={color} strokeWidth="2" strokeLinecap="round"></line>
      </g>
    </svg>
  );
};

export default SupportIcon;
