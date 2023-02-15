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

export const AppContent = () => {

  return (
    <>
      <Content
        style={contentStyle}
      >
        Какой-то контент
      </Content>
    </>
  );
}