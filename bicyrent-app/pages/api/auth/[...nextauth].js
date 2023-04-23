import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.BICYRENT_GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.BICYRENT_GOOGLE_OAUTH_CLIENT_SECRET
    })
  ]
}

export default NextAuth(authOptions)
