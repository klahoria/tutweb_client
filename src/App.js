import './App.css';
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="container-fluid h-100-vh px-0 p-sm-2">
      <div className="vh-100">
        <Auth />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
