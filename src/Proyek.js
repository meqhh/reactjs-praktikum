import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography
} from '@mui/material';
function Proyek() {
    const [proyek, setProyek] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/lks/api/proyeks')
            .then(response => response.json())
            .then(data => {
                setProyek(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fatching data: ', error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <CircularProgress />;
    }
    return (
        <TableContainer component={Paper} style={{ marginTop: '20px', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Data Proyek</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nama Proyek</TableCell>
                        <TableCell>Alamat Proyek</TableCell>
                        <TableCell>Jumlah Manpower</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Tanggal Mulai</TableCell>
                        <TableCell>Estimasi Selesai</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {proyek.map((row) => {
                        // Map status values to display labels
                        let statusLabel;
                        switch (row.status) {
                            case 'berjalan':
                                statusLabel = 'Berjalan';
                                break;
                            case 'belum_mulai':
                                statusLabel = 'Belum Mulai';
                                break;
                            case 'batal':
                                statusLabel = 'Batal';
                                break;
                            default:
                                statusLabel = 'Unknown'; // Handle any unexpected status values
                        }

                        return (
                            <TableRow key={row.id}>
                                <TableCell>{row.nama_proyek}</TableCell>
                                <TableCell>{row.alamat_proyek}</TableCell>
                                <TableCell>{row.jumlah_manpower}</TableCell>
                                <TableCell>{statusLabel}</TableCell>
                                <TableCell>{row.tanggal_mulai}</TableCell>
                                <TableCell>{row.estimasi_selesai}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Proyek;