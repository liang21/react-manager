import React, { useState } from 'react'
import styles from './index.module.less'
import { Button, Form, Input, message } from 'antd'
import { Login } from '@/types/api'
import api from '@/api'
import storage from '@/utils/storage'
function LoginFC() {
  const [loading, setLoading] = useState(false)
  const onFinish = async (values: Login.Params) => {
    setLoading(true)
    const data = await api.login(values)
    setLoading(false)
    console.log('Success:', values)
    storage.set('token', data)
    message.success('登录成功')

    const params = new URLSearchParams(location.search)
    location.href = params.get('callback') || '/home'
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginTitle}>系统登录</div>
        <Form name='basic' initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <Form.Item name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item name='userPwd' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type='primary' block htmlType='submit' loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginFC
