import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { db } from '../../../firebase'
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import firebase from "firebase/app"
import "firebase/firestore"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  adapter: FirebaseAdapter(db)
})