import React from 'react'
import { Divider, Layout } from 'antd'
import { DESKTOP_DISPLAY_WIDTH, PPDP, SBER, MENTORING } from '@/constants'
import { AppHeader, AppContent, AppFooter, Skills, Introduce } from '@/components'
import { WorkExperienceProps, WorkExperiences } from 'components/AppPageContent/WorkExperience'
import { Training } from 'components/AppPageContent/Training'
import { Graduate } from 'components/AppPageContent/Graduate'
import { Motivation } from 'components/AppPageContent/Motivation'
import { Contacts } from 'components/AppPageContent/Contacts'
import { useIsMobile } from './hooks/useIsMobile'

const App = () => {
  const isMobile = useIsMobile()

  const layoutStyle: React.CSSProperties = {
    width: isMobile ? '100%' : DESKTOP_DISPLAY_WIDTH,
    flexGrow: '1',
    backgroundColor: 'transparent',
    height: '100%',
    padding: isMobile ? '20px' : '10px',
  }

  const experiences: WorkExperienceProps[] = [PPDP, SBER, MENTORING]

  return (
    <Layout style={layoutStyle}>
      <AppHeader />
      <AppContent>
        <>
          <Introduce />
          <Skills />
          <Divider style={{ margin: '0' }} />
          <WorkExperiences experiences={experiences} />
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
