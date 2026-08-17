import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  const isLocalhost = hostname === "localhost" || hostname.startsWith("127.0.0.1") || hostname.startsWith("0.0.0.0");
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isSecure = forwardedProto === "https" || url.protocol === "https:";

  if (!isLocalhost && !hostname.startsWith("www.")) {
    url.hostname = "www.kwas.tech";
    return NextResponse.redirect(url.toString(), 308);
  }

  if (!isLocalhost && !isSecure) {
    url.protocol = "https:";
    url.hostname = "www.kwas.tech";
    return NextResponse.redirect(url.toString(), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|favicon.ico|manifest.json).*)",
  ],
};
