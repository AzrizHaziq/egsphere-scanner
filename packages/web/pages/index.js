import React from 'react'
import { Button, Icon } from 'antd';
import { Machine } from 'Components/machine/machine'
import DashboardLayout from 'Layout/dashboard/dashboard'

export default () => (
  <DashboardLayout>
    <div className="py-2 text-right">
      <Button type="primary" htmlType='button'>
        <Icon
          type='cloud'
          className='pr-1'
          theme='twoTone'
          twoToneColor='#fff'
        />
        Add New Machine
      </Button>
    </div>
    <Machine />
  </DashboardLayout>
)
