import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { ToggleConsumer } from '../../helpers/toggle.context'

const { Sider } = Layout

const MenuItems = () => (
  <ToggleConsumer>
    {({ isCollapsed }) => (
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div
          className='d-flex align-items-center justify-content-center'
          style={{ height: '60px' }}
        >
          <h4 className='text-white mb-0'>EgSphere Scanner</h4>
        </div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <Icon type='home' />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='user' />
            <span>Profiles</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )}
  </ToggleConsumer>
)

export { MenuItems }
