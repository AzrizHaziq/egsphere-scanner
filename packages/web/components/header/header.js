import './header.scss'
import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header } = Layout
import { ToggleConsumer } from './../../helpers/toggle.context'

const EGSphereHeader = () => {
  return (
    <Header className='header'>
      <ToggleConsumer>
        {({isCollapsed, toggleCollapse }) => (
          <Icon
            className='trigger pl-3'
            type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggleCollapse}
          />
        )}
      </ToggleConsumer>
      <Menu mode='horizontal' style={{ lineHeight: '60px' }}>
        <Menu.Item key='1'>Profile</Menu.Item>
      </Menu>
    </Header>
  )
}

export { EGSphereHeader }
