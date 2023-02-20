import React from 'react';
import { Button, Divider, Layout } from 'antd'
import { DESKTOP_DISPLAY_WIDTH } from '@/constants';
import { Typography } from 'antd';
import { AppHeader, AppContent, AppFooter, ImageBackground, ImageCard, TextImageLayout, ParagraphBlock } from '@/components';
import workspace from '@/assets/workspace.jpg';

const { Text } = Typography;


const layoutStyle: React.CSSProperties = {
  width: DESKTOP_DISPLAY_WIDTH,
  flexGrow: '1',
  backgroundColor: 'transparent',
  height: '100%',
  padding: '10px',
}

const App = () => {

  return (
      <Layout
        style={layoutStyle}
      >
        <AppHeader />
        <AppContent>
          <>
            <TextImageLayout 
              imageProps={{
                src: workspace,
                preview: false,
                style: {
                  borderRadius:'50%',
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                }
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
                  >
                    Контакты
                  </Button>
                  <Button
                    size="large"
                    
                  >
                    Резюме
                  </Button>
                </div>
              </div>
            </TextImageLayout>
            <ParagraphBlock
              title="Мои знания и навыки"
            >
              <ul>
                <li>
                  Обладаю глубокими знаниями Vanilla JavaScript, а также пишу код на TypeScript;
                </li>
                <li>
                  Имею опыт использования таких библиотек как React, Redux, Redux-Thunk, React Final Form, Immutable.js; 
                  А также опыт использования библиотек UI-компонентов: AndDesign, PrimeReact;
                </li>
                <li>
                  Отлично владею языками текстовой разметки и каскадных стилей HTML, CSS, SCSS, 
                  могу поддержать разговор по поводу использования различных методологий как BEM, CSS in JS, Helpers;
                </li>
                <li>
                  Имею большой опыт конфигурации сборщиков приложений таких как Webpack и Vite;
                </li>
                <li>
                  Знаю инструменты для статического анализа кода ESLint, Prettier;
                </li>
                <li>
                  Ну и как бы никакая разработка не может быть без Git, GitHub, Gitlab;
                </li>
              </ul>
            </ParagraphBlock>
            <ImageBackground 
              src={workspace}
              title="Как-то супермега крутой заголовок, хватающий за душу"
            />
            <ImageCard 
              src={workspace}
              preview={false}
            />
            <TextImageLayout 
              imageProps={{
                src: workspace,
                preview: false,
              }}
            >
              Какой-то текст содержащий описание или еще что то типа, что может быть полезным для человека
            </TextImageLayout>
            <TextImageLayout 
              imageProps={{
                src: workspace,
                preview: false,
              }}
              imageRight
            >
              Какой-то текст содержащий описание или еще что то типа, что может быть полезным для человека
            </TextImageLayout>
            <Divider style={{margin: '0'}} />
            <ParagraphBlock
              title="Какой то ебейший заголовок"
            >
              Текст содержащий описание, какой я ахуенный и крутой программист и что я являют гуру фронтенда и вообще очень классный и кудрявый парень
            </ParagraphBlock>
          </>
        </AppContent>
        <AppFooter />
      </Layout>
  )
}

export default App
