import "server-only"

import { createMiddleware } from "hono/factory"
import prisma from "./prisma"

type AdditionalContext = {
  Variables: {
    db: typeof prisma
  }
}

export const sessionMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    // TOTO: jwt鉴权
    try {
      c.set("db", prisma)
    } catch (error) {
      console.log(error)
      return c.json({ error: "Unauthorized" }, 401)
    }

    await next()
  }
)
