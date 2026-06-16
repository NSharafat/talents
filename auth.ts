import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID!,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET!,
    }),
  ],
});

export { handler };
