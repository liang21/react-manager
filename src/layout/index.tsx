import React from 'react'
import { Layout, Menu, theme } from 'antd'
import NavHeader from '@/components/layout/header'
import NavFooter from '@/components/layout/footer'
import SiderFC from '@/components/layout/sider'
import ContentFC from '@/components/layout/content'

const LayoutFC = () => {
  return (
    <Layout>
      <SiderFC />
      <Layout>
        <NavHeader />
        <ContentFC />
        <NavFooter />
      </Layout>
    </Layout>
  )
}

export default LayoutFC
