import React, { useState } from 'react'
import { Modal, Button, Icon } from 'antd'

const AddNewMachine = ({ isModalOpen, setModal }) => {
  const [ loading, setLoading ] = useState(false)

  const handleCancel = () => setModal(false)
  const handleOk = (e) => console.log(e)

  return (
    <Modal
      visible={isModalOpen}
      title={
        <>
          <Icon
            type='cloud'
            className='pr-1'
            theme='twoTone'
            twoToneColor='#1890ff'
          />
          <span className='text-primary'>Add new Machine</span>
        </>
      }
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key='back' onClick={handleCancel} htmlType='button'>
          Return
        </Button>,
        <Button
          key='submit'
          type='primary'
          loading={loading}
          onClick={handleOk}
          htmlType='submit'
        >
          Submit
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export { AddNewMachine }
