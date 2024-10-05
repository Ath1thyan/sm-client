import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Audit from './pages/Audit';
import About from './pages/About';
import Contact from './pages/Contact';
import Contacts from './pages/Contacts';
import Login from './pages/Login'; // Import the Login component
import { useState } from 'react';

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
        
        {/* Conditional rendering for Contacts */}
        <Route 
          path='/contacts' 
          element={isAuthenticated ? <Contacts /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
