import React from 'react'
import { Image, ImageProps } from 'antd'
import { useIsMobile } from '@/hooks/useIsMobile'

export interface ImageCardProps extends ImageProps {
  src?: string
  imageStyle?: React.CSSProperties
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { src, imageStyle } = props

  const isMobile = useIsMobile()

  const defaultImageStyle: React.CSSProperties = {
    borderRadius: '12px',
    width: isMobile ? '100%' : '400px',
  }

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
