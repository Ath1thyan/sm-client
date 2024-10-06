import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Audit from './pages/Audit';
import About from './pages/About';
import Contact from './pages/Contact';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import { useState } from 'react';
import TeamMembers from './pages/TeamMembers';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/team' element={<Team />} />
        <Route path='/audit' element={<Audit />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* Protecting these routes */}
        <Route 
          path='/contacts' 
          element={isAuthenticated ? <Contacts /> : <Navigate to="/adminDash" />} 
        />
        <Route 
          path='/team-members' 
          element={isAuthenticated ? <TeamMembers /> : <Navigate to="/adminDash" />} 
        />
        
        <Route 
          path='/adminDash' 
          element={isAuthenticated ? <AdminDashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
