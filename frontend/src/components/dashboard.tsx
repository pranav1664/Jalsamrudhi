import React, { useState, useEffect, forwardRef } from 'react';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import axios from 'axios';

interface Order {
  orderId: string;
  orderAmount: number;
  paymentId: string;
  name: string;
  email: string;
  mobileNo: string;
  msg: string;
}

const Dashboard = forwardRef<HTMLElement>((props, ref) => {
  const [ordersSum, setOrdersSum] = useState(0);

  useEffect(() => {
    // Fetch metrics data from server
    const fetchData = async () => {
      try {
        // Fetch orders and calculate the sum
        const sumResponse = await axios.get<Order[]>(
          'https://winjit-proj.vercel.app/order'
        );
        const ordersSum = sumResponse.data.reduce(
          (total: number, order: Order) => total + order.orderAmount,
          0
        );
        setOrdersSum(ordersSum);

        // Fetch other metrics data...
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ordersSum]);

  const totalDeSiltingProgress = (ordersSum / 5).toFixed(3);
  const desiltProg = parseFloat(totalDeSiltingProgress);
  const trucksCarriedOut = Math.ceil(desiltProg / 10000);
  const farmersBenefitted = Math.ceil(desiltProg / 2000);
  const areaCovered = (desiltProg / 5000).toFixed(3);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
      }}
      ref={ref}
    >
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          width: '743px',
          height: '208px',
          flexDirection: 'column',
          justifyContent: 'center',
          flexShrink: 0,
          color: '#000',
          fontFamily: '"DM Serif Display"',
          fontSize: '96px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '125%' /* 120px */,
          letterSpacing: '13.44px',
          marginLeft: '25%',
        }}
      >
        OUR IMPACT
      </Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {/* Donations today */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#FF5C01',
                  fontFamily: '"DM Serif Display"',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '100',
                  lineHeight: '80%',
                  letterSpacing: '0px',
                }}
              >
                Donations
              </Typography>
              <Typography variant="body1">₹ {ordersSum}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* De-silting progress today */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#FF5C01',
                  fontFamily: '"DM Serif Display"',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '100',
                  lineHeight: '80%',
                  letterSpacing: '0px',
                }}
              >
                De-silting Progress
              </Typography>
              <Typography variant="body1">0000</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total de-silting progress */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#FF5C01',
                  fontFamily: '"DM Serif Display"',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '100',
                  lineHeight: '80%',
                  letterSpacing: '0px',
                }}
              >
                Total De-silting Progress
              </Typography>
              <Typography variant="body1">
                {totalDeSiltingProgress} KG
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Trucks carried out */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#FF5C01',
                  fontFamily: '"DM Serif Display"',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '100',
                  lineHeight: '80%',
                  letterSpacing: '0px',
                }}
              >
                Trucks Carried Out
              </Typography>
              <Typography variant="body1">{trucksCarriedOut}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Donations for 80G tax exemption
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{color: '#FF5C01',fontFamily: '"DM Serif Display"',fontSize: '40px',fontStyle: 'normal',fontWeight: '100',lineHeight: '80%', letterSpacing: '0px'}}>
                Donations for 80G Tax Exemption
              </Typography>
              <Typography variant="body1">{donationsFor80G}</Typography>
            </CardContent>
          </Card>
        </Grid> */}

        {/* Farmers benefitted */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#FF5C01',
                  fontFamily: '"DM Serif Display"',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '100',
                  lineHeight: '80%',
                  letterSpacing: '0px',
                }}
              >
                Farmers Benefitted
              </Typography>
              <Typography variant="body1">{farmersBenefitted}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Area covered */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: '#FF5C01',
                  fontFamily: '"DM Serif Display"',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '100',
                  lineHeight: '80%',
                  letterSpacing: '0px',
                }}
              >
                Area Covered
              </Typography>
              <Typography variant="body1">{areaCovered} acres</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
});

export default Dashboard;
