import { PrismaClient } from "./generated/prisma/client"

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ["query", "info", "warn", "error"], // 可选：启用日志记录
  errorFormat: "pretty", // 可选：格式化错误信息
})

export default prisma
