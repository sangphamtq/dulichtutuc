'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import { CircleAlert, Eye, EyeOff, LucideIcon } from 'lucide-react';
import Label from './Label';
import { cn } from '../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    icon?: LucideIcon;
    required?: boolean;
    error?: string;
}

export default function Input({
    label,
    icon,
    required,
    error,
    id,
    className,
    type,
    onFocus,
    onBlur,
    ...rest
}: InputProps) {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const LucideIcon = icon ? icon : null;

    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(false);
    const resolvedType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className="mb-3.5">
            {label && (
                <Label htmlFor={inputId} required={required}>
                    {label}
                </Label>
            )}

            <div className="relative">
                {/* Left icon */}
                {LucideIcon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex opacity-40">
                        <LucideIcon size={15} color="currentColor" strokeWidth={1.8} />
                    </span>
                )}

                <input
                    id={inputId}
                    type={resolvedType}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    className={cn(
                        // base
                        'w-full rounded-[10px] text-sm font-[inherit] outline-none',
                        'border-[1.5px] transition-[border-color,box-shadow,background] duration-200',
                        // padding — trái: icon ? 42px : 14px, phải: password ? 42px : 14px
                        icon ? 'pl-[42px]' : 'pl-3.5',
                        isPassword ? 'pr-[42px]' : 'pr-3.5',
                        'py-[11px]',
                        // color — normal
                        !error && [
                            'border-stone-200 bg-stone-50 text-stone-900',
                            'hover:border-stone-300',
                            'focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(14,165,233,0.2)]',
                        ],
                        // color — error
                        error && [
                            'border-red-300 bg-red-50 text-stone-900',
                            'focus:border-red-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(248,113,113,0.12)]',
                        ],
                        className,
                    )}
                    {...rest}
                />

                {/* Toggle password button */}
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center p-0.5
                                   border-none bg-transparent cursor-pointer
                                   text-stone-400 hover:text-ocean-400 transition-colors duration-150"
                    >
                        {showPassword ? (
                            <EyeOff size={16} strokeWidth={1.8} />
                        ) : (
                            <Eye size={16} strokeWidth={1.8} />
                        )}
                    </button>
                )}
            </div>

            {error && (
                <p
                    id={`${inputId}-error`}
                    role="alert"
                    className="flex items-center gap-1 mt-1 text-[11.5px] text-red-500"
                >
                    <CircleAlert size={11} strokeWidth={2} />
                    {error}
                </p>
            )}
        </div>
    );
}