'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import { CircleAlert, Eye, EyeOff, LucideIcon } from 'lucide-react';
import Label from './Label';

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
    style,
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

    const baseInputStyle: React.CSSProperties = {
        width: '100%',
        padding: icon
            ? `11px ${isPassword ? '42px' : '14px'} 11px 42px`
            : `11px ${isPassword ? '42px' : '14px'} 11px 14px`,
        border: `1.5px solid ${error ? '#fca5a5' : '#e4e9f0'}`,
        borderRadius: 10,
        fontSize: 14,
        color: '#1a202c',
        background: error ? '#fff5f5' : '#f8fafc',
        fontFamily: 'inherit',
        outline: 'none',
        transition: 'border-color .2s, box-shadow .2s, background .2s',
        boxSizing: 'border-box',
        ...style,
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.style.borderColor = error ? '#f87171' : '#4a90d9';
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.boxShadow = error
            ? '0 0 0 3px rgba(248,113,113,.12)'
            : '0 0 0 3px rgba(74,144,217,.3)';
        onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.style.borderColor = error ? '#fca5a5' : '#e4e9f0';
        e.currentTarget.style.background = error ? '#fff5f5' : '#f8fafc';
        e.currentTarget.style.boxShadow = 'none';
        onBlur?.(e);
    };

    return (
        <div style={{ marginBottom: 14 }}>
            {label && (
                <Label htmlFor={inputId} required={required}>
                    {label}
                </Label>
            )}

            <div style={{ position: 'relative' }}>
                {/* Left icon */}
                {LucideIcon && (
                    <span
                        style={{
                            position: 'absolute',
                            left: 13,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            opacity: 0.4,
                            pointerEvents: 'none',
                            display: 'flex',
                        }}
                    >
                        <LucideIcon size={15} color="#334155" strokeWidth={1.8} />
                    </span>
                )}

                <input
                    id={inputId}
                    type={resolvedType}
                    style={baseInputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    {...rest}
                />

                {/* Toggle password button */}
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                        style={{
                            position: 'absolute',
                            right: 12,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            padding: 2,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#94a3b8',
                            transition: 'color .15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#4a90d9')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
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
                    style={{
                        fontSize: 11.5,
                        color: '#ef4444',
                        marginTop: 5,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                    }}
                >
                    <CircleAlert size={11} color="#ef4444" strokeWidth={2} />
                    {error}
                </p>
            )}
        </div>
    );
}
