import { PrismaClient } from "@prisma/client";
import express from "express";

/* express.Request, express.Response custom types */
declare global {
  namespace Express {
    export interface Request {
      prisma: PrismaClient;
      query: any;
      body: Record<string, any>;
      params: any;
      // admin?: string;
    }
    export interface Response {
      result: boolean;
      data?: any;
    }
  }
}
