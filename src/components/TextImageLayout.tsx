import React from 'react';
import { Typography } from 'antd';
import { ImageCard, ImageCardProps } from './ImageCard';
import { H4_LEVEL } from '../constants';

const { Title } = Typography;

const textImageContainerStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  height: 'fit-content',
  columnGap: '16px',
}

interface TextImageLayoutProps {
  text?: string;
  imageRight?: boolean;
  imageProps?: ImageCardProps;
}

export const TextImageLayout: React.FC<TextImageLayoutProps> = (props) => {
  const { text = '', imageProps = {}, imageRight = false } = props;


  return (
    <div
      style={textImageContainerStyle}
    >
      {imageRight && <ImageCard {...imageProps}/>}
      <Title
        level={H4_LEVEL}
      >
        {text}
      </Title>
      {!imageRight && <ImageCard {...imageProps}/>}
    </div>
  );
}