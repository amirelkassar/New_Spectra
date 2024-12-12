import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

import { routing } from '@/i18n/routing';
import { decodeToken } from '@/lib/token';

import ROUTES from './routes';

const intlMiddleware = createMiddleware(routing);

const AUTH_ROUTES = Object.entries(ROUTES.AUTH).map(
  // eslint-disable-next-line no-unused-vars
  ([_, value]) => value
);

// const PUBLIC_ROUTES = Object.entries(ROUTES.ROOT).map(
//   // eslint-disable-next-line no-unused-vars
//   ([_, value]) => value
// );

const CLIENT_ROUTES = ['/client', '/video/client'];
const ADMIN_ROUTES = '/admin';
const DOCTOR_ROUTES = ['/doctor', '/video/doctor'];

export default async function middleware(request) {
  const { nextUrl } = request;

  // Extract pathname and remove the language prefix (e.g., 'ar' or 'en')
  const pathname = nextUrl.pathname.replace(/^\/(ar|en)(\/|$)/, '/');

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isClientRoute =
    pathname.startsWith(CLIENT_ROUTES[0]) ||
    pathname.startsWith(CLIENT_ROUTES[1]);
  const isAdminRoute = pathname.startsWith(ADMIN_ROUTES);
  const isDoctorRoute =
    pathname.startsWith(DOCTOR_ROUTES[0]) ||
    pathname.startsWith(DOCTOR_ROUTES[1]);

  // get the token from the cookie
  const token = request.cookies.get('accessToken')?.value;

  if (
    !token &&
    !isAuthRoute &&
    (isClientRoute || isAdminRoute || isDoctorRoute)
  ) {
    return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, nextUrl));
  }

  const decoded = await decodeToken(token);

  // if decoded fail, delete cookies and return
  if (!decoded) {
    const response = NextResponse.next();
    if (token) {
      response.cookies.delete('accessToken');
    }
    return response;
  }

  const { role } = decoded;

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL(ROUTES.HOME, nextUrl));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // EXCLUDE STATIC FILES
    '/', // MATCH HOME PAGE
    '/(api|trpc)(.*)', // MATCH API ROUTES
    '/(ar|en)/:path*', // MATCH ROUTES WITH LOCALES
  ],
};

/**
 * Function to check if a route is public
 * @param {string} path - The current path without locale
 * @returns {boolean} - True if the path matches a public route
 */
// function getIsPublicRoute(path) {
//   return PUBLIC_ROUTES.some((route) => {
//     // Convert route to regex: Replace ":param" with a dynamic pattern
//     const routeRegex = new RegExp(
//       '^' +
//         route
//           .replace(/:[^/]+/g, '([^/]+)') // Replace ":id" with "([^/]+)"
//           .replace(/\//g, '\\/') + // Escape "/"
//         '$'
//     );
//     return routeRegex.test(path);
//   });
// }
