import { NextResponse } from "next/server";

const METACLONED_CHAT_URL =
  "https://www.metacloned.com/chat/partner/ef7d3023-17db-451f-aa7f-2c3780141379";
const METACLONED_ORIGIN = "https://www.metacloned.com";

export const dynamic = "force-dynamic";

export async function GET() {
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
<p style="color:#333;">Chat couldn't be loaded in this window.</p>
<a href="${METACLONED_CHAT_URL}" target="_blank" rel="noopener" style="color:#002960;font-weight:600;">Open chat in new tab</a>
</body></html>`;
      return new NextResponse(fallback, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const contentType = res.headers.get("Content-Type") ?? "text/html; charset=utf-8";
    let body = await res.text();

    body = body.replace(
      /=(["'])\/(?!\/)/g,
      `=$1${METACLONED_ORIGIN}/`
    );
    body = body.replace(
      /url\((["']?)\/(?!\/)/g,
      `url($1${METACLONED_ORIGIN}/`
    );

    return new NextResponse(body, {
      status: res.status,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "private, no-cache",
        "Content-Security-Policy": "frame-ancestors *",
      },
    });
  } catch (e) {
    console.error("chat-embed proxy error:", e);
    return new NextResponse("Proxy error", { status: 502 });
  }
}
