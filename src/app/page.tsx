"use client"
import { signOut } from 'next-auth/react';
import Button from '../components/Button';

export default function Home() {
    return (
        <div>
            <Button href="/dang-nhap">Đăng nhập</Button>
            <button
                onClick={() => signOut()}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 text-sm font-medium transition-all text-left"
            >
                Đăng xuất
            </button>
        </div>
    );
}
