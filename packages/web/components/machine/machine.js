import React from 'react'
import { Card, Icon, Row, Col, List, Skeleton, Tooltip } from 'antd'

function Machine() {
  return (
    <Card
      title={
        <div>
          <Icon
            type='cloud'
            className='pr-1'
            theme='twoTone'
            twoToneColor='#1890ff'
          />
          <span className='text-primary'>Server Name</span>
        </div>
      }
      extra={<a href='#'>More</a>}
      className='rounded shadow-b-1'
    >
      <Row>
        <Col span={6} className='pr-1 font-weight-bold'>
          Username:{' '}
        </Col>
        <Col span={18} className='text-muted'>
          example
        </Col>
      </Row>
      <Row>
        <Col span={6} className='pr-1 font-weight-bold'>
          Password:{' '}
        </Col>
        <Col span={18} className='text-muted'>
          *******
        </Col>
      </Row>
      <Row>
        <Col span={6} className='pr-1 font-weight-bold'>
          IP Address:{' '}
        </Col>
        <Col span={18} className='text-muted'>
          192.182.23.28
        </Col>
      </Row>
      <Row>
        <Col span={6} className='pr-1 font-weight-bold'>
          Port:{' '}
        </Col>
        <Col span={18} className='text-muted'>
          32
        </Col>
      </Row>

      <div className='pt-4'>
        <h3 className='font-weight-bold text-primary'>
          <Icon
            type='hdd'
            className='pr-1'
            theme='twoTone'
            twoToneColor='#1890ff'
          />
          Scan History
        </h3>
        <List
          className='demo-loadmore-list'
          loading={false}
          itemLayout='horizontal'
          dataSource={[1, 2, 3]}
          renderItem={item => (
            <List.Item
              actions={[
                <div>
                  <Icon type='clock-circle' className='d-inline ml-auto pr-1' />
                  <Tooltip title='scanned at'>
                    <h6 className='d-inline text-muted-50'>23/02/2019</h6>
                  </Tooltip>
                </div>,
                <a className='mr-2'>edit</a>,
                <a>more</a>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  title={
                    <div className='d-flex align-items-center'>
                      <h4 className='pr-3 text-primary mb-0'>Scan 1</h4>
                    </div>
                  }
                  description='lorem ipsum dolor emmet...asdasdasd asd ada sdasd asdasda dad aads'
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </Card>
  )
}

export { Machine }
