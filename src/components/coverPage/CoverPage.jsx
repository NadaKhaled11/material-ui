import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import Cover from '../../assets/Cover.jpg';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg'
const CoverPage = () => {
  return (
    <Grid container spacing={3}>
      {/* Cover Image */}
      <Grid item xs={12}>
        <Paper elevation={3}>
        <img src={Cover} alt="Cover" style={{ width: '100%', height: 'auto' }}  />
          {/* <img src="" alt="Cover" style={{ width: '100%', height: 'auto' }} /> */}
         </Paper> 
      </Grid>
      
      {/*  Start Text Section */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to Our Website
          </Typography>
          <Typography variant="body1" align="justify" paragraph >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vitae temporibus impedit sunt illo bore veniam tempora eum, illum, enim tempore, culpa quisquam. Sit, ullam cum?his is a sample text describing your website. You can customize it as needed.
          </Typography>
        </Paper>
      </Grid>
      {/* End Text section */}

      {/*  Start Images Section */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper elevation={3}>
              {/* Your first image here */}
              <img src= {product1} alt="Image 1" style={{ width: '100%', height: '80%' }} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3}>
              {/* Your second image here */}
              <img src={product2} alt="Image 2" style={{ width: '100%', height: '80%' }} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3}>
              {/* Your third image here */}
              <img src={product3} alt="Image 3" style={{ width: '100%', height: '80%' }} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoverPage;
