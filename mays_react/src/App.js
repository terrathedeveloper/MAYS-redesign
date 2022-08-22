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
import PageContent from './components/PageContent';

// images for use 

// images for H2W page
import tents from './assets/images/tents.jpg';
import hood2woodsimage from "./assets/images/hoodtowoods-750x420.jpeg";
import helicopter from "./assets/images/helicopter.jpg";
import gangInt from "./assets/images/gangintervention.jpg";

//images for About Staff page
import teamPic from './assets/images/team.jpeg';
import about1 from './assets/images/about1.jpeg';
import parkteens from './assets/images/parkteens.jpg';



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
        <Route path="hood-to-woods" element={<Hood2WoodsPage />} />
        <Route path="about">
          <Route path="staff" element={<AboutPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}


const Hood2WoodsPage = () => {
  const content = {
    img: {
      main: hood2woodsimage,
      sub: [gangInt, helicopter]
    },
    title: "Widen the borders of possibility",
    blockquoteText: "all reported having exited the program with a heightened sense of self-worth",
    paragraphs: [
      "Funded by a grant through the City of Omaha Historical Society, the MAYS Foundation recently hosted a pilot program camping trip to Buena Vista, Colorado, and Colorado Springs, Colorado, for ten inner-city youths. The program was designed to expose the youths to novel experiences, far outside their norms, to challenge their fears and to build self-confidence in their abilities. Guides pressed attendees to overcome fears through rock-climbing and zip-lining before a group trail-ride on horseback. For many program students, it was their first encounter with real horses! ",
      "Once settled in Buena Vista, the campers spent two days white-water rafting and exploring the area around the Arkansas River. Building upon their previous experience climbing, the group rappelled down a mountain cliff, paired with partners from competing gang groups. Each team of campers was awarded points based on their ability to work cooperatively and their commitment to journaling about their experiences. The final goal of their involvement was a share of a prize pot, with the winning team receiving an additional $250 each.",
      "The majority of campers had spent their entire lives within the city of Omaha, and all reported having exited the program with a heightened sense of self-worth after facing the challenges set forth. Our mission throughout the program was to break down personal barriers to communication and overcoming internal adversities that drive many youth to quit. It is often observed that youth isolate themselves and feel discouraged when tested. As a response, Hood to the Woods seeks to remove this negative impression and reset their confidence through encouraging pressure and detachment from self-sabotaging habits.",
      "Only through providing opportunities for youths outside of their daily lives can they be instilled with the hope for their own futures. Daily experiences, reinforcing the small sizes of their worlds, can destroy a child's passion to explore and thereby grow. Be it due to financial difficulties at home or destructive environments around them, the Hood to the Woods program can combat weakened determination, tapping into a dormant part of their minds and reawakening critical thinking and imagination. This drive to see a world around them which does not yet exist is the fire which drives them toward life-long progress."
    ]
  }


  return (
    <>
      <PageBanner
        title="From the Hood to the Woods"
        img={tents}
        slug="hood-to-woods"
      />
      <PageContent content={content} />

    </>
  )
}

const AboutPage = () => {
  const customContent = (
    <>
      <p>Our 5 Pillars</p>
      <ul>
        <li>1. Vision</li>
        <li>2. Overcoming Adversity</li>
        <li>3. Passion</li>
        <li>4. Teachability</li>
        <li>5. Giving Back</li>
      </ul>
    </>
  )

  const content = {
    img: {
      main: teamPic,
      sub: [about1, parkteens]
    },
    title: "About the Staff",
    blockquoteHtml: customContent,
    paragraphs: [
      "Our experiences have taught us that there is a hero inside all of us. Our Heroes curriculum is based on 5 key pillars that we have identified to be consistent characteristics in a hero. These 5 pillars have been identified to help each client focus on how to become a better person and to take ownership of their personal development.",
      "While there is no way to “Fix” people, we know that the more options they have in their tool kit, the better youth will be at overcoming the trials that come their way throughout life. MAYS staff to student ratio allows us to provide students with a program tailored specifically to them, helping them to: Focus on behavioral issues at home or school, Transition back home from an out-of-home placement, Cultivate decision making skills, Promote positive peer relationships, Find ways to positively fill their idle time, Improve relationships with adults and authority figures, Develop resiliency, and Learn employment skills and search for a job",
      "A certified teacher on staff provides resources and opportunities for students to maintain or catch up academically, access to a personal trainer and martial arts instructor enables us to emphasize wellness and fitness, and participation in a community basketball league provides them a chance for practical application of social skills."
    ]
  }

  return (
    <>
      <PageBanner
        title="About Our Staff"
        img={teamPic}
        slug="about/staff"
      />
      <PageContent content={content} />
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
