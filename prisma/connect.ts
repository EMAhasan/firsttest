import { PrismaClient } from '@prisma/client';
declare global {
    var prisma:PrismaClient|undefined

}

const prisma=global.prisma||new PrismaClient()
const client =globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV ==='development') globalThis.prisma=client;
export default prisma;