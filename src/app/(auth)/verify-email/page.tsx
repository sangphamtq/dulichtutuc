import Alert from "@/src/components/Alert";
import AuthLayout from "@/src/components/auth/AuthLayout";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = { title: "Xác thực Email" };

const ERROR_MESSAGES: Record<string, { title: string; desc: string; icon: string }> = {
  missing_token: {
    title: "Link không hợp lệ",
    desc: "Link xác thực không đúng định dạng. Vui lòng đăng ký lại.",
    icon: "🔗",
  },
  invalid_token: {
    title: "Link không tồn tại",
    desc: "Link xác thực này không tồn tại hoặc đã được sử dụng.",
    icon: "❌",
  },
  expired_token: {
    title: "Link đã hết hạn",
    desc: "Link xác thực đã hết hạn (sau 24 giờ). Vui lòng đăng ký lại để nhận link mới.",
    icon: "⏰",
  },
  server_error: {
    title: "Lỗi hệ thống",
    desc: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
    icon: "⚠️",
  },
};

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const errorInfo = error ? ERROR_MESSAGES[error] : null;

  if (errorInfo) {
    return (
      <AuthLayout>
        <div className="right-panel flex flex-col justify-center px-10 py-10" style={{ flex: 1 }}>
          <div className="text-center space-y-5 py-4">
            <div className="w-20 h-20 bg-red-500/10 border-2 border-red-500/20 rounded-full flex items-center justify-center text-4xl mx-auto">
              {errorInfo.icon}
            </div>
            <div>
              <h2 className="font-display text-2xl mb-2">
                {errorInfo.title}
              </h2>
              <Alert>{errorInfo.desc}</Alert>
            </div>
            <Link
              href="/dang-ky"
              className="font-semibold"
            >
              Đăng ký lại →
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="right-panel flex flex-col justify-center px-10 py-10" style={{ flex: 1 }}>
        <div className="text-center space-y-5 py-4">
          <div className="w-20 h-20 bg-brand-500/10 border-2 border-brand-500/20 rounded-full flex items-center justify-center text-4xl mx-auto">
            📬
          </div>
          <div>
            <h2 className="font-display text-2xl text-white mb-2">
              Xác thực Email
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Đang xử lý xác thực của bạn...
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
