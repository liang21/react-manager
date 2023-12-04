import React from 'react'
import { Layout } from 'antd'
import NavHeader from '@/components/layout/header'
import NavFooter from '@/components/layout/footer'
import MenuFC from '@/components/layout/menu'
import ContentFC from '@/components/layout/content'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'
const { Sider, Content } = Layout
const LayoutFC = () => {
  return (
    <Layout>
      <Sider>
        <MenuFC />
      </Sider>
      <Layout>
        <NavHeader />
        <Content className={styles.content}>
          <div className={styles.wrapper}>
            <Outlet></Outlet>
          </div>
          <NavFooter />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutFC
