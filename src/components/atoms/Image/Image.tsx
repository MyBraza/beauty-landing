import React, { FC, memo } from 'react'

type TImageProps = {
  src: string
  alt: string
  onClick?: () => void
  className: string
  width: number
  height?: number
}

const Image: FC<TImageProps> = memo(
  ({ src, alt, onClick, className, width, height }: TImageProps) => (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={className}
      width={width}
      height={height}
    />
  )
)

Image.displayName = 'Image'

export default Image
