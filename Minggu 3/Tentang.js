import React from "react";
import { Container, Typography, Grid, } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Tentang(){
    return(
        <Container>
            <Typography variant="h4" gutterBottom marginTop={8}>
                Halaman Tentang
            </Typography>
            <Typography variant="body1">
                Ini adalah halaman tentang kami. Di sini anda dapat menemukan informasi tentang perusahaan kami.
            </Typography>
            <Typography variant="h4" marginBottom={4} marginTop={4} textAlign="center">
                Tentang Kami
            </Typography>
            <Grid container marginTop={4} marginBottom={8}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Hubungi Kami
                    </Typography>
                    {/* Detail kontak */}
                    <Grid display="flex" alignItems="center" marginBottom={1}>
                        <PhoneIcon sx={{ marginRight: 1 }} />
                        <Typography variant="body1">
                            Nomor Kontak: +62 812 9274 9369
                        </Typography>
                    </Grid>
                    <Grid display="flex" alignItems="center" marginBottom={1}>
                        <EmailIcon sx={{ marginRight: 1 }} />
                        <Typography variant="body1">
                            Email: fazrimuhammadyazid@gmail.com
                        </Typography>
                    </Grid>
                    <Grid display="flex" alignItems="center">
                        <LocationOnIcon sx={{ marginRight: 1 }} />
                        <Typography variant="body1">
                            Alamat: Politeknik Negeri Batam
                        </Typography>
                    </Grid>
                </Grid>
                {/* Konten Kanan */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Lokasi Kami
                    </Typography>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0578062701443!2d104.0484566!3d1.1187204999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98921856ddfab%3A0xf9d9fc65ca00c9d!2sPoliteknik%20Negeri%20Batam!5e0!3m2!1sen!2sid!4v1726151753249!5m2!1sen!2sid" 
                    width="100%" 
                    height="180" 
                    style={{ border:0 }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
					title="Politeknik Negeri Batam"
                    ></iframe>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Tentang;