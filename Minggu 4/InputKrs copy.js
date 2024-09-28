import React from 'react';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

function InputKrs() {
    const [kode, setKode] = useState('');
    const [nama, setNama] = useState('');
    const [sks, setSks] = useState('');
    const [semester, setSemester] = useState('');
    const [dosen, setDosen] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Menampilkan data inputan dalam bentuk alert 
        alert(`
            Kode Mata Kuliah: ${kode}
            Nama Mata Kuliah: ${nama}
            SKS: ${sks}
            Semester: ${semester}
            Dosen: ${dosen}   
        `);
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Input Data KRS</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div>
                    <TextField 
                        label="Kode Mata Kuliah"
                        value={kode}
                        onChange={ (e) => setKode(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField 
                        label="Nama Mata kuliah"
                        value={nama}
                        onChange={ (e) => setNama(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField 
                        label="SKS"
                        type="number"
                        value={sks}
                        onChange={ (e) => setSks(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField 
                        label="Semester"
                        type="number"
                        value={semester}
                        onChange={ (e) => setSemester(e.target.value) }
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <TextField 
                        label="Dosen Pengajar"
                        value={dosen}
                        onChange={ (e) => setDosen(e.target.value) }
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

export default InputKrs