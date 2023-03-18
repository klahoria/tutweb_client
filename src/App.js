import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard'
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="container-fluid h-100-vh mx-0">
      <div className="row">
        <Routes>
        <Route path="/"
            element={<Dashboard />}
          />
          <Route path="/blog"
            element={<Blog />}
          />
          <Route path="/login"
            element={<Auth />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
