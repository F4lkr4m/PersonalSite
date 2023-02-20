import React from 'react'
import { Layout } from 'antd'
import Icon from '@ant-design/icons'
import { ReactComponent as brackets } from '@/assets/window-code.svg'
import Title from 'antd/es/typography/Title'
import { H3_LEVEL } from 'consts'

const { Header } = Layout

const headerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  padding: '0',
  columnGap: '8px',
}

const headerTitleStyle: React.CSSProperties = {
  margin: 0,
}

export const AppHeader = () => {
  return (
    <>
      <Header style={headerStyle}>
        <Icon
          style={{
            fontSize: '36px',
          }}
          component={brackets}
        />
        <Title
          level={H3_LEVEL}
          style={headerTitleStyle}
        >
          Shcherbakov
        </Title>
      </Header>
    </>
  )
}
