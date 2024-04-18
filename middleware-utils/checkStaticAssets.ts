import { NextRequest } from "next/server";

// Function to check if the request is for static assets or API calls and bypass the middleware
export function checkStaticAssets(request: NextRequest): boolean {
    const { pathname } = request.nextUrl;

    return pathname.startsWith('/images/') || pathname.startsWith('/_next/static/') || pathname.startsWith('/static/') || pathname.startsWith('/api/')
}