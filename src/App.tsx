import React from 'react';
import { Layout } from 'antd'
import { DESKTOP_DISPLAY_WIDTH } from '@/constants';
import { AppHeader, AppContent, AppFooter } from '@/components';


const layoutStyle: React.CSSProperties = {
  width: DESKTOP_DISPLAY_WIDTH,
  flexGrow: '1',
  backgroundColor: 'transparent',
  height: '100%',
  padding: '10px',
}

const App = () => {

  return (
      <Layout
        style={layoutStyle}
      >
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
  )
}

export default App
