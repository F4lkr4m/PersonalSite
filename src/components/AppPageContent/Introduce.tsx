import React from 'react'
import { TextImageLayout } from '@/components'
import { Button, Typography } from 'antd'
import { DownloadOutlined, UserOutlined } from '@ant-design/icons'
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
              window.open('https://hh.ru/applicant/resumes/view?resume=9db29278ff0bd26a740039ed1f72437466416b')
            }}
          >
            Резюме
          </Button>
        </div>
      </div>
    </TextImageLayout>
  )
}
