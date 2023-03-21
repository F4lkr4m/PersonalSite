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
import { Graduate } from 'components/AppPageContent/Graduate'
import { Motivation } from 'components/AppPageContent/Motivation'
import { Contacts } from 'components/AppPageContent/Contacts'

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
          <Divider style={{ margin: '0' }} />
          <Graduate />
          <Divider style={{ margin: '0' }} />
          <Motivation />
          <Divider style={{ margin: '0' }} />
          <Contacts />
        </>
      </AppContent>
      <AppFooter />
    </Layout>
  )
}

export default App
