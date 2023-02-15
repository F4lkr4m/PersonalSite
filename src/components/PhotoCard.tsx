import React from 'react';
import { Image, ImageProps } from 'antd';

const defaultImageStyle: React.CSSProperties = {
  borderRadius: '12px',
  width: '400px',
}

export interface PhotoCardProps extends ImageProps {
  src?: string;
  imageStyle?: React.CSSProperties;
}


export const PhotoCard: React.FC<PhotoCardProps> = (props) => {
  const { src, imageStyle } = props;

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
  );
}