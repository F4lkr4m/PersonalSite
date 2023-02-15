import React from 'react';
import { Layout } from 'antd';

const footerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  padding: 0,
}


const { Footer } = Layout;

export const AppFooter = () => {


  return (
    <>
      <Footer
        style={footerStyle}
      >
        Какой-то футер
      </Footer>
    </>
  ) 
}