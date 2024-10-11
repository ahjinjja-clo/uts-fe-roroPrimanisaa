import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Pendaftaran from './components/main/pendaftaran.jsx';
import Peserta from './components/main/peserta.jsx';
import Recruitment from './components/main/recruitment.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Pendaftaran />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/peserta" element={<Peserta />} />
        </Routes>
    </Router>  
  );
}

export default App
