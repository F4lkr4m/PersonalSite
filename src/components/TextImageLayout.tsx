import React from 'react'
import { Typography } from 'antd'
import { ImageCard, ImageCardProps } from './ImageCard'
import { H4_LEVEL } from '../constants'

const { Title } = Typography

const textImageContainerStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  height: 'fit-content',
  columnGap: '16px',
}

interface TextImageLayoutProps {
  children?: JSX.Element | string
  imageLeft?: boolean
  imageProps?: ImageCardProps
  style?: React.CSSProperties
}

export const TextImageLayout: React.FC<TextImageLayoutProps> = (props) => {
  const { children, style = {}, imageProps = {}, imageLeft = false } = props

  return (
    <div
      style={{
        ...textImageContainerStyle,
        ...style,
      }}
    >
      {imageLeft && <ImageCard {...imageProps} />}
      {typeof children === 'string' ? <Title level={H4_LEVEL}>{children}</Title> : children}
      {!imageLeft && <ImageCard {...imageProps} />}
    </div>
  )
}
