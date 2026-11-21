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
