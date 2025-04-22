import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Witaj w Cwelbert Shop!
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          Sklep polecany przez Alberta Zdechlaka, dla którego chomik zdechl
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" paragraph>
            Oferujemy najlepsze petardy i gotowce na rynku!
          </Typography>
          <Typography variant="body1" paragraph>
            Wszystkie produkty są testowane przez naszego eksperta - Alberta Zdechlaka.
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/products"
          sx={{ mt: 2 }}
        >
          Zobacz produkty
        </Button>
      </Box>
    </Container>
  );
};

export default Home; 