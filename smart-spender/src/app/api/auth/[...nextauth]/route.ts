"use server";

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
            wishlist?: string;
        } & DefaultSession["user"];
    }
}

const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: "916285265392-dgoaht54qhlmvvu53ijlf03hm51adg3e.apps.googleusercontent.com", // Use fallback to prevent undefined errors
            clientSecret: "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",
        }),
    ],
    callbacks: {
        async session({ session }) {
            if (!session.user?.email) return session;

            try {
                await connectToDB();
                const sessionUser = await User.findOne({ email: session.user.email });

                if (sessionUser) {
                    session.user.id = sessionUser._id.toString();
                    session.user.mobile = sessionUser.mobile;
                    session.user.wishlist = sessionUser.wishlist;
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

                const userExists = await User.findOne({ email: profile.email });

                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        name: profile.name,
                        mobile: "", // Mobile is required but missing from Google auth
                        wishlist: null,
                    });
                }

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
