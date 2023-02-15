import React from 'react';
import { Image } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const imageContainerStyle: React.CSSProperties = {
  width: '100%',
  position: 'relative',
  height: 'fit-content',
}

const imageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '16px',
  filter: 'brightness(40%)'
}

const imageTextContainerStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  padding: '26px 20px',
}

const imageTextStyle: React.CSSProperties = {
  color: 'white',
}

interface PhotoBackgroundProps {
  title?: string,
  src?: string, 
}

export const PhotoBackground: React.FC<PhotoBackgroundProps> = (props) => {
  const { title, src } = props;

  return (
    <div
      style={imageContainerStyle}
    >
      <Image 
        style={imageStyle}
        src={src}
        preview={false}
      />
      <div
        style={imageTextContainerStyle}
      >
        <Title
          style={imageTextStyle}
        >
          {title}
        </Title>
      </div>
    </div>
  );
}