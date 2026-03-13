'use client';

import Alert from '@/src/components/Alert';
import AuthLayout from '@/src/components/auth/AuthLayout';
import { GoogleButton } from '@/src/components/auth/GoogleButton';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { RegisterInput, registerSchema } from '@/src/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const [serverError, setServerError] = useState("");
    const [successEmail, setSuccessEmail] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterInput) => {
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            const result = await res.json();

            if (!res.ok) {
                setServerError(result.error ?? "Đã xảy ra lỗi");
                return;
            }

            setSuccessEmail(data.email);
        } catch (error) {
            setServerError("Không thể kết nối đến server. Vui lòng thử lại.");
        }
    }

    return (
        <AuthLayout>
            <div className="slide-up flex flex-col p-10 flex-1">
                {successEmail ? (
                    <SuccessView email={successEmail} />
                ) : (
                    <>
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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                label="HỌ VÀ TÊN"
                                placeholder="Nguyễn Văn A"
                                required={true}
                                icon={User}
                                type="text"
                                error={errors.name?.message}
                                {...register("name")}
                            />

                            <Input
                                label="EMAIL"
                                placeholder="your@email.com"
                                required={true}
                                icon={Mail}
                                type="email"
                                error={errors.email?.message}
                                {...register("email")}
                            />

                            <Input
                                label="MẬT KHẨU"
                                placeholder="******"
                                required={true}
                                icon={Lock}
                                type="password"
                                error={errors.password?.message}
                                {...register("password")}
                            />

                            <Input
                                label="XÁC NHẬN MẬT KHẨU"
                                placeholder="******"
                                required={true}
                                icon={Lock}
                                type="password"
                                error={errors.confirmPassword?.message}
                                {...register("confirmPassword")}
                            />

                            <Button type="submit" fullWidth variant="primary" disabled={isSubmitting} className='mb-4'>
                                {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
                            </Button>

                            {/* Error message */}
                            {serverError && (
                                <Alert>{serverError}</Alert>
                            )}
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
                    </>
                )}

            </div>
        </AuthLayout>
    );
};

export default RegisterPage;

function SuccessView({ email }: { email: string }) {
    return (
        <div className="text-center space-y-5 py-4">
            <div className="w-20 h-20 bg-green-500/10 border-2 border-green-500/20 rounded-full flex items-center justify-center text-4xl mx-auto animate-bounce">
                ✉️
            </div>
            <div>
                <h2 className="font-display text-2xl mb-2">
                    Kiểm tra email của bạn!
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Chúng tôi đã gửi link xác thực đến
                </p>
                <div className="inline-block bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded-lg px-4 py-2 text-sm font-medium mt-2">
                    {email}
                </div>
            </div>
            <Alert variant="warning">
                Không thấy email? Hãy kiểm tra thư mục{" "}
                <strong>Spam</strong> hoặc <strong>Promotions</strong>.
                Link có hiệu lực trong <strong>24 giờ</strong>.
            </Alert>
            <Link
                href="/dang-nhap"
                className="font-semibold"
            >
                Đăng nhập ngay →
            </Link>
        </div>
    );
}