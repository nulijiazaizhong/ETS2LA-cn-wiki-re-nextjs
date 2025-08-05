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

const AuthorPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">作者信息</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="transition-transform hover:scale-110">
                <AvatarImage src="https://github.com/nulijiazaizhong.png" />
                <AvatarFallback>NZ</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>nulijiazaizhong</CardTitle>
                <p className="text-sm text-muted-foreground">
                  一个热爱开源的开发者
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              你好！我是一名热衷于Web开发和开源社区的开发者。我喜欢探索新技术，并将其应用于实际项目中。
            </p>
            <div className="mt-4 flex space-x-2">
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Node.js</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>联系方式</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>平台</TableHead>
                  <TableHead>链接</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>GitHub</TableCell>
                  <TableCell>
                    <a
                      href="https://github.com/nulijiazaizhong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      nulijiazaizhong
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bilibili</TableCell>
                  <TableCell>
                    <a
                      href="https://space.bilibili.com/38942664"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      努力加载中...
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AuthorPage
