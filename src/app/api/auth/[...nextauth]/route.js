import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {
                label: "Email",
                type: "email",
                required: true,
                placeholder: "Your Email"
            },
            password: {
                label: "Password",
                type: "password",
                required: true,
                placeholder: "Your Password"
            }
        },
        async authorize(credentials) {
            const { email, password } = credentials;
            if (!credentials) {
                return null;
            }
            if (email) {
                const currentUser = users.find((user) => user.email === email)
                if (currentUser) {
                    if (currentUser.password === password) {
                        return currentUser;
                    }
                }
            }
            return null;
        }
    })]
})

export { handler as GET, handler as POST }