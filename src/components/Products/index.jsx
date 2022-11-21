import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { ShoppingCart } from '@mui/icons-material';
import { Skeleton } from '@mui/material';

function Products({ title, price, image, description, addToCart }) {
  const [loading, setLoading] = React.useState(true);

  const handlerSkeleton = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    handlerSkeleton();
    loading;
  }, [setLoading]);

  const renderSkeleton = () => {
    return (
      <React.Fragment>
        <Skeleton variant="rectangular" width={345} height={140} />
        <Skeleton
          sx={{
            mt: '0.5rem'
          }}
          width={100}
        />
        <Skeleton width={100} />
        <Skeleton
          sx={{
            mt: '1.5rem'
          }}
          width={200}
          height={40}
        />
      </React.Fragment>
    );
  };
  return (
    <>
      {loading ? (
        renderSkeleton()
      ) : (
        <Card sx={{ maxWidth: 345, height: '100%' }}>
          <CardMedia loading="lazy" component="img" alt={title} height="140" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium" color="primary" startIcon={<ShoppingCart />} onClick={addToCart}>
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default Products;
