import React from 'react'
import { TextImageLayout } from '@/components'
import { Button, Typography } from 'antd'
import { DownloadOutlined, UserOutlined } from '@ant-design/icons'
import workspace from '@/assets/workspace.jpg'

const { Text } = Typography

export const Introduce = () => {
  return (
    <TextImageLayout
      imageProps={{
        src: workspace,
        preview: false,
        style: {
          borderRadius: '50%',
          width: '300px',
          height: '300px',
          objectFit: 'cover',
        },
      }}
      style={{
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: '26px',
          }}
        >
          Привет! Меня зовут Сережа и я занимаюсь Frontend-разработкой!
        </Text>
        <div
          style={{
            display: 'flex',
            padding: '24px 0',
            columnGap: '12px',
          }}
        >
          <Button
            size="large"
            icon={<UserOutlined />}
          >
            Контакты
          </Button>
          <Button
            size="large"
            icon={<DownloadOutlined />}
          >
            Резюме
          </Button>
        </div>
      </div>
    </TextImageLayout>
  )
}
