import { PrismaClient } from "@prisma/client";

/**
 * Exporting prisma client
 */
const prismaClient: PrismaClient = new PrismaClient({
  errorFormat: "minimal", // pretty, colorless, minimal
});

export default prismaClient;
