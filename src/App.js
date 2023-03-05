import './App.css';
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="container-fluid h-100-vh mx-0 p-sm-2">
      <div className="vh-100">
        <Auth />
        <div className="row">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
   
export default App;
