import { sessionMiddleware } from "@/lib/session-middleware"
import { Hono } from "hono"

const app = new Hono().get("/pipe-recommends", sessionMiddleware, async (c) => {
  const db = c.get("db")
  // 示例：调用 findMany 方法
  // LEFT JOIN users as u ON u.id = shop_customs.user_id
  // where u.is_custom_vip = ?
  // 使用 Prisma 的查询方法实现 LEFT JOIN 和 WHERE 条件
  const shopCustoms = await db.shopCustom.findMany({
    orderBy: {
      shop: {
        order: "desc",
      },
    },
    take: 4,
    include: {
      user: true,
      shop: true,
    },
    where: {
      user: {
        is_custom_vip: true,
      },
      is_tj: true,
    },
  })

  return c.json({ message: "Hello, world!", data: shopCustoms })
})
export default app
