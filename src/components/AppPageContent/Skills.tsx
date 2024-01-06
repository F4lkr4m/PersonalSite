import React from 'react'
import { ParagraphBlock, ImageBackground } from '@/components'
import workspace from '@/assets/workspace.jpg'

export const Skills = () => {
  return (
    <>
      <ParagraphBlock title="Мои знания и навыки">
        <>
          <ul>
            <li>Обладаю глубокими знаниями Vanilla JavaScript, а также пишу код на TypeScript;</li>
            <li>
              Имею опыт использования таких библиотек как React, Mobx, Formik, Echarts, Redux, Redux-Thunk, React Final
              Form, Immutable.js. А также опыт использования библиотек UI-компонентов: AntDesign, PrimeReact;
            </li>
            <li>
              Отлично владею языками текстовой разметки и каскадных стилей HTML, CSS, SCSS, могу поддержать разговор по
              поводу использования различных методологий как BEM, CSS in JS, Helpers;
            </li>
            <li>Имею большой опыт конфигурации сборщиков приложений таких как Webpack и Vite;</li>
            <li>Знаю инструменты для статического анализа кода ESLint, Prettier;</li>
            <li>Ну и как бы никакая разработка не может быть без Git, GitHub, Gitlab;</li>
          </ul>
          <div>
            Если какой-то технологии или инструмента в данном разделе нет, то уверяю вас - оно будет освоено в
            кратчайшее время. А качество и надежность моей работы подкрепляется моим интересом и страстью, которые я
            питаю к программированию.
          </div>
        </>
      </ParagraphBlock>
      <ImageBackground
        src={workspace}
        title="Люди должны заниматься тем, чем они увлечены. Это сделает их счастливее скорее, чем что-либо еще."
        author="- Илон Маск"
      />
    </>
  )
}
