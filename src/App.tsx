import React from 'react';
import { Layout } from 'antd'
import { DESKTOP_DISPLAY_WIDTH } from '@/constants';
import { AppHeader, AppContent, AppFooter, PhotoBackground } from '@/components';
import workspace from '@/assets/workspace.jpg';


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
        <AppContent>
          <PhotoBackground 
            src={workspace}
            title="Как-то супермега крутой заголовок, хватающий за душу"
          />
        </AppContent>
        <AppFooter />
      </Layout>
  )
}

export default App
