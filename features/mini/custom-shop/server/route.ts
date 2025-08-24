import { miniMiddleware } from "@/lib/mini-middleware";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { pageParamsSchema } from "../schemas";
import { transformerForSteel } from "../utils/transformer-for-steel";

const app = new Hono()
  .get("", miniMiddleware, zValidator("query", pageParamsSchema), async (c) => {
    const db = c.get("db");
    const { page, pageSize, categoryID, title } = c.req.valid("query");

    const queryParams = {
      where: {
        deleted_at: null,
        cover: { not: "" },
        title: { contains: title },
        product_category_id: categoryID,
        shop_id: { not: null },
        user: { is_custom_vip: true },
      },
      include: {
        user: { select: { id: true, is_custom_vip: true } },
        shop: { select: { id: true, order: true } },
      },
      orderBy: { shop: { order: "asc" as const } },
      take: pageSize,
      skip: (page - 1) * pageSize,
    };

    // 执行查询
    const shopCustoms = await db.shopCustom.findMany(queryParams);
    // shopCustoms.cover 转换为 https://www.zjzjzj.com/uploads/shop_customs/cover/20250824/1729782400.jpg
    shopCustoms.forEach((item) => {
      item.cover = `https://gousteel.com${item.cover}`;
    });

    // 过滤查询不要全部字段返回 帮忙优雅实现一些，返回 cover title
    const shopCustomData = shopCustoms.map((item) => {
      return {
        cover: item.cover,
        title: item.title,
        id: item.id,
      };
    });

    return c.json({
      message: "success",
      data: {
        list: shopCustomData,
        total: shopCustoms.length,
        page: page,
        pageSize: pageSize,
      },
    });
  })
  .get("/:id", miniMiddleware, async (c) => {
    // 	var shopCustoms ShopCustoms
    // id := types.StringToInt(idstr)
    // if err := model.DB.
    // 	Preload("User").
    // 	Preload("Shop").
    // 	Preload("Company").
    // 	First(&shopCustoms, id).Error; err != nil {
    // 	return shopCustoms, err
    // }
    const db = c.get("db");
    const id = c.req.param("id");
    const shopCustom = await db.shopCustom.findUnique({
      where: { id: Number(id) },
      include: {
        user: true,
        shop: true,
      },
    });
    console.log(id, shopCustom);

    if (!shopCustom) {
      return c.json({ message: "not found", data: null }, 404);
    }

    // 使用 transformer 函数转换数据
    const transformedData = await transformerForSteel(shopCustom);

    return c.json({ message: "success", data: transformedData });
  })
  .get("/categories", miniMiddleware, async (c) => {
    // go 语言
    // var Parents Categories
    // func init() {
    // 	category := make(map[int][]string)
    // 	category[1] = []string{"厚壁非标管", "换热器管", "特材类管", "精密管", "波纹管", "方管/矩形管", "船级社管", "核电用管", "超长盘管", "六角管", "大口径无缝管", "小口径无缝管"}
    // 	category[2] = []string{"工业焊管", "换热气管", "方管/矩形管", "特种管", "异型管", "船级社管", "卫生级管/洁净管", "其他焊管管"}
    // 	category[3] = []string{"弯头", "三通", "四通", "偏心异径管", "翻边", "管帽", "金属软管", "封头系列", "法兰系列", "丝扣系列"}
    // 	category[4] = []string{"球阀", "蝶阀", "闸阀", "针型阀", "截止阀", "止回阀", "旋塞阀", "疏水阀", "减压阀", "波纹管", "气动阀", "电磁阀", "衬氟阀门", "阀杆", "三通阀门", "四通阀门"}
    // 	category[5] = []string{"圆钢", "角钢", "扁钢", "方钢", "槽钢", "线材", "弯管/盘管", "砂轮抛光", "电解抛光", "锯床切割", "线切割", "激光切割", "车床倒角", "铣床钻孔"}
    // 	Parents = append(Parents, struct {
    // 		Id       int      `json:"id"`
    // 		Name     string   `json:"name"`
    // 		Children []string `json:"categories"`
    // 	}{Id: 1, Name: "无缝管", Children: category[1]}, struct {
    // 		Id       int      `json:"id"`
    // 		Name     string   `json:"name"`
    // 		Children []string `json:"categories"`
    // 	}{Id: 2, Name: "焊管", Children: category[2]}, struct {
    // 		Id       int      `json:"id"`
    // 		Name     string   `json:"name"`
    // 		Children []string `json:"categories"`
    // 	}{Id: 3, Name: "管件法兰", Children: category[3]}, struct {
    // 		Id       int      `json:"id"`
    // 		Name     string   `json:"name"`
    // 		Children []string `json:"categories"`
    // 	}{Id: 4, Name: "阀门", Children: category[4]}, struct {
    // 		Id       int      `json:"id"`
    // 		Name     string   `json:"name"`
    // 		Children []string `json:"categories"`
    // 	}{Id: 5, Name: "型材", Children: category[5]})
    // }
    const categories = [
      {
        id: 1,
        name: "无缝管",
        children: [
          "厚壁非标管",
          "换热器管",
          "特材类管",
          "精密管",
          "波纹管",
          "方管/矩形管",
          "船级社管",
          "核电用管",
          "超长盘管",
          "六角管",
          "大口径无缝管",
          "小口径无缝管",
        ],
      },
      {
        id: 2,
        name: "焊管",
        children: [
          "工业焊管",
          "换热气管",
          "方管/矩形管",
          "特种管",
          "异型管",
          "船级社管",
          "卫生级管/洁净管",
          "其他焊管管",
        ],
      },
      {
        id: 3,
        name: "管件法兰",
        children: [
          "弯头",
          "三通",
          "四通",
          "偏心异径管",
          "翻边",
          "管帽",
          "金属软管",
          "封头系列",
          "法兰系列",
          "丝扣系列",
        ],
      },
      {
        id: 4,
        name: "阀门",
        children: [
          "球阀",
          "蝶阀",
          "闸阀",
          "针型阀",
          "截止阀",
          "止回阀",
          "旋塞阀",
          "疏水阀",
          "减压阀",
          "波纹管",
          "气动阀",
          "电磁阀",
          "衬氟阀门",
          "阀杆",
          "三通阀门",
          "四通阀门",
        ],
      },
      {
        id: 5,
        name: "型材",
        children: [
          "圆钢",
          "角钢",
          "扁钢",
          "方钢",
          "槽钢",
          "线材",
          "弯管/盘管",
          "砂轮抛光",
          "电解抛光",
          "锯床切割",
          "线切割",
          "激光切割",
          "车床倒角",
          "铣床钻孔",
        ],
      },
    ];
    return c.json({ message: "success", data: categories });
  });

export default app;
