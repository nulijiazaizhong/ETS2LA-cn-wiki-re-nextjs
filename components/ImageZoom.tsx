'use client'

import Image from 'next/image'
import { ImageZoom as KiboImageZoom } from '@/components/ui/kibo-ui/image-zoom'

const ImageZoom = ({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) => {
  return (
    <KiboImageZoom>
      <Image src={src} alt={alt} width={width} height={height} />
    </KiboImageZoom>
  )
}

export default ImageZoom
