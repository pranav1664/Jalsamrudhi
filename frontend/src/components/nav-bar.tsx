import React, { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import mainIcon from '../Image/mainIcon.jpg';

// Use styled for custom styles
const StyledAppBar = styled(AppBar)({
  flexGrow: 1,
});

const StyledTitle = styled(Typography)({
  flexGrow: 1,
});

interface NavbarProps {
  heroRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  dashboardRef: React.RefObject<HTMLDivElement>;
  jsnRef: React.RefObject<HTMLDivElement>;
  socialWallRef: React.RefObject<HTMLDivElement>;
  donationRef: React.RefObject<HTMLDivElement>;
}

const Navbar = ({
  heroRef,
  aboutRef,
  dashboardRef,
  jsnRef,
  socialWallRef,
  donationRef,
}: NavbarProps) => {
  // Scroll to the corresponding section/component when a button is clicked
  const scrollToSection = (ref: React.RefObject<any>) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledAppBar position="fixed" style={{ background: '#FFF' }}>
      <Toolbar>
        <Button color="inherit" onClick={() => scrollToSection(heroRef)}>
          <img
            src={mainIcon} // Replace this with your image URL
            alt="Logo" // Provide an alt text for accessibility
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px',
              marginBottom: '10px',
              marginTop: '5px',
            }}
          />
        </Button>
        <StyledTitle
          variant="h6"
          sx={{
            color: '#292F36',
            fontFamily: '"DM Serif Display"',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '125%',
          }}
        >
          JALSAMRUDHI
        </StyledTitle>
        <Link to="/about">
          <Button
            color="inherit"
            sx={{
              color: '#FF5C01',
              textAlign: 'center',
              fontFamily: 'Jost',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '125%',
            }}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </Button>
        </Link>
        <Grid
          sx={{
            color: '#292F36',
            fontFamily: 'Jost',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '125%',
          }}
        >
          <Button color="inherit" onClick={() => scrollToSection(dashboardRef)}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => scrollToSection(jsnRef)}>
            JSN
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(socialWallRef)}
          >
            Social Wall
          </Button>
        </Grid>
        <Button
          color="inherit"
          onClick={() => scrollToSection(donationRef)}
          sx={{
            display: 'flex',
            width: '141px',
            height: '44px',
            padding: '26px 37px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
            borderRadius: '18px',
            background: '#FF5C01',
            boxShadow: '0px 10px 20px 0px #1F2022',
            marginLeft: '2%',
          }}
        >
          Donate
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
