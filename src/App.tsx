import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#1a1a1a' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cwelbert Shop
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Strona główna
            </Button>
            <Button color="inherit" component={Link} to="/products">
              Produkty
            </Button>
            <Button color="inherit" component={Link} to="/cart">
              Koszyk
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
