import React from 'react';
import Grid from '@mui/material/Grid';
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardMedia, CardContent } from '@mui/material';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import Person from '@mui/icons-material/Person';
import logo from './logo.png';
import Produk from './Produk';  // Komponen Produk
import Tentang from './Tentang';  // Komponen Tentang
import Register from './Register';  // Komponen Register
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Gambar1 from "./gambar1.jpg";
import Gambar2 from "./gambar2.jpg";
import Gambar3 from "./gambar3.png";
import Gambar4 from "./gambar4.jpg";

function Layout() {
  // Pengaturan slider 
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="sticky" sx={{ backgroundColor: '#4caf50' }}>
                <Toolbar>
                <img src={logo} alt="Logo" style={{ height: '40px', marginRight: 'auto' }} />
                <Button component={RouterLink} to="/" color="inherit" startIcon={<HomeIcon />}>Beranda</Button>
                <Button component={RouterLink} to="/produk" color="inherit" startIcon={<StoreIcon />}>Produk</Button>
                <Button component={RouterLink} to="/tentang" color="inherit" startIcon={<InfoIcon />}>Tentang</Button>
                <Button component={RouterLink} to="/register" color="inherit" startIcon={<Person />}>Register</Button>
                </Toolbar>
            </AppBar>
        <Slider {...settings}>
            <div>
            <img 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            src= {Gambar1}
            alt="Slide 1" 
            />
            </div>
            <div>
            <img 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            src= {Gambar2}
            alt="Slide 2" 
            />
            </div>
            <div>
            <img 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            src= {Gambar3}
            alt="Slide 2" 
            />
            </div>
            <div>
            <img 
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            src= {Gambar4}
            alt="Slide 2" 
            />
            </div>
        </Slider>
        <Container sx={{ flex: 1 }}>
            <Routes>
                <Route path="/" element={
                    <Box mt={5} marginBottom={4}>
                        <Typography variant="h4" gutterBottom>
                            Selamat datang di website kami
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            Produk terlaris
                        </Typography>
                        
                        {/* Menampilkan produk sejajar ke samping */}
                        <Grid container spacing={4}>
                            {/* Produk pertama */}
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        height="200"
                                        image={Gambar1}
                                        alt="Produk A"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Produk A
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Deskripsi produk A. Ini adalah produk berkualitas tinggi dengan fitur terbaik
                                        </Typography>
                                    </CardContent>
                                    <Button size="small" variant="contained" color="primary" sx={{ m: 2 }}>
                                        Beli Sekarang
                                    </Button>
                                </Card>
                            </Grid>
                            {/* Produk kedua */}
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        height="200"
                                        image={Gambar2}
                                        alt="Produk A"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Produk A
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Deskripsi produk A. Ini adalah produk berkualitas tinggi dengan fitur terbaik
                                        </Typography>
                                    </CardContent>
                                    <Button size="small" variant="contained" color="primary" sx={{ m: 2 }}>
                                        Beli Sekarang
                                    </Button>
                                </Card>
                            </Grid>
                            {/* Produk ketiga */}
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardMedia 
                                        component="img"
                                        height="200"
                                        image={Gambar3}
                                        alt="Produk A"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Produk A
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Deskripsi produk A. Ini adalah produk berkualitas tinggi dengan fitur terbaik
                                        </Typography>
                                    </CardContent>
                                    <Button size="small" variant="contained" color="primary" sx={{ m: 2 }}>
                                        Beli Sekarang
                                    </Button>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                } />
                <Route path="/produk" element={<Produk />} />
                <Route path="/tentang" element={<Tentang />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Container>
        <Box component="footer" sx={{ bgcolor: '#4caf50', color: '#fff', py: 3, mt: 'auto' }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Alamat
                        </Typography>
                        <Typography variant="body2">
                            JL. Contoh No. 123<br />Kota, Negara 12345<br />Telepon: (123) 456-7890
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Find Us On!
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </div>
    );
    }

export default Layout;