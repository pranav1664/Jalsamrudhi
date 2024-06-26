import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import jalLogo from '../Image/jalLogo.jpg';

const Footer = () => {
  return (
    <footer
      style={{
        padding: '20px',
        backgroundColor: '#FFF',
        background: '##E6D0FF',
      }}
    >
      <Grid container spacing={3}>
        {/* First part: Contact Us information */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={jalLogo} // Replace this with your image URL
            alt="Logo" // Provide an alt text for accessibility
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              marginRight: '10px',
              marginBottom: '10px',
              marginTop: '5px',
            }}
          />
          <Typography variant="h6">Contact Us</Typography>
          <Typography>Mobile: +91 0000000000</Typography>
          <Typography>Email: test@gmail.com</Typography>
        </Grid>

        {/* Second part: Buttons for About Us, Terms and Conditions, etc. */}
        <Grid item xs={12} md={4}>
          <Grid item>
            <Typography variant="h6">Quick Links</Typography>
          </Grid>
          <Grid item>
            <Link to="/about">
              <Button color="primary">About Us</Button>
            </Link>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={() => alert('Terms and Conditions')}
            >
              Terms & Conditions
            </Button>
          </Grid>
          <Grid item>
            <Button color="primary" onClick={() => alert('Privacy Policy')}>
              Privacy Policy
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={() =>
                alert(`Mobile: +91 0000000000 Email: test@gmail.com`)
              }
            >
              Contact
            </Button>
          </Grid>
        </Grid>

        {/* Third part: Bank details and QR code image */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Bank Details</Typography>
          <Typography>Bank: XYZ Bank</Typography>
          <Typography>Branch: Nashik</Typography>
          <Typography>Account Number: 1234567890</Typography>
          <Typography>Name: Jal Samruddha Nashik</Typography>
          <Typography>IFSC Code: HDFCxxxxxxx</Typography>
          <img
            src="your_qr_code_image_url_here" // replace with your QR code image URL
            alt="QR Code"
            style={{ width: '100px', height: '100px', marginTop: '10px' }}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
