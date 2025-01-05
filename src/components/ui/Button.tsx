import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex items-center gap-2 p-2 rounded bg-gray-800 text-white hover:bg-gray-700 ${className}`}
      {...props} // Spread all other props like onClick, disabled, etc.
    >
      {children}
    </button>
  );
};

export default Button;
