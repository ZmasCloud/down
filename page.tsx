"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import {
  CircuitBoard,
  Download,
  Laptop,
  Smartphone,
  AlertCircle,
  Info,
  Clock,
  Shield,
  Cpu,
  HardDrive,
  Star,
  CheckCircle2,
  FileText,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DownloadStation() {
  const { toast } = useToast()
  const [showDialog, setShowDialog] = useState(false)
  const [currentPlatform, setCurrentPlatform] = useState("")
  const [architecture, setArchitecture] = useState("x64")
  const [version, setVersion] = useState("v3")

  const handleDownload = (platform: string) => {
    // 保存当前平台
    setCurrentPlatform(platform)

    // 根据版本复制不同的密码
    const password = version === "v3" ? "2n5d" : "himm"
    navigator.clipboard.writeText(password)

    // 显示密码提示
    toast({
      title: `密码: ${password}`,
      description: "密码已复制到剪贴板",
      duration: 3000,
    })

    // 显示询问对话框
    if (version === "v3") {
      setShowDialog(true)
    } else {
      // v2 版本直接跳转到蓝奏云
      setTimeout(() => {
        window.location.href = "https://zmascloud.top/ai"
      }, 500)
    }
  }

  const handleRedirect = (choice: "lanzou" | "selfhosted") => {
    // 关闭对话框
    setShowDialog(false)

    // 根据选择跳转到不同链接
    setTimeout(() => {
      if (choice === "lanzou") {
        window.location.href = "https://cczs2022.lanzouu.com/b007ti0mtc"
      } else {
        window.location.href = "http://103.40.13.21:27898/"
      }
    }, 500)
  }

  const openSecurityReport = () => {
    window.open(
      "https://s.threatbook.com/report/file/b771adac2f637331f02e8d3467007ed7d8ee6c7e9d9ccd1810b582baace47a62",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 背景科技图案 */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)]"
          style={{ backgroundSize: "20px 20px" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover opacity-5"></div>
      </div>

      {/* 顶部导航 */}
      <header className="relative z-10 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CircuitBoard className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              ZMAS-AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-blue-950/30 text-blue-300 border-blue-800 px-2 py-1">
              <Star className="h-3 w-3 mr-1" />
              官方下载站
            </Badge>
            <Badge variant="outline" className="bg-green-950/30 text-green-300 border-green-800 px-2 py-1">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              安全无毒
            </Badge>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center z-10 p-4 py-8">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* 标题 */}
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="flex items-center mb-2 animate-pulse">
              <CircuitBoard className="h-12 w-12 mr-3 text-blue-500" />
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                zmas-ai下载站
              </h1>
            </div>
            <p className="text-gray-200 max-w-xl">
              官方授权下载渠道，为您提供最新版本的 zmas-ai 软件，支持多平台多架构
            </p>
          </div>

          {/* 主要内容区 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* 左侧信息栏 */}
            <div className="md:col-span-1">
              <Card className="bg-black/50 backdrop-blur-sm border border-gray-800 shadow-lg shadow-blue-500/5 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-400" />
                    软件信息
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-300">最新版本</div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">v3.0.1</span>
                      <Badge className="bg-blue-600">最新</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">更新日期</div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>2025-03-28</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">安全检测</div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-green-400">已通过安全检测</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs bg-gray-900/50 border-gray-700 hover:bg-blue-900/20 text-white"
                      onClick={openSecurityReport}
                    >
                      <FileText className="h-3 w-3 mr-1" />
                      查看安全分析报告
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">下载统计</div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Windows</span>
                        <span>78.5%</span>
                      </div>
                      <Progress value={78.5} className="h-1 bg-gray-800" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>Android</span>
                        <span>21.2%</span>
                      </div>
                      <Progress value={21.2} className="h-1 bg-gray-800" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span>iOS</span>
                        <span>0.3%</span>
                      </div>
                      <Progress value={0.3} className="h-1 bg-gray-800" />
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-gray-800">
                      <AccordionTrigger className="text-sm hover:no-underline">版本对比</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-xs">
                          <div className="grid grid-cols-3 gap-2 font-medium border-b border-gray-800 pb-1">
                            <div>功能</div>
                            <div>v2版本</div>
                            <div>v3版本</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div>AI模型</div>
                            <div>基础版</div>
                            <div className="text-green-400">增强版</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div>离线功能</div>
                            <div className="text-red-400">不支持</div>
                            <div className="text-green-400">支持</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div>多设备同步</div>
                            <div className="text-red-400">不支持</div>
                            <div className="text-green-400">支持</div>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div>响应速度</div>
                            <div>标准</div>
                            <div className="text-green-400">高速</div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* 右侧下载区 */}
            <div className="md:col-span-2">
              <Card className="bg-black/50 backdrop-blur-sm border border-gray-800 shadow-2xl shadow-blue-500/10">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-white">选择下载版本</CardTitle>
                  <CardDescription className="text-center text-gray-300">
                    根据您的设备选择合适的版本进行下载
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* 版本选择选项卡 */}
                  <Tabs defaultValue="v3" value={version} onValueChange={setVersion} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-900/50">
                      <TabsTrigger value="v3" className="data-[state=active]:bg-blue-900/30 text-white">
                        v3 版本
                      </TabsTrigger>
                      <TabsTrigger value="v2" className="data-[state=active]:bg-blue-900/30 text-white">
                        v2 版本
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="v3" className="mt-4 space-y-4">
                      {/* 架构选择 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-300">选择架构</label>
                          <Select value={architecture} onValueChange={setArchitecture}>
                            <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                              <SelectValue placeholder="选择架构" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-700">
                              <SelectItem value="x64">x64 (64位)</SelectItem>
                              <SelectItem value="x86">x86 (32位)</SelectItem>
                              <SelectItem value="arm64">ARM64</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">选择子版本</label>
                          <Select defaultValue="3.0.1">
                            <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                              <SelectValue placeholder="选择版本" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-700">
                              <SelectItem value="3.0.1">v3.0.1 (最新)</SelectItem>
                              <SelectItem value="3.0.0">v3.0.0</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* 平台选择按钮 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* iOS 按钮 */}
                        <Button
                          variant="outline"
                          className="h-24 bg-gray-900/50 border-gray-700 hover:bg-gray-800 hover:border-gray-600 flex flex-col items-center justify-center gap-2 group relative overflow-hidden"
                          disabled
                        >
                          <div className="absolute inset-0 bg-red-900/20 pointer-events-none"></div>
                          <Smartphone className="h-8 w-8 text-gray-400 group-hover:text-white transition-all" />
                          <span className="text-white">iOS</span>
                          <span className="text-xs text-red-400">（维护中）</span>
                        </Button>

                        {/* Windows 按钮 */}
                        <Button
                          variant="outline"
                          className="h-24 bg-gray-900/50 border-gray-700 hover:bg-blue-900/30 hover:border-blue-500 flex flex-col items-center justify-center gap-2 group relative overflow-hidden transition-all"
                          onClick={() => handleDownload("windows")}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                          <Laptop className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-all" />
                          <span className="text-white">Windows</span>
                          <div className="flex items-center gap-1 text-xs text-gray-300">
                            <Cpu className="h-3 w-3" />
                            <span>{architecture === "x64" ? "64位" : architecture === "x86" ? "32位" : "ARM64"}</span>
                          </div>
                          <div className="absolute -bottom-10 group-hover:bottom-1 transition-all flex items-center text-xs">
                            <Download className="h-3 w-3 mr-1" /> 点击下载
                          </div>
                        </Button>

                        {/* Android 按钮 */}
                        <Button
                          variant="outline"
                          className="h-24 bg-gray-900/50 border-gray-700 hover:bg-green-900/30 hover:border-green-500 flex flex-col items-center justify-center gap-2 group relative overflow-hidden transition-all"
                          onClick={() => handleDownload("android")}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-green-900/0 to-green-500/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                          <Smartphone className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-all" />
                          <span className="text-white">Android</span>
                          <div className="flex items-center gap-1 text-xs text-gray-300">
                            <HardDrive className="h-3 w-3" />
                            <span>APK 安装包</span>
                          </div>
                          <div className="absolute -bottom-10 group-hover:bottom-1 transition-all flex items-center text-xs">
                            <Download className="h-3 w-3 mr-1" /> 点击下载
                          </div>
                        </Button>
                      </div>

                      {/* 版本说明 */}
                      <div className="mt-6 p-3 bg-blue-950/20 border border-blue-900/50 rounded-md text-sm">
                        <div className="font-medium mb-1 text-blue-400">v3.0.1 版本更新说明：</div>
                        <ul className="list-disc list-inside space-y-1 text-white">
                          <li>修复了多个已知问题和稳定性改进</li>
                          <li>优化了用户界面和交互体验</li>
                          <li>提升了AI模型响应速度和准确性</li>
                          <li>新增离线模式和本地处理功能</li>
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="v2" className="mt-4 space-y-4">
                      {/* v2版本下载区 */}
                      <div className="p-3 bg-yellow-950/20 border border-yellow-900/50 rounded-md text-sm mb-4">
                        <div className="font-medium mb-1 text-yellow-400">v2版本说明：</div>
                        <p className="text-white mb-2">
                          v2版本为旧版本，仅提供蓝奏云下载渠道，建议升级到最新的v3版本以获得更好的体验。
                        </p>
                      </div>

                      {/* 平台选择按钮 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {/* iOS 按钮 */}
                        <Button
                          variant="outline"
                          className="h-24 bg-gray-900/50 border-gray-700 hover:bg-gray-800 hover:border-gray-600 flex flex-col items-center justify-center gap-2 group relative overflow-hidden"
                          disabled
                        >
                          <div className="absolute inset-0 bg-red-900/20 pointer-events-none"></div>
                          <Smartphone className="h-8 w-8 text-gray-400 group-hover:text-white transition-all" />
                          <span className="text-white">iOS</span>
                          <span className="text-xs text-red-400">（不支持）</span>
                        </Button>

                        {/* Windows 按钮 */}
                        <Button
                          variant="outline"
                          className="h-24 bg-gray-900/50 border-gray-700 hover:bg-blue-900/30 hover:border-blue-500 flex flex-col items-center justify-center gap-2 group relative overflow-hidden transition-all"
                          onClick={() => handleDownload("windows")}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                          <Laptop className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-all" />
                          <span className="text-white">Windows</span>
                          <div className="flex items-center gap-1 text-xs text-gray-300">
                            <Cpu className="h-3 w-3" />
                            <span>仅64位</span>
                          </div>
                          <div className="absolute -bottom-10 group-hover:bottom-1 transition-all flex items-center text-xs">
                            <Download className="h-3 w-3 mr-1" /> 点击下载
                          </div>
                        </Button>

                        {/* Android 按钮 */}
                        <Button
                          variant="outline"
                          className="h-24 bg-gray-900/50 border-gray-700 hover:bg-green-900/30 hover:border-green-500 flex flex-col items-center justify-center gap-2 group relative overflow-hidden transition-all"
                          onClick={() => handleDownload("android")}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-green-900/0 to-green-500/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                          <Smartphone className="h-8 w-8 text-green-400 group-hover:text-green-300 transition-all" />
                          <span className="text-white">Android</span>
                          <div className="flex items-center gap-1 text-xs text-gray-300">
                            <HardDrive className="h-3 w-3" />
                            <span>APK 安装包</span>
                          </div>
                          <div className="absolute -bottom-10 group-hover:bottom-1 transition-all flex items-center text-xs">
                            <Download className="h-3 w-3 mr-1" /> 点击下载
                          </div>
                        </Button>
                      </div>

                      {/* 版本说明 */}
                      <div className="mt-6 p-3 bg-gray-800/50 border border-gray-700 rounded-md text-sm">
                        <div className="font-medium mb-1 text-gray-300">v2.1.5 版本信息：</div>
                        <ul className="list-disc list-inside space-y-1 text-white">
                          <li>基础AI对话功能</li>
                          <li>支持Windows和Android平台</li>
                          <li>仅支持在线模式</li>
                          <li>密码：himm（点击下载按钮自动复制）</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>

                <CardFooter className="flex flex-col items-center text-sm text-gray-400 gap-1">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-gray-300">点击按钮后将显示密码并跳转下载页面</span>
                  </div>
                  <div>© 2024 zmas-ai 下载中心 | 版本 1.0.2</div>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* 底部信息区 */}
          <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-black/30 backdrop-blur-sm border border-gray-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="bg-blue-900/30 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">安全可靠</h3>
                  <p className="text-xs text-gray-300">所有文件经过安全检测</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border border-gray-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="bg-purple-900/30 p-2 rounded-full">
                  <Download className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">高速下载</h3>
                  <p className="text-xs text-gray-300">多线路确保下载速度</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border border-gray-800/50">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="bg-green-900/30 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">定期更新</h3>
                  <p className="text-xs text-gray-300">第一时间获取最新版本</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* 询问对话框 */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">选择下载源</DialogTitle>
            <DialogDescription className="text-gray-400">请选择您想要使用的下载源</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Button
              variant="outline"
              className="h-20 bg-gray-800/50 border-gray-700 hover:bg-blue-900/30 hover:border-blue-500"
              onClick={() => handleRedirect("lanzou")}
            >
              <div className="flex flex-col items-center">
                <span className="text-lg text-white">蓝奏云</span>
                <span className="text-xs text-green-400">（推荐）</span>
              </div>
            </Button>
            <Button
              variant="outline"
              className="h-20 bg-gray-800/50 border-gray-700 hover:bg-purple-900/30 hover:border-purple-500"
              onClick={() => handleRedirect("selfhosted")}
            >
              <div className="flex flex-col items-center">
                <span className="text-lg text-white">网盘</span>
                <span className="text-xs text-blue-400">（自营）</span>
              </div>
            </Button>
          </div>
          <div className="text-center text-xs text-gray-500 mt-2">
            两个下载源内容相同，蓝奏云速度更快，自营网盘更稳定
          </div>
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  )
}

