import React, {useState, useEffect} from "react";
import {
    Container, Grid, Card, CardContent, Typography, CardMedia, Rating
} from '@mui/material';

const StoreAPI = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }, []);
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Daftar Produk
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12}
                    sm={6} md={4}>
                        <Card sx ={{ height: '100%'}}>
                            <CardMedia 
                                component="img"
                                image={product.image}
                                alt={product.title}
                                sx={{ height: 250, objectFit: 'contain' }}
                            />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.category}
                            </Typography>
                            <Typography variant="body1" color="primary" gutterBottom>
                                ${product.price}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {product.description.substring(0, 100)}...
                            </Typography>
                            <Rating value={product.rating.rate} readOnly precision={0.5} />
                            <Typography variant="caption" color="textSecondary">
                                ({product.rating.count} reviews)
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
export default StoreAPI;