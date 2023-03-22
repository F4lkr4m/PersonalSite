import React from 'react'
import { Typography } from 'antd'
import { ImageCard, ImageCardProps } from './ImageCard'
import { H4_LEVEL } from '../constants'
import { useIsMobile } from '@/hooks/useIsMobile'

const { Title } = Typography

interface TextImageLayoutProps {
  children?: JSX.Element | string
  imageLeft?: boolean
  imageProps?: ImageCardProps
  style?: React.CSSProperties
}

export const TextImageLayout: React.FC<TextImageLayoutProps> = (props) => {
  const { children, style = {}, imageProps = {}, imageLeft = false } = props

  const isMobile = useIsMobile()

  const textImageContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    rowGap: '12px',
    width: '100%',
    height: 'fit-content',
    columnGap: '16px',
  }

  return (
    <div
      style={{
        ...textImageContainerStyle,
        ...style,
      }}
    >
      {isMobile && <ImageCard {...imageProps} />}
      {imageLeft && !isMobile && <ImageCard {...imageProps} />}
      {typeof children === 'string' ? <Title level={H4_LEVEL}>{children}</Title> : children}
      {!imageLeft && !isMobile && <ImageCard {...imageProps} />}
    </div>
  )
}
