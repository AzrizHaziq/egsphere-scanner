import { Button, Icon } from 'antd'
import React, { useState } from 'react'
import { Machine } from 'Components/machine/machine'
import { AddNewMachine } from './add-new-machine.modal'

const Home = () => {
  const [ isModalOpen, setModal ] = useState(false)

  const handleModal = newState => setModal(() => setModal(newState))
  return (
    <>
      <div className='pb-2 text-right'>
        <Button type='primary' htmlType='button' onClick={() => setModal(true)}>
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
      <AddNewMachine setModal={handleModal} isModalOpen={isModalOpen} />
    </>
  )
}

export { Home }
