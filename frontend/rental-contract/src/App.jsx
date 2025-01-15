import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import House from '../pages/House';
import Home from '../pages/Home';

function App() {
  return (
    
      <div className="mx-4 sm:mx-[10]">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses/:location" element={<House />} />
          <Route path="/houses" element={<House />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
