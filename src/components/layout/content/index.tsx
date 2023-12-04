import { theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

const ContentFC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        <Outlet />
      </div>
    </Content>
  )
}
export default ContentFC
