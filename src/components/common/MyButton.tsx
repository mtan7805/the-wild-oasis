import type { ReactNode } from "react";

interface MyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string; // Để bạn tùy biến padding/khung từ bên ngoài
}

export default function MyButton({
  children,
  onClick,
  className = "",
}: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border border-amber-50 bg-none px-3 py-3 cursor-pointer
                uppercase tracking-wide
                transition-all duration-300
                hover:bg-accent-600 hover:text-primary-100
                box-sizing-border
        
        ${className}
      `}
    >
      {children}
    </button>
  );
}
