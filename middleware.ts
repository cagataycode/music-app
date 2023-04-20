import { NextResponse, NextRequest } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];
export function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get("MUSICAPP_ACCESS_TOKEN");

    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }
}
