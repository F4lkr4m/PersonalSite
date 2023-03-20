import React from 'react'
import { ParagraphBlock } from '..'
import { TextImageLayout } from '..'
import workspace from '@/assets/workspace.jpg'
import { Divider, Typography } from 'antd'
import { H4_LEVEL } from '@/constants'

const { Title, Text, Paragraph } = Typography

const EmployerTitle: React.CSSProperties = {
  marginBottom: '0',
}

const EmployerTextExperience: React.CSSProperties = {
  fontSize: '18px',
}

const EmployerWorkDescription: React.CSSProperties = {
  marginTop: '12px',
  fontSize: '16px',
}

export const WorkExperience = () => {
  return (
    <>
      <ParagraphBlock title="Опыт работы: 1 год 2 месяца">
        <>
          <TextImageLayout
            imageProps={{
              src: workspace,
              preview: false,
            }}
            imageRight
          >
            <div>
              <Title
                style={EmployerTitle}
                level={H4_LEVEL}
              >
                АО П.ЦП - Фронтенд разработчик
              </Title>
              <Text
                style={EmployerTextExperience}
                type="secondary"
              >
                1 год 2 месяца
              </Text>
              <Paragraph style={EmployerWorkDescription}>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>Обязанности:</div>
                  - Разработка информационных систем <br />
                  - Разработка тестов своего кода
                  <br />
                  - Оформление технической документации сборки и тестирование своего кода
                  <br />
                  - Проведение ревью кода других разработчиков
                  <br />
                </div>
              </Paragraph>
            </div>
          </TextImageLayout>
          <div>
            <div style={{ marginTop: '12px', fontSize: '18px', fontWeight: '600' }}>На рабочем месте я:</div>
            <ul>
              <li>
                Разрабатывал сложные пользовательские интерфейсы, включающих в себя: формы длиной в несколько экранов с
                использованием react-final-form, таймлайны из нескольких страниц, сложные структуры данных для обработки
                и отображения;
              </li>
              <li>Занимался оптимизацией рендеринга существующих страниц и конфигурацией сборки бандла webpack;</li>
              <li>Реализовывал новые функции, планировал архитектуру, а также переписывал проекты на typescript;</li>
              <li>
                Написал скрипты для обновления и выкатки новых версий проектов, что позволило фронтенд команде
                доставлять новые версии на 60% быстрее.
              </li>
            </ul>
            Стек: React, Redux, Redux-thunk, Immutable, react-final-form, primereact, webpack, eslint
          </div>
        </>
      </ParagraphBlock>
    </>
  )
}
