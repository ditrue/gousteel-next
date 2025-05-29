import Image from "next/image"
import { ChevronLeftIcon as ChevronMoreHorizontal } from "lucide-react"

export default function Home() {
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
              height={92}
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
          <div className="md:col-span-2">
            <div className="relative">
              <Image
                src="https://gousteel.com/api/static/uploads/images/00300054819_26359cb3.jpg"
                alt="Workers in red uniforms working on pipeline"
                width={510}
                height={382}
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-4 p-2 w-full">
                <h3 className="text-xl">升级管控 精心操作</h3>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="md:col-span-2 bg-white">
            <div className="space-y-4">
              <div className="border flex cursor-pointer">
                <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl text-gray-500 font-bold">08</span>
                  <span className="text-xs text-gray-500">2025-05</span>
                </div>
                <div className="p-4">
                  <p className="line-clamp-2 text-sm">
                    国家管网集团北京管道公司高规格：十六载匠心筑梦...
                  </p>
                  <p className="text-xs text-gray-500 mt-1">0</p>
                </div>
              </div>

              <div className="border flex">
                <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl text-gray-500 font-bold">06</span>
                  <span className="text-xs text-gray-500">2025-05</span>
                </div>
                <div className="p-4">
                  <p className="line-clamp-2 text-sm">
                    北京管道马兰察布压气站新增下载点投产
                  </p>
                  <p className="text-xs text-gray-500 mt-1">1</p>
                </div>
              </div>

              <div className="border flex">
                <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl text-gray-500 font-bold">29</span>
                  <span className="text-xs text-gray-500">2025-04</span>
                </div>
                <div className="p-4">
                  <p className="line-clamp-2 text-sm">
                    国内最大的超临界二氧化碳管道工程项目在松原市启动
                  </p>
                  <p className="text-xs text-gray-500 mt-1">0</p>
                </div>
              </div>

              <div className="border flex">
                <div className="bg-gray-100 p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl text-gray-500 font-bold">27</span>
                  <span className="text-xs text-gray-500">2025-04</span>
                </div>
                <div className="p-4">
                  <p className="line-clamp-2 text-sm">
                    地下管道密布成难题，道路修整如何破局？
                  </p>
                  <p className="text-xs text-gray-500 mt-1">0</p>
                </div>
              </div>
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
          <div className="border p-2">
            <Image
              src="https://gousteel.com/api/static/uploads/images/home_index/202209/15/5_1663210766_LzZblvImQV.jpg"
              alt="Stainless Steel Pipes"
              width={250}
              height={200}
              className="w-full h-auto"
            />
            <p className="text-base mt-2">
              【斯密管道】
              卫生级不锈钢水管、不锈钢卫生管、饮用卡压管件、双卡压式薄壁不锈钢管材、管件
            </p>
          </div>
          <div className="border p-2">
            <Image
              src="https://gousteel.com/api/static/uploads/images/home_index/202209/15/5_1663210941_mAq4duXcup.jpg"
              alt="Stainless Steel Pipes"
              width={250}
              height={200}
              className="w-full h-auto"
            />
            <p className="text-base mt-2">
              【斯密管道】 不锈钢饮用水管系统、水管卫生管 工业薄壁
              行业加工中心、内外镀层、防腐蚀/防水管道
            </p>
          </div>
          <div className="border p-2">
            <Image
              src="https://gousteel.com/api/static/uploads/images/home_index/202209/15/5_1663210941_mAq4duXcup.jpg"
              alt="Stainless Steel Fittings"
              width={250}
              height={200}
              className="w-full h-auto"
            />
            <p className="text-base mt-2">
              【斯汀管道】 卫生生产级和标准系和标准不锈钢 (304、316) 卡压管件
            </p>
          </div>
          <div className="border p-2">
            <Image
              src="https://gousteel.com/api/static/uploads/images/home_index/202209/15/5_1663210941_mAq4duXcup.jpg"
              alt="Stainless Steel Fittings"
              width={250}
              height={200}
              className="w-full h-auto"
            />
            <p className="text-base mt-2">
              【斯卡水业】不锈钢饮水管及卡压式管件、弯头管件、异径管件等、薄壁管件、防水管件组装、生产及销售
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* Exhibition Information Card */}
        <div className="w-full md:w-1/2 bg-white rounded-md shadow-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-medium">展会信息</h2>
            <button className="text-gray-500">
              <ChevronMoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-6">
              <li className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <span className="text-red-500">【国内展览】</span>{" "}
                    2025中国（温州）国际泵阀展览会
                  </div>
                </div>
                <div className="text-gray-400 md:text-right mt-1 md:mt-0">
                  2025-10-19至2025-10-19
                </div>
              </li>

              <li className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <span className="text-red-500">【国内展览】</span>{" "}
                    2025年粮南工博会
                  </div>
                </div>
                <div className="text-gray-400 md:text-right mt-1 md:mt-0">
                  2025-02-03至2025-02-03
                </div>
              </li>

              <li className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <span className="text-red-500">【国内展览】</span>{" "}
                    2025武汉世界水博览会
                  </div>
                </div>
                <div className="text-gray-400 md:text-right mt-1 md:mt-0">
                  2025-03-22至2025-03-22
                </div>
              </li>

              <li className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <span className="text-red-500">【国内展览】</span>{" "}
                    2025东北国际泵阀展
                  </div>
                </div>
                <div className="text-gray-400 md:text-right mt-1 md:mt-0">
                  2025-04-26至2025-04-26
                </div>
              </li>

              <li className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <span className="text-red-500">【国内展览】</span>{" "}
                    2025上海管道系统展
                  </div>
                </div>
                <div className="text-gray-400 md:text-right mt-1 md:mt-0">
                  2025-06-06至2025-06-06
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Information Card */}
        <div className="w-full md:w-1/2 bg-white rounded-md shadow-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-medium">技术资料</h2>
            <button className="text-gray-500">
              <ChevronMoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-6">
              <li className="flex">
                <span className="text-red-500 mr-2">•</span>
                <div>内环氧粉末防腐螺旋管标准</div>
              </li>

              <li className="flex">
                <span className="text-red-500 mr-2">•</span>
                <div>要怎么去区分PE管的好与坏</div>
              </li>

              <li className="flex">
                <span className="text-red-500 mr-2">•</span>
                <div>西安咸阳国际机场东航站楼给水排水设计安...</div>
              </li>

              <li className="flex">
                <span className="text-red-500 mr-2">•</span>
                <div>为什么不锈钢316L比304更适用于饮用水传...</div>
              </li>

              <li className="flex">
                <span className="text-red-500 mr-2">•</span>
                <div>低压流体输送用薄壁不锈钢管道有关的晶间...</div>
              </li>

              <li className="flex">
                <span className="text-red-500 mr-2">•</span>
                <div>不锈钢焊管与不锈钢无缝管的区别</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
