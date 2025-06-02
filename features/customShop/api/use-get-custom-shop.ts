import { useQuery } from "@tanstack/react-query"
interface UseGetCustomShopProps {
  customShopId: number
}

import { client } from "@/lib/rpc"
export const useCustomShop = ({ customShopId }: UseGetCustomShopProps) => {
  const query = useQuery({
    queryKey: ["custom-shops", customShopId],
    queryFn: async () => {
      const response = await client.api["custom-shops"][":customShopID"].$get({
        param: { customShopID: String(customShopId) },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch task")
      }

      const { data } = await response.json()

      return data
    },
  })

  return query
}
