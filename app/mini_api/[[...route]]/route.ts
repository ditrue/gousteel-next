import { Hono } from "hono";
import { handle } from "hono/vercel";
import home from "@/features/mini/custom-shop/server/route";

const app = new Hono().basePath("/mini_api");
const routes = app.route("/shop-customs", home);

// 定义一个任意请求的handle
export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const PUT = handle(app);
export type AppType = typeof routes;
