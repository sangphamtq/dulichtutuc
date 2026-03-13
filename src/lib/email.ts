const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export async function sendVerificationEmail(
  token: string,
) {
  const verifyUrl = `${appUrl}/api/auth/verify-email?token=${token}`;
  console.log(verifyUrl);
  return;
}