import './header.scss'
import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header } = Layout

const EGSphereHeader = () => (
  <Header className='header'>
    <Icon
      className='trigger pl-3'
      type={true ? 'menu-unfold' : 'menu-fold'}
    />
    <Menu
      mode="horizontal"
      defaultSelectedKeys={ ['2'] }
      style={ { lineHeight : '64px' } }
    >
      <Menu.Item key="3">Profile</Menu.Item>
    </Menu>
  </Header>
)

export { EGSphereHeader }
