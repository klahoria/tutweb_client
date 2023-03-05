import './App.css';
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="container-fluid h-100-vh mx-0">
      <div className="row">
        <div className="vh-100 col-12">
          <Auth />
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
