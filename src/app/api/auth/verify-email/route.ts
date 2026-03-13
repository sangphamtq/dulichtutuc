import { prisma } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  if (!token) {
    return NextResponse.redirect(
      `${appUrl}/verify-email?error=missing_token`
    );
  }

  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!verificationToken) {
      return NextResponse.redirect(
        `${appUrl}/verify-email?error=invalid_token`
      );
    }

    if (verificationToken.expires < new Date()) {
      await prisma.verificationToken.delete({ where: { token } });
      return NextResponse.redirect(
        `${appUrl}/verify-email?error=expired_token`
      );
    }

    if (verificationToken.user.emailVerified) {
      return NextResponse.redirect(
        `${appUrl}/dang-nhap?message=already_verified`
      );
    }

    // Xác thực email
    await prisma.$transaction([
      prisma.user.update({
        where: { id: verificationToken.userId },
        data: { emailVerified: new Date() },
      }),
      prisma.verificationToken.delete({ where: { token } }),
    ]);


    return NextResponse.redirect(`${appUrl}/dang-nhap?verified=true`);
  } catch (error) {
    return NextResponse.redirect(
      `${appUrl}/verify-email?error=server_error`
    );
  }
}
