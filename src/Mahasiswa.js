import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography
} from '@mui/material';
function Mahasiswa() {
    const [mahasiswa, setMahasiswa] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/api/mahasiswa')
            .then(response => response.json())
            .then(data => {
                setMahasiswa(data);
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
        <TableContainer component={Paper}>
            <Typography variant="h4" gutterBottom>Data Mahasiswa</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NIM</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>Jurusan</TableCell>
                        <TableCell>Angkatan</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mahasiswa.map((row) => (
                        <TableRow key={row.nim}>
                            <TableCell>{row.nim}</TableCell>
                            <TableCell>{row.nama}</TableCell>
                            <TableCell>{row.jurusan}</TableCell>
                            <TableCell>{row.angkatan}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Mahasiswa;