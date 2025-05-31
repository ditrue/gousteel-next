import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 日期格式化函数
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0") // 月份从0开始，需要+1
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}
