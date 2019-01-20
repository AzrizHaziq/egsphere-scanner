import './header.scss'
import React, { useContext } from 'react'
import { Layout, Menu, Icon } from 'antd'

const { Header } = Layout
import { CollapsibleCtx } from '../../useHook/collapsible-header'

const EGSphereHeader = () => {
  const { isCollapsible, setCollapsible } = useContext(CollapsibleCtx)

  return (
    <Header className='header'>
      <Icon
        className='trigger pl-3'
        type={ isCollapsible ? 'menu-unfold' : 'menu-fold' }
        onClick={() => setCollapsible(!isCollapsible)}
      />
      <Menu mode='horizontal' style={ { lineHeight : '60px' } }>
        <Menu.Item key='1'>Profile</Menu.Item>
      </Menu>
    </Header>
  )
}

export { EGSphereHeader }
