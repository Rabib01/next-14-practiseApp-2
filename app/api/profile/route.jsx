import { headers } from "next/headers";

// working with request headers - the part prior to coookies
export async function GET(request) {
  //   const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  return new Response("Profile Header");
}

// working with cookies - mainly getting and setting of cookie
export async function GET(request) {
  //   const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  return new Response("Profile Header");
}
