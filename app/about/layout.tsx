export default function AboutLayout({
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
