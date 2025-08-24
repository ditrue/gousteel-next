import "server-only";

import { createMiddleware } from "hono/factory";
import prisma from "./prisma";

type AdditionalContext = {
  Variables: {
    db: typeof prisma;
  };
};

export const miniMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    c.set("db", prisma);
    await next();
  }
);
