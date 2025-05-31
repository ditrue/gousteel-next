// src/app/api/[[...route]]/route.ts

import { Hono } from "hono"
import { handle } from "hono/vercel"
import pipe from "@/features/pipe/server/route"
import pipecustomShop from "@/features/customShop/server/route"

const app = new Hono().basePath("/api")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route("/pipes", pipe).route("/custom-shops", pipecustomShop)

// 定义一个任意请求的handle
export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
export const PUT = handle(app)
export type AppType = typeof routes
