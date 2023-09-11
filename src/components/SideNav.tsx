import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { 
  HomeOutlined, 
  QuestionCircleOutlined, 
  DashboardOutlined, 
  UserOutlined,
  DesktopOutlined,
  PushpinOutlined,
  PoweroffOutlined
} from '@ant-design/icons/lib/icons';

const { Sider } = Layout;

const SideNav: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (  
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    <Menu
      onClick={({key}) => {navigate(key)}}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        {
          label: 'Home',
          key: '/',
          icon: <HomeOutlined />
        },
        {
          label: 'About',
          key: '/about',
          icon: <UserOutlined />
        },
        {
          label: 'Experience',
          key: '/experience',
          icon: <DesktopOutlined />
        },
        {
          label: 'Skills',
          key: '/skills',
          icon: <DashboardOutlined />
        },
        {
          label: 'Projects',
          key: '/projects',
          icon: <PushpinOutlined />
        },

      ]}
    >
  </Menu>
  </Sider>
  );
};

export default SideNav;