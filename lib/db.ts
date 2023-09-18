import { PrismaClient } from "@prisma/client";

//esto hace que no se inicien tantos prismaClient

declare global {
    var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma =db