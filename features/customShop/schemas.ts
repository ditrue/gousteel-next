import { z } from "zod"
export const customAdminListSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  description: z.string().trim().min(1, "Required"),
  prefix: z.string().trim().min(1, "Required"),
  host: z.string().trim().min(1, "Required"),
})

export const updateCustomShopSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  description: z.string().trim().min(1, "Required"),
  prefix: z.string().trim().min(1, "Required"),
  host: z.string().trim().min(1, "Required"),
})
