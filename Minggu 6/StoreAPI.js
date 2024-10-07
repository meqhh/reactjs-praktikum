import React, { useState, useEffect } from "react";
import {
    Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Grid, Card, CardContent, CardMedia, Rating
} from '@mui/material';
import {
    Menu as MenuIcon, AccountCircle, Logout as LogoutIcon,
    Dashboard as DashboardIcon, ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const StoreAPI = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [username, setUsername] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Data Fake Store
                    </Typography>
                    <IconButton color="inherit" onClick={handleMenu}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogout}>
                            <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                            Logout
                        </MenuItem>
                    </Menu>
                    {username && (
                        <Typography variant="body1" sx={{ ml: 2 }}>
                            Hello, {username}
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                variant="persistent"
                open={open}
                sx={{
                    '& .MuiDrawer-paper': {
                        position: 'fixed',
                        whiteSpace: 'nowrap',
                        width: open ? 240 : 0,
                        transition: 'width 0.3s',
                        boxSizing: 'border-box',
                        overflowX: open ? 'visible' : 'hidden',
                    },
                }}
            >
                <Toolbar>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <List>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/storeapi">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Data Fake Store" />
                    </ListItem>
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        Daftar Produk
                    </Typography>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <Card sx={{ height: '100%' }}>
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
            </Box>
        </Box>
    );
};

export default StoreAPI;
