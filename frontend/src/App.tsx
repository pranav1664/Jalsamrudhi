import React, { useRef } from 'react';
import AboutUs from './components/aboutUs';
import Dashboard from './components/dashboard';
import Jsn from './components/jsn';
import Footer from './components/footer';
import HeroSection from './components/herosection';
import MediaGallery from './components/mediaGallery';
import SocialWall from './components/social_wall';
import AppRoutes from './routes/routes';
import Navbar from './components/nav-bar';
import { Grid } from '@mui/material';
import DonationPage from './components/donate';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const jsnRef = useRef<HTMLDivElement>(null);
  const socialWallRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  return (
    <Grid sx={{ marginLeft: '10px', marginRight: '10px' }}>
      <div className="max-w-screen-2xl mr-5">
        <Navbar
          heroRef={heroRef}
          aboutRef={aboutRef}
          dashboardRef={dashboardRef}
          jsnRef={jsnRef}
          socialWallRef={socialWallRef}
          donationRef={donationRef}
        />
        <div style={{ height: '100vh', overflow: 'hidden' }}>
          <HeroSection ref={heroRef} />
        </div>
        <Dashboard ref={dashboardRef} />
        {/* <AppRoutes /> */}
        <SocialWall ref={socialWallRef} />
        <MediaGallery />
        <DonationPage ref={donationRef} />
        <Jsn ref={jsnRef} />
        <AboutUs ref={aboutRef} />
        <Footer />
      </div>
    </Grid>
  );
}

export default App;
