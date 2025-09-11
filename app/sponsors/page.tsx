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
import Image from "next/image"
import ImageZoom from "@/components/ImageZoom"

const SponsorsPage = () => {
  // 不再使用赞助者数据数组

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">赞助名单</h1>

      <h2 className="text-3xl font-bold mb-4 text-center">赞助</h2>
      <p className="text-center text-lg mb-6">您的支持可以帮助我们更好的更新</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="transition-transform hover:scale-110 w-24 h-24">
                <AvatarImage src="/imgs/author/Tumppi066.png" alt="Tumppi066的头像" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>赞助项目 (Tumppi066)</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-4 flex justify-center">
              <div>
                <a href="https://ko-fi.com/tumppi066" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Image src="/imgs/ko-fi.png" alt="Ko-fi" width={200} height={200} className="rounded-md" />
                </a>
                <p className="mb-2 text-center">通过Ko-fi赞助</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="transition-transform hover:scale-110 w-24 h-24">
                <AvatarImage src="/imgs/author/goodnightan.png" alt="晚安的头像" />
                <AvatarFallback>G</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>赞助镜像 (晚安)</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center justify-center gap-8 mt-4">
              <div>
                <ImageZoom
                  src="/imgs/support.png" 
                  alt="支持二维码" 
                  width={200} 
                  height={200} 
                />
                <p className="mb-2 text-center">扫码赞助(点击放大)</p>
              </div>
              <div className="flex items-center flex-col">
                <a href="https://afdian.net/a/goodnightan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Image src="/imgs/afdian.png" alt="爱发电" width={200} height={200} className="rounded-md" />
                </a>
                <p className="mb-2 text-center">通过爱发电赞助</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-bold mb-2">额外说明</h3>
        <p>镜像赞助不接受未成年用户</p>
        <p>如果你无法打开ko-fi，你也可以赞助中国镜像提供者由中国镜像提供者转赠作者，此情况只能使用扫码支付并在备注中填写邮箱为回执联系方式（最低3欧，换算汇率为26人民币左右；可多付不可少付）</p>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center">所有赞助者</h2>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Srlily</TableHead>
                <TableHead className="text-center">BGYdook</TableHead>
                <TableHead className="text-center">XXXX</TableHead>
                <TableHead className="text-center">XXXX</TableHead>
                <TableHead className="text-center">XXXX</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center"></TableCell>
                <TableCell className="text-center"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-lg">感谢所有赞助者的支持，您的贡献使得项目能够持续发展！</p>
      </div>
    </div>
  )
}

export default SponsorsPage