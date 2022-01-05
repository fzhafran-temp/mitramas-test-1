import './Dashboard.css';

import { PageHeader } from 'antd';

function Dashboard() {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Perusahaan',
    },
    {
      path: 'first',
      breadcrumbName: 'Mitramas Infosys Global',
    }
  ];

  return (
    <div>
      <div class="header">
        <PageHeader
          className="site-page-header"
          breadcrumb={{ routes }}
        />
        <div class="profile-container">
          <img src={require('../../assets/img/search-alert.png')} alt="search-and-alert"/>
          <div class="profile">
            <div class="profile-image" />
            John Doe
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
