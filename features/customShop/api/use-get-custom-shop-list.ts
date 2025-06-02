import { useQuery } from "@tanstack/react-query"


import { client } from "@/lib/rpc"
// 获取应用列表
interface AdminListParams {
  page: number
  pageSize: number
  keywords?: string
}
export const useCustomShopAdminList = (info: AdminListParams) => {
  const query = useQuery({
    queryKey: ["admin-list", info.page, info.pageSize, info.keywords],
    queryFn: async () => {
      const response = await client.api["custom-shops"]["admin-list"].$get({
        query: {
          page: info.page.toString(),
          pageSize: info.pageSize.toString(),
          keywords: info.keywords || "",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch members")
      }

      const { data } = await response.json()
      return data
    },
  })

  return query
}
