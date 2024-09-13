import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import Gambar2 from "./gambar2.jpg"

function Produk(){
    return(
        <Container>
            <Typography variant="h4" gutterBottom marginTop={8}>
                Halaman Produk
            </Typography>
            <Typography variant="body1">
                Ini adalah halaman produk. Di sini anda dapat menemukan berbagai produk yang kami tawarkan.
            </Typography>
            <Typography variant="h4" marginTop={3} marginBottom={1} textAlign="center">
                Produk Kami
            </Typography>
            <Grid container spacing={4} marginBottom={3}>
                {/* Produk pertama */}
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
                                Produk B
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Deskripsi produk B. Produk ini menawarkan harga yang kompetitif dengan kualitas terbaik.
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
                            image={Gambar2}
                            alt="Produk A"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Produk C
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Deskripsi produk C. Tersedia dengan fitur-fitur canggih untuk kebutuhan modern
                            </Typography>
                        </CardContent>
                        <Button size="small" variant="contained" color="primary" sx={{ m: 2 }}>
                            Beli Sekarang
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Produk;