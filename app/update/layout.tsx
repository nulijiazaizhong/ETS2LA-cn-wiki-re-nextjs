export default function UpdateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col flex-grow">
      <main className="flex-grow">{children}</main>
    </div>
  )
}
