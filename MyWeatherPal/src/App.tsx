import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home-components/Home';
import AboutUs from './components/about-components/About';
import WeatherPage from './components/weather-page-components/WeatherPage'; 
import TermsAndServices from './components/home-components/footer-service components/TermsAndServices';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/terms-and-services' element={<TermsAndServices/>}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
