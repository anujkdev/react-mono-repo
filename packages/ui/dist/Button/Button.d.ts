import React from 'react';
export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}
export declare const Button: React.FC<ButtonProps>;
