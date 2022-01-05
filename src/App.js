import Dashboard from './modules/views/Dashboard';
import Sidebar from './modules/components/Sidebar/Sidebar';

import './App.css';

function App() {
  return (
    <div class="App">
      <Sidebar />
      <div class="content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
