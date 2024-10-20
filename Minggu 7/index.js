import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App';
const theme = createTheme();
ReactDOM.render(
    <GoogleOAuthProvider clientId="725959035756-o8rkquv8nqv2oips1kufntn6kfellr01.apps.googleusercontent.com">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);