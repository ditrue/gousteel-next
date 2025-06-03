import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ChevronDown, Phone, Search } from "lucide-react"

interface PortalLayoutProps {
  children: React.ReactNode
}
export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <a href="" className="text-white hover:text-gray-300">
                首页
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-gray-300">
                  <span>找现货</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="/stocks/gangguan" className="block w-full h-full">
                      钢管
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/stocks/xingcai" className="block w-full h-full">
                      型材
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      href="/stocks/guanjian_3"
                      className="block w-full h-full"
                    >
                      管件
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/stocks/falan" className="block w-full h-full">
                      法兰
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/stocks/famen" className="block w-full h-full">
                      阀门
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/stocks/bancai" className="block w-full h-full">
                      板材
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/stocks/juancai" className="block w-full h-full">
                      卷材
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-gray-300">
                  <span>资讯行情</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="/news" className="block w-full h-full">
                      资讯首页
                    </a>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <a href="/news/1/category" className="block w-full h-full">
                      头条资讯
                    </a>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <a href="/news/2/category" className="block w-full h-full">
                      企业风采
                    </a>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <a href="/news/3/category" className="block w-full h-full">
                      购钢现货网中国行
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="/customs" className="text-white hover:text-gray-300">
                找工厂
              </a>
              <a href="/pipe" className="text-white hover:text-gray-300">
                找水管
              </a>
              <a href="/logistics" className="text-white hover:text-gray-300">
                找物流
              </a>
              <a href="/panoramas" className="text-white hover:text-gray-300">
                全景展示
              </a>
              <a
                href="https://www.pinpv.com/"
                className="text-white hover:text-gray-300 relative"
              >
                拼钢网
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center text-white">
                  ?
                </span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                免费注册
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                登录
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                旧版
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 max-w-2xl mx-auto">
            <Button variant="outline" className="text-red-500 border-red-500">
              店铺
            </Button>
            <div className="flex-1 relative">
              <Input placeholder="请输入关键词搜索..." className="pr-12" />
            </div>
            <Button className="bg-red-500 hover:bg-red-600 px-8">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      {children}

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            {/* Left side - Customer Service */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">客服热线</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-medium">0577-89881176</span>
                <span className="text-sm text-gray-400">
                  工作时间: 08:30-17:30
                </span>
              </div>
            </div>

            {/* Right side - Links and Copyright */}
            <div className="flex flex-col items-start md:items-end space-y-2">
              {/* Navigation Links */}
              <div className="flex flex-wrap items-center text-sm text-gray-300 space-x-1">
                <a href="#" className="hover:text-white transition-colors">
                  关于我们
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  法律声明
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  人才招聘
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  投资洽谈
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  联系我们
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">
                  常见问题
                </a>
              </div>

              {/* Copyright and Certifications */}
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="text-xs text-gray-400">
                  Copyright © 2013 - 2019 gousteel.com 购钢现货网版权所有
                  浙ICP备12008543号-2
                </div>

                {/* Certification Badges */}
                <div className="flex space-x-2">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    网络110
                    <br />
                    报警服务
                  </div>
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                    可信网站
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
