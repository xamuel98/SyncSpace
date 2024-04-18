import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server";

export function redirectUnauthenticated(request: NextRequest, publicPaths: string[]): NextResponse {
    const { pathname } = request.nextUrl;

    // Assuming you store the user's auth status in a cookie named 'auth'
    const authCookie = request.cookies.get('token');

    // If the user is not authenticated and is trying to access a protected route
    if (!authCookie && !publicPaths.includes(pathname)) {
        // Redirect them to the login page
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // For all other cases, return undefined which continues the request
    return NextResponse.next();;
}