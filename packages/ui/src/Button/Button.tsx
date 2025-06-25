import React from 'react';

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);
