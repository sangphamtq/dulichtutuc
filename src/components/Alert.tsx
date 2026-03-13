import React from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AlertVariant = "error" | "success" | "info" | "warning";

interface AlertProps {
    children: React.ReactNode;
    variant?: AlertVariant;
}

interface AlertStyle {
    bg: string;
    border: string;
    color: string;
    Icon: LucideIcon;
}

const alertStyles: Record<AlertVariant, AlertStyle> = {
    error: {
        bg: "#fff5f5",
        border: "#fecaca",
        color: "#dc2626",
        Icon: CircleAlert,
    },
    success: {
        bg: "#f0fdf4",
        border: "#bbf7d0",
        color: "#16a34a",
        Icon: CircleCheck,
    },
    info: {
        bg: "#eff6ff",
        border: "#bfdbfe",
        color: "#2563eb",
        Icon: CircleAlert,
    },
    warning: {
        bg: "#fef3c7",
        border: "#fde68a",
        color: "#f59e42",
        Icon: CircleAlert,
    },
} as Record<AlertVariant, AlertStyle>;

export default function Alert({ children, variant = "error" }: AlertProps) {
    const { bg, border, color, Icon } = alertStyles[variant];

    return (
        <div
            role="alert"
            style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: 9,
                padding: "9px 12px",
                fontSize: 13,
                color,
            }}
        >
            <Icon size={14} color={color} strokeWidth={2} className="shrink-0"/>
            <div className="text-start">
                {children}
            </div>
        </div>
    );
}