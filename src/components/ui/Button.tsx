import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-background';
  
  const variantClasses = {
    primary: 'bg-highlight hover:bg-highlight/90 text-black',
    secondary: 'bg-background hover:bg-highlight/20 text-black border border-black/10',
    outline: 'bg-transparent hover:bg-highlight/20 text-black border border-black'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-5 py-2.5',
    lg: 'text-lg px-6 py-3'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;