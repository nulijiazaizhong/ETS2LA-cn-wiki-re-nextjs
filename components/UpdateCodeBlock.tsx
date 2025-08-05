'use client'

import {
  type BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockItem,
} from '@/components/ui/kibo-ui/code-block'

type UpdateCodeBlockProps = {
  code: string
}

export function UpdateCodeBlock({ code }: UpdateCodeBlockProps) {
  const data = [{ filename: 'diff', code, language: 'diff' }]

  return (
    <CodeBlock data={data} defaultValue="diff" className="mt-4">
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  )
}
