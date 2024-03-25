import { authMiddleware } from "@clerk/nextjs";

// This middleware protects routes using Clerk authentication.
// You can customize the configuration as needed.
export default authMiddleware({});

// Configuration for the middleware
export const config = {
  // Matcher defines which routes should be protected.
  // Here, it's set to protect all routes except those matching specific patterns.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
