import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

import { routing } from '@/i18n/routing';
import { decodeToken } from '@/lib/token';
import ROUTES from '@/routes';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request) {
  const response = intlMiddleware(request);
  const locale = response.headers.get(
    'x-middleware-request-x-next-intl-locale'
  );

  const { nextUrl } = request;

  const { isAdminRoute, isAuthRoute, isClientRoute, isDoctorRoute } =
    getRoutesStatus(nextUrl.pathname);

  // get the token from the cookie
  const token = request.cookies.get('accessToken')?.value;

  if (
    !token &&
    !isAuthRoute &&
    (isClientRoute || isAdminRoute || isDoctorRoute)
  ) {
    if (!locale) return response;
    const loginUrl = new URL(
      `/${locale}${ROUTES.AUTH.LOGIN}`,
      nextUrl.origin
    );
    return NextResponse.redirect(loginUrl);
  }

  const decoded = await decodeToken(token);

  // if decoded fail, delete cookies and return
  if (!decoded) {
    if (token) {
      response.cookies.delete('accessToken');
    }
    return response;
  }

  const { role } = decoded;

  if (token && isAuthRoute) {
    if (!locale) return response;
    const homeUrl = new URL(
      `/${locale}${ROUTES.HOME}`,
      nextUrl.origin
    );
    return NextResponse.redirect(homeUrl);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)', // EXCLUDE STATIC FILES
    '/', // MATCH HOME PAGE
    '/(api|trpc)(.*)', // MATCH API ROUTES
    '/(ar|en)/:path*', // MATCH ROUTES WITH LOCALES
  ],
};

const AUTH_ROUTES = Object.entries(ROUTES.AUTH).map(
  // eslint-disable-next-line no-unused-vars
  ([_, value]) => value
);
const CLIENT_ROUTES = ['/client', '/video/client'];
const ADMIN_ROUTES = '/admin';
const DOCTOR_ROUTES = ['/doctor', '/video/doctor'];

function getRoutesStatus(path) {
  if (!path) return;

  const pathname = path.replace(/^\/(ar|en)(\/|$)/, '/');

  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const isClientRoute =
    pathname.startsWith(CLIENT_ROUTES[0]) ||
    pathname.startsWith(CLIENT_ROUTES[1]);
  const isAdminRoute = pathname.startsWith(ADMIN_ROUTES);
  const isDoctorRoute =
    pathname.startsWith(DOCTOR_ROUTES[0]) ||
    pathname.startsWith(DOCTOR_ROUTES[1]);

  return {
    isAuthRoute,
    isClientRoute,
    isAdminRoute,
    isDoctorRoute,
  };
}
