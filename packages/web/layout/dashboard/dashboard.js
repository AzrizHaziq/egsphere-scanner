import './dashboard.scss'
import { Layout } from 'antd'
const { Content } = Layout
import React from 'react'
import { MenuItems } from '../../components/menu-items/menu'
import { EGSphereHeader } from '../../components/header/header'
import { Toggler } from './../../helpers/toggle.context'

const DashboardLayout = ({ children }) => {
  return (
    <Toggler>
      <Layout style={{ height: '100vh' }}>
        <MenuItems />
        <Layout>
          <EGSphereHeader />
          <Content className='content'>{children}</Content>
        </Layout>
      </Layout>
    </Toggler>
  )
}

export default DashboardLayout
