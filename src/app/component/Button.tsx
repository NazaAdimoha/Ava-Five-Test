"use client";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant,
  size,
  onClick,
  disabled,
  icon,
  className,
  children,
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    tertiary: "bg-transparent text-gray-500",
  };

  const sizeClasses = {
    small: "px-4 py-1 text-sm",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-3 text-lg",
  };

  return (
    <button 
      className={`
        ${variant && variantClasses[variant]} 
        ${size && sizeClasses[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        flex items-center justify-center rounded-md space-x-2
        ${className}
      `}
        onClick={onClick}
        disabled={disabled}
    >
        {
            icon && <span className="">{icon}</span>
        }
        <span>{children}</span>
    </button>
  );
};

export default Button;
