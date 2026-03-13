import React from 'react';

interface LabelProps {
    children: React.ReactNode;
    required?: boolean;
    htmlFor?: string;
}

export default function Label({ children, required, htmlFor }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            style={{
                display: 'block',
                fontSize: 12,
                fontWeight: 600,
                color: '#475569',
                marginBottom: 6,
                letterSpacing: '0.2px',
            }}
        >
            {children}
            {required && (
                <span style={{ color: '#ef4444', marginLeft: 2 }} aria-hidden="true">
                    *
                </span>
            )}
        </label>
    );
}
