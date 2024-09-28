import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import Gambar2 from "./gambar2.jpg"

function Produk() {
    // State untuk menangani dialog yang terbuka berdasarkan produk yang dipilih
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Fungsi untuk membuka modal dan mengatur produk yang dipilih
    const handleClickOpen = (product) => {
        setSelectedProduct(product);
    };

    // Fungsi untuk menutup modal
    const handleClose = () => {
        setSelectedProduct(null);
    };

    return (
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
                        <Button onClick={() => handleClickOpen('A')} size="small" variant="contained" color="primary" sx={{ m: 2 }}>
                            Detail Produk
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
                            alt="Produk B"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Produk B
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Deskripsi produk B. Produk ini menawarkan harga yang kompetitif dengan kualitas terbaik.
                            </Typography>
                        </CardContent>
                        <Button onClick={() => handleClickOpen('B')} size="small" variant="contained" color="primary" sx={{ m: 2 }}>
                            Detail Produk
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
                            alt="Produk C"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Produk C
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Deskripsi produk C. Tersedia dengan fitur-fitur canggih untuk kebutuhan modern.
                            </Typography>
                        </CardContent>
                        <Button onClick={() => handleClickOpen('C')} size="small" variant="contained" color="primary" sx={{ m: 2 }}>
                            Detail Produk
                        </Button>
                    </Card>
                </Grid>

                {/* Modal untuk menampilkan detail produk */}
                <Dialog open={Boolean(selectedProduct)} onClose={handleClose}>
                    <DialogTitle textAlign={'center'}>Detail Produk {selectedProduct}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {selectedProduct === 'A' && (
                                <>
                                    <b>Nama Produk:</b> Produk A <br />
                                    <b>Deskripsi:</b> Deskripsi produk A. Ini adalah produk berkualitas tinggi dengan fitur terbaik. <br />
                                </>
                            )}
                            {selectedProduct === 'B' && (
                                <>
                                    <b>Nama Produk:</b> Produk B <br />
                                    <b>Deskripsi:</b> Deskripsi produk B. Produk ini menawarkan harga yang kompetitif dengan kualitas terbaik. <br />
                                </>
                            )}
                            {selectedProduct === 'C' && (
                                <>
                                    <b>Nama Produk:</b> Produk C <br />
                                    <b>Deskripsi:</b> Deskripsi produk C. Tersedia dengan fitur-fitur canggih untuk kebutuhan modern. <br />
                                </>
                            )}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" variant="contained">
                            Tutup
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Container>
    );
}

export default Produk;
