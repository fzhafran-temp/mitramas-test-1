import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './Sidebar.css';

const { SubMenu } = Menu;

function Sidebar() {
  function handleClick(e) {
    console.log('click ', e);
  };

  return (
    <div class="Sidebar">
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="vertical"
        inlineCollapsed={true}
      >
        <img src={require('../../../assets/img/logo.png')} class='logo' alt="logo"/>
        <SubMenu key="0" icon={<MailOutlined />} title="Navigation One">
        </SubMenu>
        <SubMenu key="1" icon={<AppstoreOutlined />} title="Navigation Two">
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        </SubMenu>
      </Menu>
    </div>
  );
}

export default Sidebar;