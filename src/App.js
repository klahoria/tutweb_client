import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import { Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid h-100-vh">
      <div className="row h-100">
        <Auth />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
