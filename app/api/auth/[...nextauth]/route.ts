import NextAuth from 'next-auth';
import { authOptions } from "@/utiles/auth";

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}