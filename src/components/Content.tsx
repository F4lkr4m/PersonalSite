import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexGrow: '1',
  height: '100%',
  width: '100%',
  justifyContent: 'start',
}

interface AppContentProps {
  children?: JSX.Element
}

export const AppContent: React.FC<AppContentProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Content
        style={contentStyle}
      >
        {children}
      </Content>
    </>
  );
}