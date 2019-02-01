import './dashboard.scss'
import { Layout } from 'antd'
const { Content } = Layout
import React from 'react'
import { Toggle } from 'Helpers/toggle.context'
import { MenuItems } from 'Components/menu-items/menu'
import { EGSphereHeader } from 'Components/header/header'

const DashboardLayout = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Toggle>
        <MenuItems />
        <Layout>
          <EGSphereHeader />
          <Content className='content'>{children}</Content>
        </Layout>{' '}
      </Toggle>
    </Layout>
  )
}

export default DashboardLayout
