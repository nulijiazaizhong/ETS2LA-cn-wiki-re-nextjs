import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import ImageZoom from "@/components/ImageZoom"

const AuthorPage = () => {
  const otherContributors = [
    { name: "DylDev", contribution: "各种添加和改进、物体检测 AI 模型和开发", links: ["https://github.com/DylDevs", "https://www.youtube.com/@DylDev"], avatar: "/imgs/author/DylDev.png" },
    { name: "Roccovax", contribution: "ETS2LA 游戏端 SDK 开发者。实现了直接获取游戏内的车辆数据、交通信号灯数据、摄像头数据等实时信息", links: ["https://github.com/DarioWouters"], avatar: "/imgs/author/Roccovax.png" },
    { name: "truckermudgeon", contribution: "游戏数据提取与处理", links: [], avatar: "/imgs/author/truckermudgeonjpg.jpg" },
    { name: "Cloud", contribution: "Linux 和 Unix 适配,各种改进和错误修复", links: [], avatar: "/imgs/author/Cloud.png" },
    { name: "ziakhan4505", contribution: "ETS2LA SDK C ++ 开发者、 linux与UNIX 移植、修复错误", links: [], avatar: "" },
    { name: "WhyTrevorWhy", contribution: "协助开发地图插件与导航功能", links: [], avatar: "" },
    { name: "mimi89999", contribution: "scs-sdk-controller 开发人员", links: [], avatar: "" },
    { name: "zhaoyj", contribution: "环境可视化的 3D 模型", links: [], avatar: "" },
    { name: "JimJokes", contribution: "地图数据提取器开发、支持模块地图。", links: [], avatar: "/imgs/author/JimJokes.jpg" },
    { name: "playzzero97", contribution: "Discord rich presence plugin developer, slight backend updates.", links: [], avatar: "/imgs/author/playzzero97.png" },
    { name: "Lun", contribution: "中文翻译,错误修复", links: ["https://discordapp.com/users/832636302402256898"], avatar: "/imgs/author/Lun.png" },
    { name: "MRUIAW", contribution: "中文翻译,错误修复", links: ["https://space.bilibili.com/357816575"], avatar: "/imgs/author/MRUIAW.png" },
    { name: "PiggyWu981", contribution: "地图插件自动偏移计算。", links: ["https://github.com/Piggywu981", "https://space.bilibili.com/355054416", "https://discordapp.com/users/763642553412223008"], avatar: "/imgs/author/PiggyWu98.jpg" },
    { name: "Sheng FAN", contribution: "Discord 服务器支持、中英翻译机器人开发者。", links: ["https://github.com/fred913"], avatar: "/imgs/author/Sheng FAN.jpg" },
    { name: "Piotrke", contribution: "hook 游戏", links: [], avatar: "" },
    { name: "DTheIcyDragon", contribution: "错误修复", links: [], avatar: "/imgs/author/DTheIcyDragon.jpg" },
    { name: "Roman Sonnik", contribution: "错误修复", links: ["https://github.com/RomanSonnik"], avatar: "/imgs/author/Roman Sonnik.jpg" },
    { name: "atac_helicopter", contribution: "错误修复", links: [], avatar: "" },
    { name: "ғʟᴇxғʟᴇxᴇɴ", contribution: "错误修复", links: [], avatar: "" },
    { name: "LookAtYourSkill", contribution: "错误修复", links: [], avatar: "" },
    { name: "ViSzKe", contribution: "错误修复", links: [], avatar: "/imgs/author/ViSzKe.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">作者信息</h1>

      <h2 className="text-3xl font-bold mb-4 text-center">软件/插件主开发者</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="transition-transform hover:scale-110 w-24 h-24">
                <AvatarImage src="/imgs/author/Tumppi066.png" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Tumppi066</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>ETS2LA 的首席开发人员和创建者。</p>
            <div className="mt-4 flex space-x-2">
              <a href="https://github.com/Tumppi066" target="_blank" rel="noopener noreferrer"><Badge>GitHub</Badge></a>
              <a href="https://www.youtube.com/@Tumppi066" target="_blank" rel="noopener noreferrer"><Badge>Youtube</Badge></a>
              <a href="https://ko-fi.com/tumppi066" target="_blank" rel="noopener noreferrer"><Badge>赞助 (Ko-fi)</Badge></a>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="transition-transform hover:scale-110 w-24 h-24">
                <AvatarImage src="/imgs/author/Glas42.png" />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Glas42</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>导航检测、交通信号灯检测、ETS2LA Lite、“共同拥有者”</p>
            <div className="mt-4 flex space-x-2">
              <a href="https://github.com/OleFranz" target="_blank" rel="noopener noreferrer"><Badge>GitHub</Badge></a>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center">国内镜像提供者</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="transition-transform hover:scale-110 w-24 h-24">
                <AvatarImage src="/imgs/author/goodnightan.png" />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>goodnightan (晚安)</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>建立/维护国内镜像站、创建ETS2LA中文站</p>
            <div className="mt-4 flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <a href="https://github.com/nulijiazaizhong" target="_blank" rel="noopener noreferrer"><Badge>GitHub</Badge></a>
                <a href="https://space.bilibili.com/525984002" target="_blank" rel="noopener noreferrer"><Badge>Bilibili</Badge></a>
                <a href="https://discordapp.com/users/1095284199520469112" target="_blank" rel="noopener noreferrer"><Badge>Discord</Badge></a>
                <a href="https://goodnightan.com" target="_blank" rel="noopener noreferrer"><Badge>Homepage</Badge></a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://afdian.com/a/wanan855694144" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  <Image src="/imgs/afdian.png" alt="爱发电" width={150} height={42} />
                </a>
                <ImageZoom src="/imgs/support.png" alt="赞助二维码" width={100} height={100} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center">其余贡献者</h2>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-3/12 text-center">姓名</TableHead>
                <TableHead className="w-5/12 text-center">贡献</TableHead>
                <TableHead className="w-4/12 text-center">链接</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {otherContributors.map((contributor, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center justify-center space-x-4">
                    {contributor.avatar ? (
                      <Avatar className="transition-transform hover:scale-110">
                        <AvatarImage src={contributor.avatar} />
                        <AvatarFallback>{contributor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ) : null}
                    <span>{contributor.name}</span>
                  </TableCell>
                  <TableCell>{contributor.contribution}</TableCell>
                  <TableCell className="flex flex-wrap gap-2 justify-center">
                    {contributor.links.map((link, linkIndex) => {
                      let platform = "";
                      if (link.includes("github.com")) {
                        platform = "GitHub";
                      } else if (link.includes("youtube.com")) {
                        platform = "Youtube";
                      } else if (link.includes("bilibili.com")) {
                        platform = "Bilibili";
                      } else if (link.includes("discordapp.com")) {
                        platform = "Discord";
                      }

                      return (
                        <a key={linkIndex} href={link} target="_blank" rel="noopener noreferrer">
                          <Badge>{platform || new URL(link).hostname}</Badge>
                        </a>
                      );
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthorPage
