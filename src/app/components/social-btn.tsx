import React from 'react';

interface SocialBtnProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export function SocialBtn({ icon, href, label }: SocialBtnProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 bg-white/5"
    >
      {icon}
    </a>
  )
}