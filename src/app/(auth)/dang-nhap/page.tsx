'use client';

import AuthLayout from '@/src/components/auth/AuthLayout';
import { GoogleButton } from '@/src/components/auth/GoogleButton';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <AuthLayout>
            <div className="slide-up flex flex-col p-10 flex-1">
                {/* Home link */}
                <Link href="/" className="flex items-center gap-1 text-xs mb-6 w-fit opacity-60">
                    <span>🏠</span> Trang chủ
                </Link>

                <h2 className="font-black mb-1 text-3xl">Đăng nhập</h2>
                <p className="text-sm mb-6 text-subtext">Bắt đầu hành trình của bạn ngay hôm nay</p>

                <GoogleButton />

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-xs text-black opacity-40">
                        hoặc đăng nhập với tài khoản mật khẩu
                    </span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                <form>
                    <Input
                        label="EMAIL"
                        placeholder="your@email.com"
                        required={true}
                        icon={Mail}
                        type="email"
                    />

                    <Input
                        label="MẬT KHẨU"
                        placeholder="******"
                        required={true}
                        icon={Lock}
                        type="password"
                    />

                    <Button type="submit" fullWidth variant="primary">
                        Đăng nhập
                    </Button>
                </form>

                {/* Register link */}
                <p className="text-center text-sm mt-6" style={{ color: 'rgba(0,0,0,0.5)' }}>
                    Chưa có tài khoản?{' '}
                    <Link
                        href="/dang-ky"
                        className="font-semibold text-link hover:text-link-hover transition"
                    >
                        Đăng ký ngay →
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
