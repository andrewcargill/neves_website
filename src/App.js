import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Container, CssBaseline, Box } from '@mui/material';
import About from './pages/About';
import Trees from './pages/Trees';
import Footer from './components/Footer';
import Education from './pages/Education';
import './App.css';
import Home from './pages/Home';
import Sculptures from './pages/Sculptures';


function App() {
  const [isReportMockUpLoaded, setIsReportMockUpLoaded] = useState(false);

  return (
    <div className="App">
      <Router>
        {!isReportMockUpLoaded && <Navigation />}
        <Container maxWidth="lg">
        <CssBaseline />
        <Box sx={{ paddingTop: { xs: 2, sm: 3, md: 4 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sculptures" element={<Sculptures />} />
            <Route path="/trees" element={<Trees />} />
            <Route path="/education" element={<Education />} />
            {/* Add more routes as needed */}
          </Routes>
       
          </Box>
   
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
