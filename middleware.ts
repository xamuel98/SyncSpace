import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkStaticAssets } from "@/middleware-utils/checkStaticAssets";
import { redirectUnauthenticated } from "@/middleware-utils/redirectUnauthenticated";
import { PAGE_ROUTES } from "./utils/constants";

export function middleware(request: NextRequest) {
	// List of paths that don't require authentication
	const publicPaths = [
		"/",
		PAGE_ROUTES.LOGIN_ROUTE,
		PAGE_ROUTES.REGISTER_ROUTE,
		PAGE_ROUTES.FORGOT_PASSWORD_ROUTE,
		PAGE_ROUTES.FORGOT_PASSWORD_EMAIL_ROUTE,
		PAGE_ROUTES.EMAIL_VERIFICATION_ROUTE,
		PAGE_ROUTES.RESET_PASSWORD_ROUTE,
        '/verify',
		'/verify-forgot-password',
	];

	/// Bypass middleware for static assets or API calls
	if (checkStaticAssets(request)) {
		return NextResponse.next();
	}

	// Handle redirection for unauthenticated users
	return redirectUnauthenticated(request, publicPaths);
}
