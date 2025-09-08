import { FC } from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: 'circo-gradient text-white hover:bg-red-700',
  secondary: 'bg-white text-[#1B1B1B]'
};

const Button: FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`cursor-pointer py-4.5 px-10 rounded-full font-semibold text-base ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
