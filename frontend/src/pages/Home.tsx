import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome to CI/CD Practice
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="textSecondary">
          A modern web application for practicing CI/CD pipelines
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Frontend
            </Typography>
            <Typography paragraph>
              Built with React, TypeScript, and Material-UI for a modern user experience.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              Backend
            </Typography>
            <Typography paragraph>
              Powered by Node.js, Express, and MongoDB for robust data handling.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" component="h3" gutterBottom>
              CI/CD
            </Typography>
            <Typography paragraph>
              Integrated with Jenkins for automated testing, building, and deployment.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          component={RouterLink}
          to="/register"
          variant="contained"
          size="large"
          sx={{ mr: 2 }}
        >
          Get Started
        </Button>
        <Button
          component={RouterLink}
          to="/login"
          variant="outlined"
          size="large"
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Home; 