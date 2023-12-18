import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './page/Dashboard';
import Project from './page/Project';
import Home from './page/Home';
import './bootstrap.min.css'
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/register" element={<Auth register/>} />
        <Route path="/dashboard" element={<Dashboard dashboard/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
