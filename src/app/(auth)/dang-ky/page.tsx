'use client';

import AuthLayout from '@/src/components/auth/AuthLayout';
import { GoogleButton } from '@/src/components/auth/GoogleButton';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <AuthLayout>
            <div className="slide-up flex flex-col p-10 flex-1">
                {/* Home link */}
                <Link href="/" className="flex items-center gap-1 text-xs mb-6 w-fit opacity-60">
                    <span>🏠</span> Trang chủ
                </Link>

                <h2 className="font-black mb-1 text-3xl">Tạo tài khoản</h2>
                <p className="text-sm mb-6 text-subtext">Bắt đầu hành trình của bạn ngay hôm nay</p>

                <GoogleButton />

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-xs text-black opacity-40">hoặc đăng ký với email</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                <form>
                    <Input
                        label="HỌ VÀ TÊN"
                        placeholder="Nguyễn Văn A"
                        required={true}
                        icon={User}
                        type="text"
                    />

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

                    <Input
                        label="XÁC NHẬN MẬT KHẨU"
                        placeholder="******"
                        required={true}
                        icon={Lock}
                        type="password"
                    />

                    <Button type="submit" fullWidth variant="primary">
                        Đăng ký
                    </Button>
                </form>

                {/* Register link */}
                <p className="text-center text-sm mt-6" style={{ color: 'rgba(0,0,0,0.5)' }}>
                    Đã có tài khoản?{' '}
                    <Link
                        href="/dang-nhap"
                        className="font-semibold text-link hover:text-link-hover transition"
                    >
                        Đăng nhập ngay →
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default RegisterPage;
