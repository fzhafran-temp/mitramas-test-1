import './Header.css';

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
    <div class="header">
      <PageHeader
        className="site-page-header"
        breadcrumb={{ routes }}
      />
      <div>

      </div>
    </div>
  );
}

export default Dashboard;
