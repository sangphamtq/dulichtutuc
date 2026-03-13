'use client';

import Alert from '@/src/components/Alert';
import AuthLayout from '@/src/components/auth/AuthLayout';
import { GoogleButton } from '@/src/components/auth/GoogleButton';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import { LoginInput, loginSchema } from '@/src/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const router = useRouter();
    const [serverError, setServerError] = useState("");
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") ?? "/";

    const verified = searchParams.get("verified");
    const message = searchParams.get("message");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginInput) => {
        setServerError("");
        const result = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });
        console.log(result);
        if (result?.error) {
            const code = decodeURIComponent(result.error);

            const errorMap: Record<string, string> = {
                MISSING_CREDENTIALS: "Vui lòng nhập email và mật khẩu",
                USER_NOT_FOUND: "Tài khoản không tồn tại",
                EMAIL_NOT_VERIFIED: "Vui lòng xác thực email trước",
                INVALID_PASSWORD: "Mật khẩu không chính xác",
                GOOGLE_ACCOUNT: "Vui lòng đăng nhập bằng Google",
            };

            setServerError(errorMap[code] || "Đăng nhập thất bại");
            return;
        }

        router.push(callbackUrl);
        router.refresh();
    };

    return (
        <AuthLayout>
            <div className="slide-up flex flex-col p-10 flex-1">
                {/* Home link */}
                <Link href="/" className="flex items-center gap-1 text-xs mb-6 w-fit opacity-60">
                    <span>🏠</span> Trang chủ
                </Link>

                <h2 className="font-black mb-1 text-3xl">Đăng nhập</h2>
                <p className="text-sm mb-6 text-subtext">Bắt đầu hành trình của bạn ngay hôm nay</p>

                {verified === "true" && (
                    <div className="mb-4">
                        <Alert variant="success">
                            Email của bạn đã được xác thực. Bạn có thể đăng nhập ngay bây giờ.
                        </Alert>
                    </div>
                )}

                {message === "already_verified" && (
                    <div className="mb-4">
                        <Alert variant="info">
                            Email của bạn đã được xác thực trước đó. Vui lòng đăng nhập.
                        </Alert>
                    </div>
                )}

                <GoogleButton />

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-xs text-black opacity-40">
                        hoặc đăng nhập với tài khoản mật khẩu
                    </span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
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

                    <Button type="submit" fullWidth variant="primary" disabled={isSubmitting} className='mb-4'>
                        {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
                    </Button>

                    {/* Error message */}
                    {serverError && (
                        <Alert>{serverError}</Alert>
                    )}
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
