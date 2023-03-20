import React from 'react'
import { ParagraphBlock, TextImageLayout } from '..'
import { Typography } from 'antd'
import workspace from '@/assets/workspace.jpg'

const { Title } = Typography

export const Training = () => {
  return (
    <ParagraphBlock title="Курсы повышения квалификации">
      <>
        <TextImageLayout
          imageProps={{
            src: workspace,
            preview: false,
          }}
        >
          Какой-то текст
        </TextImageLayout>
      </>
    </ParagraphBlock>
  )
}
