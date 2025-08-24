import { z } from "zod";
// 分页 参数
export const pageParamsSchema = z.object({
  title: z.string().optional(),
  categoryID: z.coerce.number().default(1),
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(10),
});
