'use client'

import { Typography } from '@/components/Typography';
import { useEffect } from 'react'
import { useTableOfContents } from '@/contexts/TableOfContentsContext'

export default function MapDataExtractionPage() {
  const { setToc } = useTableOfContents()

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6')
    );

    const toc = headingElements.map((heading) => {
      const level = parseInt(heading.tagName.substring(1), 10);
      return {
        id: heading.id,
        level: level,
        text: heading.textContent || '',
      };
    });

    setToc(toc);
  }, [setToc]);

  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">地图数据提取</Typography>
      <Typography variant="p">
        这里是关于地图数据提取的内容。
      </Typography>
    </div>
  );
}
