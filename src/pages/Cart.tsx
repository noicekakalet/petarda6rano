import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Divider,
} from '@mui/material';

const Cart = () => {
  
  const cartItems = [
    { id: 1, name: 'Petarda Mega Huk', price: 19.99, quantity: 2 },
    { id: 2, name: 'Gotowiec Premium', price: 29.99, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4, mb: 4 }}>
        Twój koszyk
      </Typography>
      <List>
        {cartItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem>
              <ListItemText
                primary={item.name}
                secondary={`${item.quantity} x ${item.price} zł`}
              />
              <Typography variant="body1">
                {(item.price * item.quantity).toFixed(2)} zł
              </Typography>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Typography variant="h6" gutterBottom>
          Razem: {total.toFixed(2)} zł
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Złóż zamówienie
        </Button>
      </Box>
    </Container>
  );
};

export default Cart; 