import { zValidator } from "@hono/zod-validator"
import { sessionMiddleware } from "@/lib/session-middleware"
import { Hono } from "hono"
import { updateCustomShopSchema } from "../schemas"

const app = new Hono()
  .get("/pipe-recommends", sessionMiddleware, async (c) => {
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
  .get(
    "/admin-list",
    sessionMiddleware,
    zValidator("form", updateCustomShopSchema),
    async (c) => {
      const db = c.get("db")

      // 获取查询参数，设置默认值
      const page = parseInt(c.req.query("page") || "1")
      const pageSize = parseInt(c.req.query("pageSize") || "10")

      // 计算跳过的记录数
      const skip = (page - 1) * pageSize

      const shopCustoms = await db.shopCustom.findMany({
        where: {
          user: {
            is_custom_vip: true,
          },
        },
        include: {
          user: true,
          shop: true,
        },
        orderBy: {
          shop: {
            order: "desc",
          },
        },
        skip: skip,
        take: pageSize,
      })

      const total = await db.shopCustom.count({
        where: {
          user: {
            is_custom_vip: true,
          },
        },
      })

      return c.json({
        message: "Hello, world!",
        data: {
          list: shopCustoms,
          total: total,
        },
      })
    }
  )

export default app
