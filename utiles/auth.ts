
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions, User, getServerSession } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from '@/prisma/connect'

/* declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
} */


export const authOptions: NextAuthOptions = {
   
  
  
  secret: "DEIN_GENERIERTES_GEHEIMNIS_HIER",
  adapter: PrismaAdapter(prisma),
    providers: [
      GitHubProvider({
        // clientId: process.env.GOOGLE_ID as string,
        // clientSecret: process.env.GOOGLE_SECRET as string,
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
      GoogleProvider({
        // clientId: process.env.GOOGLE_ID as string,
        // clientSecret: process.env.GOOGLE_SECRET as string,
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "enter user name " },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
         
          const specificUser=await prisma.user.findUnique({
      where: {
        email: credentials?.username, // Replace with the actual filter criteria
      },
    });
    console.log('user :',specificUser);
  


    const user = { id:'specificUser', name: specificUser?.name, email: specificUser?.email ,password:'123456'}
          if (user && user.password===credentials?.password) {
            // Any object returned will be saved in `user` property of the JWT
            return Promise.resolve<User | null>(user);
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      })
      
    ],
   
  
    session: {
      strategy: 'jwt',
    }, 


  callbacks:{
    async signIn({user,account,profile,email,credentials}){

      console.log('signin props : ',user,account,profile,email,credentials)
      const isAllowtoSignin=true
      if(isAllowtoSignin)
      {
        return true
      }else {
        return false
      }
      


    },

    async jwt({token,account,profile})
    {
      if(account){

      }
      return token
    }
  }




  };
  export const getAuthSession = () => getServerSession(authOptions);