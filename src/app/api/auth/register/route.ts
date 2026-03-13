import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { prisma } from "@/src/lib/db";
import { sendVerificationEmail } from "@/src/lib/email";
import { registerSchema } from "@/src/lib/validations";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = registerSchema.parse(body);

    // Kiểm tra email đã tồn tại
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      // Nếu đã có account OAuth thì thông báo cụ thể
      const oauthAccount = await prisma.account.findFirst({
        where: { userId: existing.id },
      });
      if (oauthAccount) {
        return NextResponse.json(
          {
            error: `Email này đã được liên kết với tài khoản ${oauthAccount.provider}. Vui lòng đăng nhập bằng ${oauthAccount.provider}.`,
          },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: "Email này đã được sử dụng" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    // Tạo verification token (24h)
    const token = crypto.randomBytes(32).toString("hex");
    await prisma.verificationToken.create({
      data: {
        token,
        userId: user.id,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });

    await sendVerificationEmail(email);

    return NextResponse.json(
      {
        message:
          "Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Lỗi server, vui lòng thử lại" },
      { status: 500 }
    );
  }
}
