import React from 'react';
import { Layout } from 'antd'
import { DESKTOP_DISPLAY_WIDTH } from '@/constants';
import { AppHeader, AppContent, AppFooter, ImageBackground, ImageCard, TextImageLayout } from '@/components';
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
          <ImageBackground 
            src={workspace}
            title="Как-то супермега крутой заголовок, хватающий за душу"
          />
          <ImageCard 
            src={workspace}
            preview={false}
          />
          <TextImageLayout 
            text="Какой-то текст содержащий описание или еще что то типа, что может быть полезным для человека"
            imageProps={{
              src: workspace,
              preview: false,
            }}
          />

          <TextImageLayout 
            text="Какой-то текст содержащий описание или еще что то типа, что может быть полезным для человека"
            imageProps={{
              src: workspace,
              preview: false,
            }}
            imageRight
          />
        </AppContent>
        <AppFooter />
      </Layout>
  )
}

export default App
