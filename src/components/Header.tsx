"use client"

import { Bookmark, LogOut, MapPin, MountainSnow, Settings, User } from "lucide-react"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Header() {
    const { data: session, status } = useSession();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href={'/'} className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary-500 to-primary-300 flex items-center justify-center">
                            <MountainSnow className="size-4 text-white" />
                        </div>
                        <span className="text-white font-bold text-xl">Phượt<span className="text-primary-200">Viet</span></span>
                    </Link>
                    <div className="hidden md:flex items-center text-sm">
                        <Link href="/" className="text-white/90 hover:text-primary-300 transition font-medium px-4 py-2">Khám phá</Link>
                        <a href="#" className="text-white/90 hover:text-primary-300 transition font-medium px-4 py-2">Lập kế hoạch</a>
                        <a href="#" className="text-white/90 hover:text-primary-300 transition font-medium px-4 py-2">Cộng đồng</a>
                        <a href="#" className="text-white/90 hover:text-primary-300 transition font-medium px-4 py-2">Blog</a>
                    </div>
                    {session ? (
                        <div className="flex gap-1">
                            <div className="relative flex items-center gap-3" ref={dropdownRef}>
                                {/* Avatar button */}
                                <button
                                    onClick={() => setDropdownOpen((v) => !v)}
                                    className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-white/10 transition-all group cursor-pointer"
                                >
                                    {session.user?.image ? (
                                        <img
                                            src={session.user.image}
                                            alt="avatar"
                                            className="w-8 h-8 rounded-full border border-white/20 object-cover"
                                        />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                            {session.user?.name?.[0]?.toUpperCase() ||
                                                session.user?.email?.[0]?.toUpperCase() ||
                                                "?"}
                                        </div>
                                    )}
                                    <span className="hidden md:block text-white/90 text-sm font-medium max-w-[120px] truncate">
                                        {session.user?.name || session.user?.email}
                                    </span>
                                    <i
                                        className={`fas fa-chevron-down text-white/50 text-xs transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Dropdown */}
                                {dropdownOpen && (
                                    <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 z-50"
                                        style={{ background: "rgba(15,23,42,0.97)", backdropFilter: "blur(20px)" }}>

                                        {/* User info header */}
                                        <div className="px-4 py-3 border-b border-white/10">
                                            <p className="text-white font-semibold text-sm truncate">
                                                {session.user?.name || "Người dùng"}
                                            </p>
                                            <p className="text-white/40 text-xs truncate mt-0.5">
                                                {session.user?.email}
                                            </p>
                                        </div>

                                        {/* Menu items */}
                                        <div className="p-1.5">
                                            {[
                                                { icon: <User className="w-4 h-4 text-white/40 group-hover:text-white transition" />, label: "Trang cá nhân" },
                                                { icon: <MapPin className="w-4 h-4 text-white/40 group-hover:text-white transition" />, label: "Chuyến đi của tôi" },
                                                { icon: <Bookmark className="w-4 h-4 text-white/40 group-hover:text-white transition" />, label: "Đã lưu" },
                                                { icon: <Settings className="w-4 h-4 text-white/40 group-hover:text-white transition" />, label: "Cài đặt" },
                                            ].map(({ icon, label }) => (
                                                <button
                                                    key={label}
                                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-all text-left cursor-pointer group"
                                                >
                                                    {icon}
                                                    {label}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Logout */}
                                        <div className="p-1.5 border-t border-white/10">
                                            <button
                                                onClick={() => signOut()}
                                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 text-sm font-medium transition-all text-left cursor-pointer"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Đăng xuất
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {session?.user.role === "ADMIN" && (
                                <Button
                                    size="sm"
                                    href="/admin"
                                    className="ml-2 text-white/80 border-white/20"
                                >
                                    Quản trị
                                </Button>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <Button size="sm" href="/dang-nhap" variant="ghost" className="text-white/90! hover:text-white!">Đăng nhập</Button>
                            <Button size="sm" href="/dang-ky">Đăng ký miễn phí</Button>
                        </div>)}
                </div>
            </div>
        </nav>
    )
}