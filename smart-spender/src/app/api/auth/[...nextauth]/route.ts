import "dotenv/config";
import NextAuth, { DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "../../../utils/database";
import User from "../../../models/user";
import type { NextAuthOptions, Session } from "next-auth";

// Extend the session user type to include custom fields
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      mobile?: string;
      wishlist?: string[];
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "916285265392-dgoaht54qhlmvvu53ijlf03hm51adg3e.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  session: {
    strategy: "jwt", // Store session in a JWT token
    maxAge: 24 * 60 * 60, // 1 day
  },
  secret: "GTgeuwgdauihd",

  callbacks: {
    async session({ session }) {
      console.log("Session Callback Triggered:", session);

      if (!session.user?.email) {
        console.warn("Session user email is missing!");
        return session;
      }

      try {
        await connectToDB();
        const sessionUser = await User.findOne({ email: session.user.email });

        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
          session.user.name = sessionUser.name;
          session.user.email = sessionUser.email;
          session.user.wishlist = sessionUser.wishlist || [];
          console.log("Session Updated:", session);
        }
      } catch (error) {
        console.error("Error fetching session user:", error);
      }

      return session;
    },

    async signIn({ profile }) {
      if (!profile?.email) return false;

      try {
        await connectToDB();

        let userExists = await User.findOne({ email: profile.email });
        console.log("User Exists:", userExists);

        if (!userExists) {
          console.log("Creating a new user...");

          userExists = await User.create({
            email: profile.email,
            name: profile.name,
            wishlist: [],
          });

          console.log("New User Created:", userExists);
        }

        console.log("Sign-in successful!");
        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
