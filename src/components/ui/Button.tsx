import { FC } from 'react';
import { cn } from '@/lib/utils';
type Variant = 'primary' | 'secondary' | 'ghost' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: 'circo-gradient text-white ',
  secondary: 'bg-white text-foreground hover:text-white',
  ghost: 'bg-transparent text-foreground border hover:text-white transition-all duration-200',
  icon: 'bg-transparent  w-fit h-fit p-0'
};

const Button: FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'relative z-[1] cursor-pointer group h-fit w-fit rounded-full overflow-hidden',
        `${variants[variant]}`,
        className
      )}
    >
      <div className="relative z-20 py-4.5 px-10 font-semibold text-base justify-center items-center flex has-[svg]:gap-2 active:scale-98">
        {children}
      </div>
      <div
        className={cn(
          'absolute z-10 -bottom-1 w-full scale-120 h-[150%] rounded-t-full translate-y-[110%] inset-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out',
          (variant === 'primary' || variant === 'ghost') && 'bg-black text-white has-[>svg]:stroke-white',
          variant === 'secondary' && 'circo-gradient text-white has-[>svg]:stroke-white'
        )}
      ></div>
    </button>
  );
};

export default Button;
