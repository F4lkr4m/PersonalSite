import React from 'react'
import { Divider, Layout } from 'antd'
import { DESKTOP_DISPLAY_WIDTH } from '@/constants'
import { Typography } from 'antd'
import {
  AppHeader,
  AppContent,
  AppFooter,
  ImageBackground,
  ImageCard,
  TextImageLayout,
  ParagraphBlock,
  Skills,
  Introduce,
} from '@/components'
import workspace from '@/assets/workspace.jpg'
import { WorkExperience } from 'components/AppPageContent/WorkExperience'
import { Training } from 'components/AppPageContent/Training'

const layoutStyle: React.CSSProperties = {
  width: DESKTOP_DISPLAY_WIDTH,
  flexGrow: '1',
  backgroundColor: 'transparent',
  height: '100%',
  padding: '10px',
}

const App = () => {
  return (
    <Layout style={layoutStyle}>
      <AppHeader />
      <AppContent>
        <>
          <Introduce />
          <Skills />
          <Divider style={{ margin: '0' }} />
          <WorkExperience />
          <Divider style={{ margin: '0' }} />
          <Training />
          <ImageCard
            src={workspace}
            preview={false}
          />

          <TextImageLayout
            imageProps={{
              src: workspace,
              preview: false,
            }}
            imageRight
          >
            Какой-то текст содержащий описание или еще что то типа, что может быть полезным для человека
          </TextImageLayout>
          <Divider style={{ margin: '0' }} />
          <ParagraphBlock title="Какой то ебейший заголовок">
            Текст содержащий описание, какой я ахуенный и крутой программист и что я являют гуру фронтенда и вообще
            очень классный и кудрявый парень
          </ParagraphBlock>
        </>
      </AppContent>
      <AppFooter />
    </Layout>
  )
}

export default App
