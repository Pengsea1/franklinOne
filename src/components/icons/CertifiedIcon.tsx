"use client";

interface CertifiedIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const CertifiedIcon = ({ 
  className = "", 
  width = 120, 
  height = 120, 
  color = "var(--color-primary)" 
}: CertifiedIconProps) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Certified Icon</title>
      <g id="certificate" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {/* Certificate/Award Document */}
        <rect x="20" y="20" width="80" height="60" rx="3" stroke={color} strokeWidth="3" fill="none"></rect>
        
        {/* Certificate Content Lines */}
        <line x1="30" y1="30" x2="90" y2="30" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="40" x2="70" y2="40" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="50" x2="90" y2="50" stroke={color} strokeWidth="2"></line>
        <line x1="30" y1="60" x2="60" y2="60" stroke={color} strokeWidth="2"></line>
        
        {/* Certificate Seal */}
        <circle cx="75" cy="65" r="10" stroke={color} strokeWidth="2" fill="none"></circle>
        
        {/* Ribbon */}
        <path d="M60,80 L50,100 L60,95 L70,100 L60,80" stroke={color} strokeWidth="2" fill="none"></path>
      </g>
    </svg>
  );
};

export default CertifiedIcon;
