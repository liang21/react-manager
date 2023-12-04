import { Menu, theme } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { DesktopOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useState } from 'react'
import styles from './index.module.less'
import { useNavigate } from 'react-router-dom'
const MenuFC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const items = [
    {
      key: '1',
      icon: <DesktopOutlined />,
      label: '工作台'
    },
    {
      key: '2',
      icon: <TeamOutlined />,
      label: '系统管理',
      children: [
        {
          key: '3',
          icon: <UserOutlined />,
          label: '用户管理'
        }
        // {
        //   key: '22',
        //   icon: <VideoCameraOutlined />,
        //   label: '角色管理'
        // },
        // {
        //   key: '23',
        //   icon: <UploadOutlined />,
        //   label: '权限管理'
        // }
      ]
    }
  ]
  const handleClickLogo = () => {
    navigate('/home')
  }
  return (
    <div>
      <div className={styles.logo} onClick={handleClickLogo}>
        <img className={styles.img} src='/imgs/logo.png' alt='' />
        <span>后台管理系统</span>
      </div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} items={items} />
    </div>
  )
}

export default MenuFC
