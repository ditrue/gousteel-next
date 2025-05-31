import { useQuery } from "@tanstack/react-query"

import { client } from "@/lib/rpc"
// 获取应用列表
export const useGetTops = () => {
  const query = useQuery({
    queryKey: ["pipes"],
    queryFn: async () => {
      const response = await client.api.pipes["tops"].$get()

      if (!response.ok) {
        throw new Error("Failed to fetch members")
      }

      const { data } = await response.json()
      return data
    },
  })

  return query
}
