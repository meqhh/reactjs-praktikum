import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Container, Paper, Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });
    
    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json',
                },
            })
            .then((res) => {
                setProfile(res.data);
                localStorage.setItem('profile', JSON.stringify(res.data));
                navigate('/dashboard', { state: { profile: res.data } });
            })
            .catch((err) => {
                console.log(err);
                setError('Failed to retrieve user profile');
            });
        }
    }, [user, navigate]);
    const handleSubmit = (e) => {
        e.preventDefault();
            if (username === 'admin' && password === '123'){
                const userProfile = {
                    name: username,
                    email: '',
                    picture: '',
                };
                localStorage.setItem('profile', JSON.stringify(userProfile));
                navigate('/dashboard');
            } else {
                setError('Invalid username or password');
            }};
    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ p:4, mt: 8 }}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button>
                    <Typography align="center" variant="body1" gutterBottom>
                        Or login with Google
                    </Typography>
                    <Button
                        onClick={login}
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ mt:1 }}>
                        Sign in with Google
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
export default LoginForm;