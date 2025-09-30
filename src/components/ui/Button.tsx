import { FC } from 'react';
import { cn } from '@/lib/utils';
type Variant = 'primary' | 'secondary' | 'ghost' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: 'circo-gradient text-white hover:bg-red-700',
  secondary: 'bg-white text-foreground',
  ghost: 'bg-transparent text-foreground border',
  icon: 'bg-transparent hover:text-primary w-fit h-fit p-0'
};

const Button: FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'cursor-pointer py-4.5 px-10 rounded-full font-semibold text-base justify-center items-center !flex has-[svg]:gap-2 active:scale-98 transition-all',
        `${variants[variant]}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
