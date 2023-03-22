import React from 'react'
import { Image } from 'antd'
import { Typography } from 'antd'
import { useIsMobile } from '@/hooks/useIsMobile'

const { Title } = Typography

const imageContainerStyle: React.CSSProperties = {
  width: '100%',
  position: 'relative',
  height: 'fit-content',
}

const imageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '16px',
  filter: 'brightness(40%)',
}

const imageTextContainerStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'between',
  justifyContent: 'space-between',
  padding: '26px 20px',
}

interface ImageBackgroundProps {
  title?: string
  author?: string
  src?: string
}

export const ImageBackground: React.FC<ImageBackgroundProps> = (props) => {
  const { title, src, author } = props
  const isMobile = useIsMobile()

  const imageTextStyle: React.CSSProperties = {
    color: 'white',
    fontSize: isMobile ? '24px' : '56px',
  }

  const authorTextStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'end',
    fontSize: isMobile ? '18px' : '36px',
  }

  return (
    <div style={imageContainerStyle}>
      <Image
        style={imageStyle}
        src={src}
        preview={false}
      />
      <div style={imageTextContainerStyle}>
        <Title style={imageTextStyle}>{title}</Title>
        <Title style={authorTextStyle}>{author}</Title>
      </div>
    </div>
  )
}
