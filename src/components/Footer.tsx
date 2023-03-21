import React from 'react'
import { Layout } from 'antd'
import Icon from '@ant-design/icons'
import { Typography } from 'antd'
import { ReactComponent as vkIcon } from 'assets/vk-icon.svg'
import { ReactComponent as telegramIcon } from 'assets/telegram-icon.svg'
import { ReactComponent as githubIcon } from 'assets/github-icon.svg'

const { Text } = Typography
interface ContactIcon {
  component: React.FC<React.SVGProps<SVGSVGElement>>
  href: string
}

const contactIcons: ContactIcon[] = [
  {
    component: telegramIcon,
    href: 'https://t.me/Falkr4m',
  },
  {
    component: githubIcon,
    href: 'https://github.com/F4lkr4m',
  },
]

const iconStyle: React.CSSProperties = {
  fontSize: '28px',
  cursor: 'pointer',
}

const footerStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0',
}

const contactButtonsContainter: React.CSSProperties = {
  display: 'flex',
  columnGap: '12px',
}

const { Footer } = Layout

export const AppFooter = () => {
  return (
    <>
      <Footer style={footerStyle}>
        <Text>Made by Shcherbakov</Text>
        <div style={contactButtonsContainter}>
          {contactIcons.map((icon) => {
            const routeToHref = () => {
              window.open(icon.href)
            }

            return (
              <Icon
                style={iconStyle}
                onClick={routeToHref}
                component={icon.component}
              />
            )
          })}
        </div>
      </Footer>
    </>
  )
}
