import { sessionMiddleware } from "@/lib/session-middleware"
import { Hono } from "hono"

const app = new Hono()
  .get("/tops", sessionMiddleware, async (c) => {
    const db = c.get("db")
    // 示例：调用 findMany 方法
    const documents = await db.document.findMany({
      where: {
        category_id: 15, // 替换为实际的 category_id
      },
      orderBy: {
        id: "desc",
      },
      take: 6, // 限制返回的文档数量
    })

    return c.json({ message: "Hello, world!", data: documents })
  })
  .get("/exhibitions", sessionMiddleware, async (c) => {
    const db = c.get("db")
    // 示例：调用 findMany 方法
    const documents = await db.document.findMany({
      where: {
        category_id: 17, // 替换为实际的 category_id
      },
      orderBy: {
        id: "desc",
      },
      take: 6, // 限制返回的文档数量
    })

    return c.json({ message: "Hello, world!", data: documents })
  })
  // 技术资料
  .get("/techs", sessionMiddleware, async (c) => {
    const db = c.get("db")
    // 示例：调用 findMany 方法
    const documents = await db.document.findMany({
      where: {
        category_id: 16, // 替换为实际的 category_id
      },
      orderBy: {
        id: "desc",
      },
      take: 6, // 限制返回的文档数量
    })

    return c.json({ message: "Hello, world!", data: documents })
  })

export default app
