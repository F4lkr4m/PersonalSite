import React from 'react';
import { Typography } from 'antd';
import { H3_LEVEL } from '../constants';

const { Title, Paragraph } = Typography;

const paragraphBlockStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

const paragraphTextStyle = {
  fontSize: '16px',
}

interface ParagraphBlockProps {
  title?: string;
  children?: JSX.Element | string;
}

export const ParagraphBlock: React.FC<ParagraphBlockProps> = (props) => {
  const { title, children } = props; 


  return (
    <div
      style={paragraphBlockStyle}
    >
      <Title
        level={H3_LEVEL}
      >
        {title}
      </Title>
      <Paragraph
        style={paragraphTextStyle}
      >
        {children}
      </Paragraph>
    </div>
  );
}