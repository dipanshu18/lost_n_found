export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/create-post",
    "/dashboard",
    "/dashboard/:path*",
    "/found-item-post",
    "/profile",
    "/responses",
    "/update-profile/:path*",
    "/your-responses",
  ],
};
