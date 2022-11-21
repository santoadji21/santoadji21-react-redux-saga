import { Box, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/index.jsx';
import Products from './components/Products/index.jsx';
import useProducts from './hooks/products/index.js';
import { addTocart } from './redux/actions';
import { getProductsList } from './redux/actions/products/index.js';

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const products = useSelector((state) => state.getProductsList);
  // const products = useProducts();

  const addToCart = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  React.useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);
  

  return (
    <div>
      <Header cartItems={cartItems} />

      <Box
        sx={{
          marginTop: '6rem'
        }}
      />
      {/* <Button onClick={() => dispatch(getProductsList())}>Get Products</Button> */}

      <Container maxWidth={'xl'}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.map((item, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Products
                key={item.id}
                title={item.title}
                price={`$${item.price}`}
                image={item.thumbnail}
                addToCart={() => dispatch(addTocart(addToCart(item.id)))}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
