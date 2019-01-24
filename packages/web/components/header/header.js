import './header.scss'
import React, { useContext } from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header } = Layout
import { ToggleContext } from './../../helpers/toggle.context'

const EGSphereHeader = () => {
  const { isCollapse, toggle } = useContext(ToggleContext)

  return (
    <Header className='header'>
      <Icon
        className='trigger pl-3'
        type={isCollapse ? 'menu-unfold' : 'menu-fold'}
        onClick={() => toggle()}
      />
      <Menu mode='horizontal' style={{ lineHeight: '60px' }}>
        <Menu.Item key='1'>Profile</Menu.Item>
      </Menu>
    </Header>
  )
}

export { EGSphereHeader }
