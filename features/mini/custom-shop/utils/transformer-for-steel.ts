// 导入 Prisma 类型
import type { ShopCustom, User, Shop } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";

// ShopCustom 包含关联对象的类型
interface ShopCustomWithRelations extends ShopCustom {
  user?: User | null;
  shop?: Shop | null;
}

// 转换后的钢铁数据接口
interface SteelData {
  id: number;
  title?: string;
  steel: string;
  title_prefix: string;
  title_suffix: string;
  min_num?: string;
  contact_address?: string;
  cover?: string;
  shop_year: number;
  products: string[];
  bodyinfo: string[];
  sccj: string[];
  zljcs: string[];
  qyzzs: string[];
  vr?: string;
  body?: string;
  customer_service_tel: string;
}

// func (sr *ShopCustomsResource) TransformerForSteel(sc shop_customs.ShopCustoms) map[string]interface{} {
// 	staticUrl := c.GetString("app.static_url")
// 	products := []string{}
// 	projectArr := strings.Split(sc.Products, ",")
// 	for _, v := range projectArr {
// 		if v != "" {
// 			products = append(products, staticUrl+v)
// 		}

// 	}

// 	cjs := []string{}
// 	cjsArr := strings.Split(sc.BodyCj, ",")
// 	for _, v := range cjsArr {
// 		if v != "" {
// 			cjs = append(cjs, staticUrl+v)
// 		}

// 	}

// 	qyzzs := []string{}
// 	qyzzsArr := strings.Split(sc.BodyQyzz, ",")
// 	for _, v := range qyzzsArr {
// 		if v != "" {
// 			qyzzs = append(qyzzs, staticUrl+v)
// 		}
// 	}

// 	zljcs := []string{}
// 	zljcsArr := strings.Split(sc.BodyZljc, ",")
// 	for _, v := range zljcsArr {
// 		if v != "" {
// 			zljcs = append(zljcs, staticUrl+v)
// 		}

// 	}

// 	bodyinfo := []string{}
// 	bodyinfoArr := strings.Split(sc.BodyInfo, ",")
// 	for _, v := range bodyinfoArr {
// 		if v != "" {
// 			bodyinfo = append(bodyinfo, staticUrl+v)
// 		}

// 	}
// 	steel := "gg"
// 	if stock_gangguan.ExistByUserID(sc.UserID) {
// 		steel = "gg"
// 	} else if stock_bancai.ExistByUserID(sc.UserID) {
// 		steel = "bc"
// 	} else if stock_falan.ExistByUserID(sc.UserID) {
// 		steel = "fl"
// 	} else if stock_famen.ExistByUserID(sc.UserID) {
// 		steel = "fm"
// 	} else if stock_guan_jian_head.ExistByUserID(sc.UserID) {
// 		steel = "gjfb"
// 	} else if stock_guan_jian_tee.ExistByUserID(sc.UserID) {
// 		steel = "gjst"
// 	} else if stock_guan_jian_wantou.ExistByUserID(sc.UserID) {
// 		steel = "gjwt"
// 	} else if stock_juancai.ExistByUserID(sc.UserID) {
// 		steel = "jc"
// 	} else if stock_xingcai.ExistByUserID(sc.UserID) {
// 		steel = "xc"
// 	}
// 	sre := new(ShopResource)

// 	now, _ := strconv.Atoi(time.Now().Format("2006"))
// 	pr := new(ProductResource)
// 	created_year, _ := strconv.Atoi(sc.Shop.CreatedAt.Format("2006"))

// 	stock_gangguan.ExistByUserID(sc.UserID)

// 	url := config.Env("app.static_url").(string)
// 	//// 【永诺创金属科技】定制不锈钢无缝管、换热器管、锅炉管
// 	//start := strings.Index(sc.Title, "【")
// 	//end := strings.Index(sc.Title, "】")
// 	//newStr := s[start+3: end]

// 	start := strings.Index(sc.Title, "【")
// 	end := strings.Index(sc.Title, "】")
// 	titlePrefix := ""
// 	titleSuffix := sc.Title
// 	if start >= 0 && end >= 0 && start < end {
// 		titlePrefix = sc.Title[start+3 : end]
// 		titleSuffix = sc.Title[end+3:]
// 	}

// 	result := make(map[string]interface{})
// 	result["id"] = sc.ID
// 	result["title"] = sc.Title
// 	result["steel"] = steel
// 	result["title_prefix"] = titlePrefix
// 	result["title_suffix"] = titleSuffix
// 	result["min_num"] = sc.MinNum
// 	result["contact_address"] = sc.Shop.ContactAddress
// 	result["cover"] = url + sc.Cover
// 	result["short_name"] = sc.Company.ShortName
// 	result["shop_year"] = now - created_year
// 	result["products"] = products
// 	result["bodyinfo"] = bodyinfo
// 	result["sccj"] = cjs
// 	result["zljcs"] = zljcs
// 	result["qyzzs"] = qyzzs
// 	result["vr"] = sc.User.Vr
// 	result["body"] = sc.Shop.Body
// 	result["waddress"] = sc.Company.GetWarehouseAddress()
// 	result["province"] = sc.Company.CompanyProvince.Name
// 	result["city"] = sc.Company.CompanyCity.Name
// 	result["shop"] = sre.Transformer(sc.Shop)
// 	result["products_info"] = pr.Transformers(sc.ProductsInfo)
// 	result["customer_service_tel"] = "0577-89881156"
// 	return result
// }

// stock_gangguan.ExistByUserID
const stock_gangguan_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockGangguan = await db.stockGangguan.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_bancai_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockBancai = await db.stockBancai.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_falan_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockFalan = await db.stockFalan.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_famen_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockFamen = await db.stockFamen.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_guan_jian_head_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockGuanJianHead = await db.stockGuanJianHead.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_guan_jian_tee_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockGuanJianTee = await db.stockGuanJianTee.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_guan_jian_wantou_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockGuanJianWantou = await db.stockGuanJianWantou.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_juancai_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockJuancai = await db.stockJuancai.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

const stock_xingcai_exist_by_user_id = async (user_id: number) => {
  const db = prisma;
  const stockXingcai = await db.stockXingcai.findFirst({
    where: {
      user_id: user_id,
    },
  });
  return true;
};

// 基于 Go 代码逻辑的转换函数
export const transformerForSteel = async (
  shopCustom: ShopCustomWithRelations
): Promise<SteelData> => {
  // 处理产品图片
  const products: string[] = [];
  if (shopCustom.products) {
    const projectArr = shopCustom.products.split(",");
    for (const v of projectArr) {
      if (v.trim() !== "") {
        products.push(`https://gousteel.com${v.trim()}`);
      }
    }
  }

  // 处理产品信息图片
  const bodyinfo: string[] = [];
  if (shopCustom.body_info) {
    const bodyinfoArr = shopCustom.body_info.split(",");
    for (const v of bodyinfoArr) {
      if (v.trim() !== "") {
        bodyinfo.push(`https://gousteel.com${v.trim()}`);
      }
    }
  }

  // 处理产品材质图片
  const cjs: string[] = [];
  if (shopCustom.body_cj) {
    const cjsArr = shopCustom.body_cj.split(",");
    for (const v of cjsArr) {
      if (v.trim() !== "") {
        cjs.push(`https://gousteel.com${v.trim()}`);
      }
    }
  }

  // 处理质量检测图片
  const zljcs: string[] = [];
  if (shopCustom.body_zljc) {
    const zljcsArr = shopCustom.body_zljc.split(",");
    for (const v of zljcsArr) {
      if (v.trim() !== "") {
        zljcs.push(`https://gousteel.com${v.trim()}`);
      }
    }
  }

  // 处理企业资质图片
  const qyzzs: string[] = [];
  if (shopCustom.body_qyzz) {
    const qyzzsArr = shopCustom.body_qyzz.split(",");
    for (const v of qyzzsArr) {
      if (v.trim() !== "") {
        qyzzs.push(`https://gousteel.com${v.trim()}`);
      }
    }
  }

  // 处理标题前缀和后缀
  let titlePrefix = "";
  let titleSuffix = shopCustom.title || "";
  if (shopCustom.title) {
    const start = shopCustom.title.indexOf("【");
    const end = shopCustom.title.indexOf("】");
    if (start >= 0 && end >= 0 && start < end) {
      titlePrefix = shopCustom.title.substring(start + 3, end);
      titleSuffix = shopCustom.title.substring(end + 3);
    }
  }

  // 计算店铺年限
  const now = new Date().getFullYear();
  const createdYear = shopCustom.shop?.created_at
    ? new Date(shopCustom.shop.created_at).getFullYear()
    : now;
  const shopYear = now - createdYear;

  // 处理封面图片
  const cover = shopCustom.cover
    ? `https://gousteel.com${shopCustom.cover}`
    : undefined;

  let steel = "gg";
  if (await stock_gangguan_exist_by_user_id(shopCustom.user_id)) {
    steel = "gg";
  } else if (await stock_bancai_exist_by_user_id(shopCustom.user_id)) {
    steel = "bc";
  } else if (await stock_falan_exist_by_user_id(shopCustom.user_id)) {
    steel = "fl";
  }
  if (await stock_famen_exist_by_user_id(shopCustom.user_id)) {
    steel = "fm";
  }
  if (await stock_guan_jian_head_exist_by_user_id(shopCustom.user_id)) {
    steel = "gjfb";
  }
  if (await stock_guan_jian_tee_exist_by_user_id(shopCustom.user_id)) {
    steel = "gjst";
  }
  if (await stock_guan_jian_wantou_exist_by_user_id(shopCustom.user_id)) {
    steel = "gjwt";
  }
  if (await stock_juancai_exist_by_user_id(shopCustom.user_id)) {
    steel = "jc";
  }
  if (await stock_xingcai_exist_by_user_id(shopCustom.user_id)) {
    steel = "xc";
  }

  return {
    id: shopCustom.id,
    title: shopCustom.title || undefined,
    steel,
    title_prefix: titlePrefix,
    title_suffix: titleSuffix,
    min_num: shopCustom.min_num || undefined,
    contact_address: shopCustom.shop?.contact_address ?? undefined,
    cover,
    shop_year: shopYear,
    products,
    bodyinfo,
    sccj: cjs,
    zljcs,
    qyzzs,
    vr: shopCustom.user?.vr ?? undefined,
    body: shopCustom.shop?.body ?? undefined,
    customer_service_tel: "0577-89881156",
  };
};
