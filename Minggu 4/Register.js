import React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

function Register() {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Menampilkan data inputan dalam bentuk alert 
        alert(`
            Nama Lengkap: ${nama}
            Alamat: ${alamat}
            Email: ${email}
            Password: ${password} 
        `);
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div>
                    <TextField 
                        label="Nama Lengkap"
                        value={nama}
                        onChange={ (e) => setNama(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField 
                        label="Alamat"
                        value={alamat}
                        onChange={ (e) => setAlamat(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField 
                        label="Email"
                        type="email"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField 
                        label="Password"
                        type="password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Register;