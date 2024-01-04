import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import Project from './page/Project';
import Home from './page/Home';
import './bootstrap.min.css'
import Footer from './components/Footer';
import Auth from './components/Auth';
import { useContext } from 'react';
import { isAuthTokenContext } from './context/ContextShare';

function App() {
  const {isAuthenticated, setIsAuthenticated} = useContext(isAuthTokenContext)
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/register" element={<Auth register/>} />
        <Route path="/dashboard" element={isAuthenticated?<Dashboard dashboard/>:<Home/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
