import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroButtonProps {
  href: string;
  icon?: LucideIcon;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  ariaLabel: string;
}

export default function HeroButton({ href, icon: Icon, variant, children, ariaLabel }: HeroButtonProps) {
  const baseStyles = "inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#ff6b00] to-[#ff8533] text-white hover:from-[#ff8533] hover:to-[#ff9966] shadow-[0_0_20px_rgba(255,107,0,0.15)] hover:shadow-[0_0_25px_rgba(255,107,0,0.25)]",
    secondary: "border-2 border-gray-700 text-white hover:bg-white/10 shadow-lg hover:shadow-xl hover:border-gray-600 backdrop-blur-sm"
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
      aria-label={ariaLabel}
    >
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" aria-hidden="true" />}
      {children}
    </a>
  );
}