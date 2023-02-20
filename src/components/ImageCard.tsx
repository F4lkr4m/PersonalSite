import React from 'react'
import { Image, ImageProps } from 'antd'

const defaultImageStyle: React.CSSProperties = {
  borderRadius: '12px',
  width: '400px',
}

export interface ImageCardProps extends ImageProps {
  src?: string
  imageStyle?: React.CSSProperties
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { src, imageStyle } = props

  return (
    <>
      <Image
        src={src}
        style={{
          ...defaultImageStyle,
          ...imageStyle,
        }}
        {...props}
      />
    </>
  )
}
