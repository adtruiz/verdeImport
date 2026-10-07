import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en", "pt"];
const defaultLocale = "en";

function isValidLanguageTag(tag: string): boolean {
  if (!tag || tag === "*") return false;
  try {
    Intl.getCanonicalLocales(tag);
    return true;
  } catch {
    return false;
  }
}

function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  try {
    const negotiatedLanguages = new Negotiator({ headers }).languages();
    const validLanguages = negotiatedLanguages.filter(isValidLanguageTag);

    if (validLanguages.length === 0) {
      return defaultLocale;
    }

    return match(validLanguages, locales, defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.svg|og-image.svg|og-image.png|api).*)"],
};
