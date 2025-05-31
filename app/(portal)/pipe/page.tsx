"use client"
import Image from "next/image"
import { ChevronLeftIcon as ChevronMoreHorizontal } from "lucide-react"
import { useGetTops } from "@/features/pipe/api/use-get-tops"
import Link from "next/link"
import { useGetExhibitions } from "@/features/pipe/api/use-get-exhibitions"
import { formatDate } from "@/lib/utils"
import { useGetTechs } from "@/features/pipe/api/use-get-techs"
import { usePipeRecommends } from "@/features/customShop/api/use-get-pipe-recommends"

// 写一个函数  传一个日期Date 返回下面 的格式
// <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
//   <span className="text-3xl text-gray-500 font-bold">
//     08
//   </span>
//   <span className="text-xs text-gray-500">2025-05</span>
// </div>

const formatDateToDiv = (dateString: string) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()

  return (
    <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
      <span className="text-3xl text-gray-500 font-bold">{day}</span>
      <span className="text-xs text-gray-500">{`${year}-${month}`}</span>
    </div>
  )
}

export default function Home() {
  const { data } = useGetTops()
  const first = data?.[0]
  // 剩下的数据
  const restData = data?.slice(1) || []

  const { data: exhibitionsData } = useGetExhibitions()
  // 技术资料
  const { data: techsData } = useGetTechs()

  // 推荐商铺
  const { data: recommendsData } = usePipeRecommends()
  return (
    <div>
      {/* Banner Advertisements */}
      <div className="container mx-auto px-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-orange-500 text-white p-0 rounded">
            <Image
              src="https://gousteel.com/pipe/assets/%E8%B7%AF%E6%B3%95%E8%8E%B1.aaa2a5ed.gif"
              alt="Stainless Steel Pipes"
              width={594}
              height={392}
              className="w-full h-full"
            />
          </div>
          <div className="bg-orange-500 text-white p-0 rounded">
            <Image
              src="https://gousteel.com/pipe/assets/%E6%A3%AE.c587af27.jpg"
              alt="Stainless Steel Pipes"
              width={594}
              height={92}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Small Banner Advertisements */}
      <div className="container mx-auto px-4 mt-4">
        <div className="grid grid-cols-5 gap-2">
          <div className="bg-green-100 h-15">
            <Image
              src="https://gousteel.com/pipe/assets/%E9%92%9C%E6%81%92%E6%BA%901.8c888c75.gif"
              alt="Stainless Steel Pipes"
              width={250}
              height={200}
              className="w-full h-full"
            />
          </div>
          <div className="bg-green-700 h-15">
            <Image
              src="https://gousteel.com/pipe/assets/%E5%9B%BD%E4%B9%90.4e7d7fdd.gif"
              alt="Stainless Steel Pipes"
              width={250}
              height={200}
              className="w-full h-full"
            />
          </div>
          <div className="bg-blue-900 h-15">
            <Image
              src="https://gousteel.com/pipe/assets/%E6%AD%A3%E6%89%ACgif(1).515db75d.gif"
              alt="Stainless Steel Pipes"
              width={250}
              height={200}
              className="w-full h-full"
            />
          </div>
          <div className="bg-yellow-500 h-15">
            <Image
              src="https://gousteel.com/pipe/assets/%E9%BB%84%E9%87%91%E5%B9%BF%E5%91%8A%E4%BD%8D.c49364ed.jpg"
              alt="Stainless Steel Pipes"
              width={250}
              height={200}
              className="w-full h-full"
            />
          </div>
          <div className="bg-yellow-500 h-15">
            <Image
              src="https://gousteel.com/pipe/assets/%E9%BB%84%E9%87%91%E5%B9%BF%E5%91%8A%E4%BD%8D.c49364ed.jpg"
              alt="Stainless Steel Pipes"
              width={250}
              height={200}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white rounded shadow">
          {/* Main Image */}
          <Link href={`/news/${first?.id}`} className="md:col-span-2">
            <div className="relative h-full">
              {first?.cover && (
                <Image
                  src={"https://gousteel.com/uploads/" + first.cover}
                  alt="Workers in red uniforms working on pipeline"
                  width={510}
                  height={392}
                  className="w-full h-full object-cover rounded"
                />
              )}
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-4 p-2 w-full">
                <h3 className="text-xl">{first?.title}</h3>
              </div>
            </div>
          </Link>

          {/* News Section */}
          <div className="md:col-span-2 bg-white">
            <div className="space-y-4">
              {restData.map((item) => {
                return (
                  <Link
                    className="border flex cursor-pointer"
                    href={`/news/${item.id}`}
                    key={item.id}
                  >
                    {item.created_at && formatDateToDiv(item.created_at)}
                    <div className="p-4">
                      <p className="line-clamp-2 text-sm">
                        {item.title || "标题未提供"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{item.view}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Banner Advertisements */}
      <div className="container mx-auto px-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-600 text-white p-0 rounded flex items-center justify-center">
            <Image
              src="https://gousteel.com/pipe/assets/%E5%8D%A1%E5%8E%8B%E7%AE%A1%E4%BB%B63.5c5933c3.jpg"
              alt="Stainless Steel Pipes"
              width={526}
              height={82}
              className="w-full h-full"
            />
          </div>
          <div className="bg-purple-500 text-white p-0 rounded flex items-center justify-center">
            <Image
              src="https://gousteel.com/pipe/assets/%E6%B0%B4%E7%AE%A14.60816477.jpg"
              alt="Stainless Steel Pipes"
              width={526}
              height={82}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Recommended Merchants */}
      <div className="container mx-auto px-4 mt-4">
        <div className="border-b pb-2 flex justify-between items-center bg-white rounded shadow p-2">
          <h2 className="text-lg font-bold">推荐商家</h2>
          <div className="flex space-x-2 text-xs text-gray-500">
            <span>不锈钢水管</span>
            <span>|</span>
            <span>不锈钢管道管</span>
            <span>|</span>
            <span>不锈钢焊接管</span>
            <span>|</span>
            <span>不锈钢卫生管件</span>
            <span>|</span>
            <span>不锈钢异径管件</span>
            <span>|</span>
            <span>不锈钢弯头管件</span>
            <div className="ml-4">
              <span className="text-blue-600">找更定制</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-2 bg-white rounded shadow">
          {recommendsData?.map((item) => (
            <div
              key={item.id}
              className="border p-2 hover:shadow-lg transition-shadow duration-200"
            >
              {item.cover && (
                <Link href={`/custom-shop/${item.id}`}>
                  <Image
                    src={"https://gousteel.com" + item.cover}
                    alt={item.title || "Product Image"}
                    width={250}
                    height={200}
                    className="w-full h-auto"
                  />
                </Link>
              )}
              <p className="text-base mt-2">{item.title || "标题未提供"}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* Exhibition Information Card */}
        <div className="w-full md:w-1/2 bg-white rounded shadow-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-medium">展会信息</h2>
            <button className="text-gray-500">
              <ChevronMoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-6">
              {exhibitionsData?.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex">
                    <span className="text-red-500 mr-2">•</span>
                    <div>
                      <span className="text-red-500">【国内展览】</span>{" "}
                      {item.title || "标题未提供"}
                    </div>
                  </div>
                  <div className="text-gray-400 md:text-right mt-1 md:mt-0">
                    {item.started_at && formatDate(item.started_at)}至
                    {item.ended_at && formatDate(item.ended_at)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Information Card */}
        <div className="w-full md:w-1/2 bg-white rounded shadow-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-medium">技术资料</h2>
            <button className="text-gray-500">
              <ChevronMoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-6">
              {techsData?.map((item) => (
                <li key={item.id} className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <div>{item.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
