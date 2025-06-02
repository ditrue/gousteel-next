import { zValidator } from "@hono/zod-validator"
import { z } from "zod"
import { sessionMiddleware } from "@/lib/session-middleware"
import { Hono } from "hono"

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
    zValidator(
      "query",
      z.object({
        page: z.string().default("1"),
        pageSize: z.string().default("10"),
      })
    ),
    async (c) => {
      const db = c.get("db")

      const { page, pageSize } = c.req.valid("query")
      const pageNum = Number(page)
      const pageSizeNum = Number(pageSize)

      // 计算跳过的记录数
      const skip = (pageNum - 1) * pageSizeNum

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
        take: pageSizeNum,
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
          page: pageNum,
          pageSize: pageSizeNum,
        },
      })
    }
  )
  .get("/:customShopID", sessionMiddleware, (c) => {
    const customShopID = Number(c.req.param("customShopID"))

    const shopCustom = c.get("db").shopCustom.findFirst({
      where: {
        id: customShopID,
      },
      include: {
        user: true,
        shop: true,
      },
    })
    return c.json({ message: "Hello, world!", data: shopCustom })
  })

export default app
