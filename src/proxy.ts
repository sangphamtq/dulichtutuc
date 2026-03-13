import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

const PUBLIC_ROUTES = [
  "/",
  "/dang-nhap",
  "/dang-ky",
  "/verify-email"
];

const AUTH_ROUTES = ["/dang-nhap", "/dang-ky"];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  const isAuthRoute = AUTH_ROUTES.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  // nếu đã login mà vào login/register -> redirect dashboard
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // nếu chưa login mà vào private route -> redirect login
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/dang-nhap", nextUrl));
  }

  const isAdmin = req.auth?.user?.role === "ADMIN"

  if (!isAdmin && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Bỏ qua
     * - api
     * - _next
     * - static files
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};