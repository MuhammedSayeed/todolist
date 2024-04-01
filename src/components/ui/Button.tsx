import { VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";



interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button>
      {children}
    </button>
  );
};

export default Button;
