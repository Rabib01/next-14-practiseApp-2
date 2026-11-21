{
  // import { NextResponse } from "next/server";
  // // This function can be marked `async` if using `await` inside
  // export function middleware(request) {
  //   console.log("Hello, I am inside middleware");
  //   //   return NextResponse.json({
  //   //     hello: "I am happy",
  //   //   });
  //   return NextResponse.next(); // now with this we can go to the rest of the app
  //   //   return NextResponse.redirect(new URL("/home", request.url));
  // }
  // // // See "Matching Paths" below to learn more
  // // export const config = {
  // //   matcher: "/about/:path*",
  // // };
}

{
  /**
   * NextResponse.json()
   * NextResponse.next()
   * NextRespose.redirect()
   * NextResponse.rewire() -> dorkar nai eto kisu bojar !
   */
}

{
  /**
   * without the export const config
   * it will fall into a loop
   * durr sala eto note kore iccha kortese na
   * the entire fucking internet is sitting on top of files made in text -> what the fuck !
   * middleware soja request er majkhane boshe sob kisu processing kore request response er access diye, kaaj taaj kore response diye dibe
   * for example auth,
   * request modify kore diye dibe
   *
   */
}

{
  /**
     * CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a website can request resources from a different origin (domain, protocol, or port).
       The server uses HTTP headers to specify which external origins are allowed to access its resources.
     */
}

import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL("/dashboard", request.url));
}

// // See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};

{
  /** middleware code for internationalization and different languages that I donot want to understand right now  !
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["en", "bn"];

function getLocale(request) {
    const acceptedLanguage =
        request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale); // en or bn
}

export function middleware(request) {
    // get the pathname from request url
    const pathname = request.nextUrl.pathname;

    const pathNameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}`) &&
            !pathname.startsWith(`/${locale}/`)
    );

    if (pathNameIsMissingLocale) {
        // detect user's preference & redirect with a locale with a path eg: /en/about
        const locale = getLocale(request);

        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next).*)"],
};
     */
}
