import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
const userClient = new PrismaClient().user;

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = await userClient.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (user) {
          const passwordMatch = await compare(
            credentials?.password || "",
            user.password
          );

          if (passwordMatch) {
            return {
              id: user.id,
              email: user.email,
            };
          } else {
            throw new Error("Enter password is invalid...");
          }
        } else {
          throw new Error(
            "User doesn't exist with this credentials! Please create one..."
          );
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
