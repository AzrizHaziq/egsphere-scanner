import React from 'react'
import { Button, Icon } from 'antd'
import { Machine } from 'Components/machine/machine'

const Home = () => (
  <>
    <div className='py-2 text-right'>
      <Button type='primary' htmlType='button'>
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
  </>
)

export { Home }
