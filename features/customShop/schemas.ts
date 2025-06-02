import { z } from "zod"
export const customAdminListSchema = z.object({
  page: z.number().default(1),
  pageSize: z.number().default(10),
})

export const updateCustomShopSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  description: z.string().trim().min(1, "Required"),
  prefix: z.string().trim().min(1, "Required"),
  host: z.string().trim().min(1, "Required"),
})
