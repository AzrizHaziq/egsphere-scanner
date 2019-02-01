import React, { useState } from 'react'
import { Modal, Button, Icon, Col, Input } from 'antd'
const InputGroup = Input.Group

const AddNewMachine = ({ isModalOpen, setModal }) => {
  const [loading, setLoading] = useState(false)

  const handleCancel = () => setModal(false)
  const handleOk = e => console.log(e)

  return (
    <Modal
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      title={<Title />}
      footer={[
        <Button key='back' onClick={handleCancel} htmlType='button'>
          Cancel
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
      <div className='mb-3'>
        <label htmlFor='username'>Username: </label>
        <Input id='username' placeholder='root' />
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>Password: </label>
        <Input.Password id='password' placeholder='passwd' />
      </div>
      <div className='mb-3'>
        <label htmlFor='ip-address'>IP Address: </label>
        <InputGroup id='ip-address'>
          <Col span={4}>
            <Input maxLength={3} placeholder='162' />
          </Col>
          <Col span={4}>
            <Input maxLength={3} placeholder='198' />
          </Col>
          <Col span={4}>
            <Input maxLength={3} placeholder='2' />
          </Col>
          <Col span={4}>
            <Input maxLength={3} placeholder='254' />
          </Col>
        </InputGroup>
      </div>
      <div className='mb-3'>
        <label htmlFor='port'>Port: </label>
        <Input placeholder='eg: 32' id='port' />
      </div>
    </Modal>
  )
}

const Title = () => (
  <>
    <Icon
      type='cloud'
      className='pr-1'
      theme='twoTone'
      twoToneColor='#1890ff'
    />
    <span className='text-primary'>Add new Machine</span>
  </>
)

export { AddNewMachine }
