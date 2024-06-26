import {
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import { Payment } from './Payment/payment';
import { Link } from 'react-router-dom';
import jalLogo from '../Image/jalLogo.jpg';

const DonationPage = forwardRef<HTMLDivElement>((props, ref) => {
  // Define state variables for the form inputs
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [requireTaxExemption, setRequireTaxExemption] = useState(false);
  const [panDetails, setPanDetails] = useState('NAN');

  const handleSubmit = () => {
    const priceNumber: number = parseFloat(price);
    Payment(priceNumber, name, email, parseInt(mobileNo), panDetails);
  };

  return (
    <div style={{ padding: '20px' }} ref={ref}>
      <Link to="/donate"></Link>
      <Typography
        variant="h4"
        sx={{
          marginLeft: '47%',
          marginBottom: '50px',
          display: 'flex',
          width: '170px',
          height: '66px',
          padding: '26px 37px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          borderRadius: '15px',
          background: '#FF5C01',
          color: '#FFF',
          boxShadow: '0px 10px 20px 0px #1F2022',
        }}
      >
        Donation
      </Typography>

      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {/* Contact information */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'white',
          }}
        >
          <Typography variant="h5">Contact Information</Typography>
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
          <Typography variant="h5">Mobile: +91 0000000000</Typography>
          <Typography variant="h5">Email: test@gmail.com</Typography>
          {/* Add any additional contact information here */}
        </Grid>

        {/* Donation form */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {/* Input for price */}
            <Grid item xs={6}>
              <TextField
                label="Enter amount you want to donate"
                type="number"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{ background: '#FFF' }}
                required
              />
            </Grid>

            {/* Input for name */}
            <Grid item xs={6}>
              <TextField
                label="Name as per PAN"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ background: '#FFF' }}
                required
              />
            </Grid>

            {/* Input for email */}
            <Grid item xs={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ background: '#FFF' }}
                required
              />
            </Grid>

            {/* Input for mobile number */}
            <Grid item xs={6}>
              <TextField
                label="Mobile No (+91)"
                type="tel"
                fullWidth
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                sx={{ background: '#FFF' }}
                inputProps={{ pattern: '\\+91[0-9]{10}' }} // Regex pattern to validate mobile number format
                required
              />
            </Grid>

            {/* Toggle button for 80G Tax Exemption Certificate */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={requireTaxExemption}
                    onChange={() =>
                      setRequireTaxExemption(!requireTaxExemption)
                    }
                    color="primary"
                  />
                }
                label="Require 80G Tax Exemption Certificate?"
              />
            </Grid>

            {/* Conditional input for PAN details */}
            {requireTaxExemption && (
              <Grid item xs={12}>
                <TextField
                  label="PAN Details"
                  fullWidth
                  value={panDetails}
                  onChange={(e) => setPanDetails(e.target.value)}
                  sx={{ background: '#FFF' }}
                  required
                />
              </Grid>
            )}

            {/* Proceed button */}
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                sx={{
                  display: 'inline-flex',
                  padding: '26px 54px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '18px',
                  background: '#FF5C01',
                  boxShadow: '0px 10px 20px 0px rgba(192, 192, 192, 0.35)',
                }}
              >
                Proceed
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});

export default DonationPage;
