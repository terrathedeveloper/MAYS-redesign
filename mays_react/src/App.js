import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import './styles/default.css';
import './styles/bootstrap.min.css';
import './styles/font-awesome.min.css';
import './styles/slick.css';
import './styles/magnific-popup.css';
import About from './components/About';
import Causes from './components/Causes';
import Events from './components/Events';
import VolunteerContact from './components/VolunteerContact';
import Team from './components/Team';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Slider from './components/Slider';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    // preloader
    // header
    // slider
    // services
    // about
    // volunteer
    // causes
    // testimonials
    // events
    // volunteer2
    // footer
    // gototop

    <Router>
      <Preloader />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

const HomePage = () => {
  return (
    <>
      <Slider />
      <Services />
      <About />
      <VolunteerContact />
      <Causes />
      <Testimonials />
      <Events />
      <Team />
      <Footer />
      <GoToTop />
    </>

  )
}

export default App;
