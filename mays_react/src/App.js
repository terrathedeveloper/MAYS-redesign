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
import PageBanner from './components/PageBanner';

// images for use 
import tents from './assets/images/tents.jpg';


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
        <Route path="about">
          <Route path="staff" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

const AboutPage = () => {
  return (
    <>
      <PageBanner 
        title="From the Hood to the Woods"
        img={tents}
        slug="about"
      />

    </>
  )
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
