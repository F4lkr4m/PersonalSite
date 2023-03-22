import React from 'react'
import { ParagraphBlock, TextImageLayout } from '..'
import { Divider, Typography } from 'antd'
import park from '@/assets/park.jpg'
import mgtu from '@/assets/mgtu.jpg'
import { H4_LEVEL } from '@/constants'

const { Title, Paragraph } = Typography

export const Training = () => {
  return (
    <ParagraphBlock title="Курсы повышения квалификации">
      <>
        <TextImageLayout
          imageProps={{
            src: park,
            preview: false,
          }}
        >
          <div style={{ width: '100%' }}>
            <Title level={H4_LEVEL}>НИЦ "Технопарк" Курс "Подготовительная программа С/С++"</Title>
            <Paragraph style={{ fontSize: '16px' }}>
              Курс посвящен изучению и реализации основных принципов объектно-ориентированного и обобщенного
              программирования на языке С++. В ходе семестра студенты делятся на команды и под руководством менторов
              разрабатывают полноценный проект.
              <br />
              <br /> Итоговый проект - онлайн игра-сайд-скроллер
              <br />
              <br /> Длительность: 1 семестр
            </Paragraph>
          </div>
        </TextImageLayout>
        <Divider />
        <TextImageLayout
          imageProps={{
            src: mgtu,
            preview: false,
          }}
          imageLeft
        >
          <div style={{ width: '100%' }}>
            <Title level={H4_LEVEL}>НИЦ "Технопарк" Курс "Веб-разработчик"</Title>
            <Paragraph style={{ fontSize: '16px', marginBottom: '0' }}>
              Курс посвящен подготовке веб разработчиков с хорошей базой в программировании в целом. В течение двух
              семестров, поступившие осваивают такие курсы как "Углубленное программирование C/C++", "Основы
              веб-технологий", "Алгоритмы и структуры данных", "Разработка веб-сервисов на Golang",
              "Frontend-разработка", "СУБД", "Проектирование интерфейсов"
            </Paragraph>
          </div>
        </TextImageLayout>
        <div>
          <br /> - По окончании первого семестра команда из 3-4х человек разрабатывает проект на C++, у нас это был
          видеочат, написанный на Qt, вместе с серверами на boost
          <br /> - По итогу второго семестра пишется проект в группе из 4х человек, у нас это был аналог Delivery Club,
          где фронтенд составляющая была написана на чистом JS в компании Handlebars и Webpack.
          <br />{' '}
          <a href="https://github.com/frontend-park-mail-ru/2021_2_GORYACHIE_MEKSIKANSI">
            https://github.com/frontend-park-mail-ru/2021_2_GORYACHIE_MEKSIKANSI
          </a>
          <br />
          <br /> Длительность: 2 семестра
        </div>
      </>
    </ParagraphBlock>
  )
}
