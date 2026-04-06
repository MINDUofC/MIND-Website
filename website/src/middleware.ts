import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const METACLONED_CHAT_URL =
  "https://www.metacloned.com/chat/partner/ef7d3023-17db-451f-aa7f-2c3780141379";
const METACLONED_ORIGIN = "https://www.metacloned.com";

const PROXY_PATHS = ["/auth", "/characters", "/chat", "/api"];

export const config = {
  matcher: [
    "/chat-embed",
    "/auth",
    "/auth/:path*",
    "/characters",
    "/characters/:path*",
    "/chat",
    "/chat/:path*",
    "/api/:path*",
  ],
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  if (PROXY_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    try {
      const url = new URL(pathname + search, METACLONED_ORIGIN);
      const headers = new Headers(request.headers);
      headers.set("host", new URL(METACLONED_ORIGIN).host);
      const res = await fetch(url.toString(), {
        method: request.method,
        headers,
        body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
      });
      const resHeaders = new Headers(res.headers);
      resHeaders.delete("content-security-policy");
      resHeaders.delete("x-frame-options");
      return new NextResponse(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers: resHeaders,
      });
    } catch (e) {
      return new NextResponse("Proxy error", { status: 502 });
    }
  }

  if (pathname !== "/chat-embed") {
    return NextResponse.next();
  }

  try {
    const res = await fetch(METACLONED_CHAT_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
    });

    if (!res.ok) {
      const fallback = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Chat</title></head>
<body style="font-family:sans-serif;padding:2rem;text-align:center;background:#f5f5f5;">
<p style="color:#333;">Chat is temporarily unavailable.</p>
</body></html>`;
      return new NextResponse(fallback, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const contentType =
      res.headers.get("Content-Type") ?? "text/html; charset=utf-8";
    let body = await res.text();

    body = body.replace(
      /=(["'])\/(?!\/)/g,
      `=$1${METACLONED_ORIGIN}/`
    );
    body = body.replace(
      /url\((["']?)\/(?!\/)/g,
      `url($1${METACLONED_ORIGIN}/`
    );

    if (!body.includes("<base ")) {
      body = body.replace(
        /<head(\s[^>]*)?>/i,
        (m) => m + `<base href="${METACLONED_ORIGIN}/">`
      );
    }

    const partnerPath = "/chat/partner/ef7d3023-17db-451f-aa7f-2c3780141379";
    const embedScript = `<script>(function(){
      try {
        if (typeof window === "undefined") return;
        var path = window.location.pathname;
        if (path === "/chat-embed" || path.indexOf("/chat-embed") === 0) {
          var search = window.location.search || "";
          window.history.replaceState(null, "", "${partnerPath}" + search);
        }
      } catch (e) {}
    })();</script>`;
    if (!body.includes(partnerPath)) {
      body = body.replace(/<head(\s[^>]*)?>/i, (m) => m + embedScript);
    }

    return new NextResponse(body, {
      status: res.status,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "private, no-cache",
        "Content-Security-Policy": "frame-ancestors *",
      },
    });
  } catch (e) {
    return new NextResponse("Proxy error", { status: 502 });
  }
}
