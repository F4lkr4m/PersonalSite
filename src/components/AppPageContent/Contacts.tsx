import React from 'react'
import { ParagraphBlock } from '..'

const contactsParagraphBlockStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  rowGap: '12px',
  fontSize: '18px',
}

export const Contacts = () => {
  return (
    <ParagraphBlock title="Контакты">
      <div
        id="contacts"
        style={contactsParagraphBlockStyle}
      >
        <div>
          Telegram: <a href="https://t.me/Falkr4m">https://t.me/Falkr4m</a>
        </div>
        <div>Email: falkr4m@yandex.ru</div>
      </div>
    </ParagraphBlock>
  )
}
