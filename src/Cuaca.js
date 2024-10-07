import React, { useState } from "react";
import { Container, TextField, Button, Typography, Card, CardContent  } from "@mui/material";

const Cuaca = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const apiKey = '181e12645eb508635b4bce1e19559267';
    
    const fetchWeather = () => {
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Kota Tidak Ditemukan');
                }
                return res.json();
            })
            .then((data) => {
                setWeatherData(data);
                setError('');
            })
            .catch((err) => setError(err.message));
        }
    };
    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Cari Cuaca Kota
            </Typography>
            <TextField
                label="Masukkan nama kota"
                variant="outlined"
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button 
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '1rem' }}
                onClick={fetchWeather}
            >
                Cari
            </Button>
            {error && (
                <Typography color="error" align="center" style={{ marginTop: '1rem' }}>
                    {error}
                </Typography>
            )}

            {weatherData && (
                <Card style={{ marginTop: '2rem' }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {weatherData.name}, {weatherData.sys.country}
                        </Typography>
                        <Typography variant="h6">
                            Suhu: {weatherData.main.temp}°C
                        </Typography>
                        <Typography variant="body1">
                            Kondisi: {weatherData.weather[0].description}%
                        </Typography>
                        <Typography variant="h5">
                            Kecepatan Angin: {weatherData.wind.speed} m/s
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );

};

export default Cuaca;