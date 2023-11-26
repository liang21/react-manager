import { Breadcrumb, Dropdown, Switch } from 'antd'
import { MenuFoldOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import stypes from './index.module.less'
const NavHeader = () => {
  const breadList = [
    {
      title: '首页'
    },
    {
      title: '工作台'
    }
  ]
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '邮箱：JackMa@mars.com'
    },
    {
      key: '2',
      label: '退出登录'
    }
  ]
  return (
    <div className={stypes.navHeader}>
      <div className={stypes.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className='right'>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' style={{ marginRight: 10 }} />
        <Dropdown menu={{ items }}>
          <span>JackMa</span>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
