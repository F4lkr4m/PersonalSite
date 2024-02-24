import React from 'react'
import { TextImageLayout } from '@/components'
import { Button, Typography } from 'antd'
import { DownloadOutlined, UserOutlined } from '@ant-design/icons'
import { RESUME_HREF } from '@/constants'
import iam from '@/assets/iam.jpg'
import { useIsMobile } from '@/hooks/useIsMobile'

const { Text } = Typography

export const Introduce = () => {
  const isMobile = useIsMobile()

  return (
    <TextImageLayout
      imageProps={{
        src: iam,
        preview: false,
        style: {
          borderRadius: '50%',
          width: isMobile ? '200px' : '300px',
          height: isMobile ? '200px' : '300px',
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
            whiteSpace: 'break-spaces',
          }}
        >
          {`Привет! Меня зовут Сережа и я\n Frontend-разработчик!`}
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
            onClick={() => {
              const contacts = document.getElementById('contacts')
              contacts?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            Контакты
          </Button>
          <Button
            size="large"
            icon={<DownloadOutlined />}
            onClick={() => {
              window.open(RESUME_HREF)
            }}
          >
            Резюме
          </Button>
        </div>
      </div>
    </TextImageLayout>
  )
}
