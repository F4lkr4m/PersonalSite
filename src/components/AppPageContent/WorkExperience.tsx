import React from 'react'
import { ParagraphBlock } from '..'
import { TextImageLayout } from '..'

import { Typography } from 'antd'
import { H4_LEVEL } from '@/constants'
import { differenceInCalendarMonths, differenceInMonths, isBefore } from 'date-fns'
import { useIsMobile } from '@/hooks/useIsMobile'

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

interface WorkExperienceDates {
  begin: Date
  end?: Date
}

export interface WorkExperienceProps {
  title?: string
  dates?: WorkExperienceDates
  responsibilities?: string[]
  description?: string
  values?: string[]
  stack?: string
  img?: string
}

const indexToMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const nounGetter = (one: string, two: string, five: string) => {
  return (number: number) => {
    let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
      return five
    }
    n %= 10
    if (n === 1) {
      return one
    }
    if (n >= 2 && n <= 4) {
      return two
    }
    return five
  }
}

const getYearsNoun = nounGetter('год', 'года', 'лет')
const getMonthsNoun = nounGetter('месяц', 'месяца', 'месяцев')

const getWorkExperience = (dates: WorkExperienceDates) => {
  const { begin, end } = dates

  const endDate = end ?? new Date()

  const diff = differenceInCalendarMonths(endDate, begin)
  const months = diff % 12
  const years = Math.floor(diff / 12)

  const yearsString = `${years} ${getYearsNoun(years)}`
  const monthsString = `${months} ${getMonthsNoun(months)}`
  const beginMonth = begin.getMonth()

  const beginEndString = `${indexToMonth[beginMonth]} ${begin.getFullYear()} - ${
    end ? `${indexToMonth[end.getMonth()]} ${end.getFullYear()}` : 'По наст. время'
  }`

  switch (true) {
    case Boolean(years && months):
      return `${yearsString} ${monthsString} / ${beginEndString}`
    case Boolean(years):
      return `${yearsString} / ${beginEndString}`
    case Boolean(months):
      return `${monthsString} / ${beginEndString}`
  }
}

export interface WorkExperiencesProps {
  experiences: WorkExperienceProps[]
}

export const WorkExperiences = ({ experiences }: WorkExperiencesProps) => {
  const beginDate = experiences.reduce((acc, experience) => {
    const { dates } = experience
    const { begin } = dates ?? {}
    if (!begin) {
      return acc
    }

    if (isBefore(begin, acc)) {
      return begin
    }

    return acc
  }, new Date())

  const summaryWorkExperienceInMonths = differenceInCalendarMonths(new Date(), beginDate)
  const months = summaryWorkExperienceInMonths % 12
  const years = Math.floor(summaryWorkExperienceInMonths / 12)
  const summaryExperienceTitle = `Опыт работы: ${years} ${getYearsNoun(years)} ${months} ${getMonthsNoun(months)}`

  return (
    <ParagraphBlock title={summaryExperienceTitle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {experiences.map((experience) => (
          <WorkExperience
            key={experience.title}
            {...experience}
          />
        ))}
      </div>
    </ParagraphBlock>
  )
}

const WorkExperience = (props: WorkExperienceProps) => {
  const { title, dates, responsibilities, values, stack, img, description } = props
  const workExperienceString = dates ? getWorkExperience(dates) : ''
  const isMobile = useIsMobile()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextImageLayout
        imageProps={{
          src: img,
          preview: false,
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: isMobile ? '100%' : '320px',
            backgroundColor: '#303030',
            padding: '10px',
            borderRadius: '12px',
          },
        }}
        imageLeft
      >
        <div>
          {title && (
            <Title
              style={EmployerTitle}
              level={H4_LEVEL}
            >
              {title}
            </Title>
          )}
          {workExperienceString && (
            <Text
              style={EmployerTextExperience}
              type="secondary"
            >
              {workExperienceString}
            </Text>
          )}
          {description && <div>{description}</div>}
          {responsibilities?.length && (
            <Paragraph style={EmployerWorkDescription}>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '600' }}>Обязанности:</div>
                {responsibilities.map((responsibility) => (
                  <>
                    - {responsibility} <br />
                  </>
                ))}
              </div>
            </Paragraph>
          )}
        </div>
      </TextImageLayout>
      <div>
        <div style={{ marginTop: '12px', fontSize: '18px', fontWeight: '600' }}>На рабочем месте я:</div>
        {values?.length && (
          <ul>
            {values?.map((value) => (
              <li>{value}</li>
            ))}
          </ul>
        )}
        {stack && <>Стек: {stack}</>}
      </div>
    </div>
  )
}
