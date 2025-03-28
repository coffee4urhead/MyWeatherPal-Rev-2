import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home-components/Home';
import AboutUs from './components/about-components/About';
import WeatherPage from './components/weather-page-components/WeatherPage'; 

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
