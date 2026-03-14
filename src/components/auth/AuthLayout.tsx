interface AuthLayoutProps {
    children: React.ReactNode;
}

const DESTINATIONS = [
    { emoji: '🏖️', name: 'Phú Quốc' },
    { emoji: '⛵', name: 'Hạ Long' },
    { emoji: '🏮', name: 'Hội An' },
];

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-50">
            <div className="overflow-hidden flex w-[min(820px,95vw)] min-h-[600px] shadow-2xl rounded-2xl">
                {/* Left panel */}
                <div
                    className="relative shrink-0 w-1/2 flex flex-col justify-between p-9 overflow-hidden bg-main"
                >
                    {/* Leaf pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.06] pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                              radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                                              radial-gradient(circle at 60% 80%, white 1px, transparent 1px)`,
                            backgroundSize: '48px 48px, 36px 36px, 56px 56px',
                        }}
                    />

                    {/* Glow orbs */}
                    <div
                        className="absolute -top-10 -right-10 w-64 h-64 rounded-full pointer-events-none"
                        style={{
                            background:
                                'radial-gradient(circle, rgba(167,243,208,0.2) 0%, transparent 70%)',
                        }}
                    />
                    <div
                        className="absolute -bottom-16 -left-10 w-72 h-72 rounded-full pointer-events-none"
                        style={{
                            background:
                                'radial-gradient(circle, rgba(110,231,183,0.15) 0%, transparent 70%)',
                        }}
                    />

                    {/* Top — brand */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">🌿</span>
                            <span className="text-white font-bold text-base tracking-wide">
                                Du Lịch Tự Túc
                            </span>
                        </div>
                        <p className="text-emerald-300/60 text-xs">Hành trình của riêng bạn</p>
                    </div>

                    {/* Middle — headline */}
                    <div className="relative z-10 space-y-4">
                        <h2
                            className="text-white font-black leading-tight"
                            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                        >
                            Thiên nhiên
                            <br />
                            <span
                                style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(90deg, #6ee7b7, #fde68a)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                gọi bạn lên đường.
                            </span>
                        </h2>
                        <p className="text-emerald-100/50 text-sm leading-relaxed max-w-[200px]">
                            Lên kế hoạch thông minh, đặt vé dễ dàng, trải nghiệm tự do.
                        </p>

                        {/* Destination pills */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {DESTINATIONS.map((d) => (
                                <span
                                    key={d.name}
                                    className="flex items-center gap-1.5 text-xs font-medium text-emerald-100/80 rounded-full px-3 py-1.5 border border-emerald-300/20"
                                    style={{ background: 'rgba(255,255,255,0.08)' }}
                                >
                                    {d.emoji} {d.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom — social proof */}
                    <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-emerald-300/20">
                        <div className="flex -space-x-2">
                            {['🧑', '👩', '🧔'].map((a, i) => (
                                <span
                                    key={i}
                                    className="w-7 h-7 rounded-full border border-emerald-300/20 flex items-center justify-center text-sm"
                                    style={{ background: 'rgba(255,255,255,0.08)' }}
                                >
                                    {a}
                                </span>
                            ))}
                        </div>
                        <p className="text-emerald-100/40 text-xs">
                            <span className="text-emerald-100/80 font-semibold">12,000+</span> người
                            đã lên kế hoạch
                        </p>
                    </div>
                </div>

                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
