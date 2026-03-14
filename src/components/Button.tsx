import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
    href?: string;
    icon?: LucideIcon;
    fullWidth?: boolean;
    className?: string;
    size?: ButtonSize;
    type?: ButtonType; // thêm type cho button
}

const Button = ({
    children,
    variant = 'primary',
    href,
    icon: Icon,
    fullWidth = false,
    className = '',
    size = 'md',
    type = 'button',
    ...rest
}: ButtonProps) => {
    const variantClasses: Record<ButtonVariant, string> = {
        primary: 'bg-linear-to-br from-primary-500 to-primary-300 hover:bg-linear-to-tl text-white font-semibold transition',
        ghost: 'bg-transparent hover:bg-primary-300/20! text-black font-semibold transition',
    };

    const sizeClasses: Record<ButtonSize, string> = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classNameBase = [
        'flex items-center gap-2 justify-center cursor-pointer rounded-md select-none hover:-translate-y-0.5 active:translate-y-0 hover:shadow-xl',
        fullWidth ? 'w-full' : 'w-fit',
        variantClasses[variant],
        sizeClasses[size],
        className,
    ].join(' ');

    if (href) {
        return (
            <Link href={href} className={classNameBase}>
                {Icon && (
                    <span>
                        <Icon size={13} />
                    </span>
                )}
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={classNameBase}
            {...rest}
        >
            {Icon && (
                <span>
                    <Icon size={16} />
                </span>
            )}
            {children}
        </button>
    );
};

export default Button;
