import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDatabase } from "@/utils/db";
import { verifyPassword } from "@/utils/auth";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "id", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req): Promise<any> {
        const client = await connectDatabase();
        const user = await client
          .db(process.env.DB_NAME)
          .collection("users")
          .findOne({ id: credentials?.id });

        if (!user) {
          throw new Error("Invalid user information!");
        }

        const isValid = await verifyPassword(
          credentials?.password as string,
          user.password
        );

        if (!isValid) {
          throw new Error("Wrong password!");
        }

        client.close();

        return { user: user.id };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
