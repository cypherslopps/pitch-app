import NextAuth, { Profile } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!(profile as Profile).email) return false; // Prevent sign-in for unverified emails
      console.log("successful. Check database connection");
      return true;
    },
  },
});

export { handler as GET, handler as POST };