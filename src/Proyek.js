import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Button, Modal, Box, IconButton,
    TextField, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

function Proyek() {
    const [proyek, setProyek] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        nama_proyek: '',
        alamat_proyek: '', 
        jumlah_manpower: '', 
        status: '', 
        tanggal_mulai: '', 
        estimasi_selesai: '', 
        created_at: '', 
        updated_at: ''
    });

    const handleTambahData = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setFormData({
            nama_proyek: '',
            alamat_proyek: '', 
            jumlah_manpower: '', 
            status: '', 
            tanggal_mulai: '', 
            estimasi_selesai: '', 
            created_at: '', 
            updated_at: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/lks/api/proyeks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Data berhasil disimpan') {
                setProyek([...proyek, formData]);
                handleCloseModal();
            } else {
                console.error('Error:', data.error);
            }
        })
        .catch(error => console.error('Error:', error));
    };

    useEffect(() => {
        fetch('http://localhost:5000/lks/api/proyeks')
            .then(response => response.json())
            .then(data => {
                setProyek(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <TableContainer component={Paper} style={{ marginTop: '20px', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>Data Proyek</Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                style={{ marginBottom: '20px' }}
                onClick={handleTambahData} // Corrected "onClick"
            >
                Tambah Data
            </Button>
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
                                statusLabel = 'Unknown';
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
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box sx={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4
                }}>
                    <Typography variant="h6" gutterBottom>
                        Tambah Data Proyek
                        <IconButton
                            aria-label="close"
                            onClick={handleCloseModal}
                            sx={{ 
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="nama_proyek"
                            label="Nama Proyek"
                            name="nama_proyek"
                            value={formData.nama_proyek}
                            onChange={handleChange}
                        />
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="alamat_proyek"
                            label="Alamat Proyek"
                            name="alamat_proyek"
                            value={formData.alamat_proyek}
                            onChange={handleChange}
                        />
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="jumlah_manpower"
                            label="Jumlah Manpower"
                            name="jumlah_manpower"
                            value={formData.jumlah_manpower}
                            onChange={handleChange}
                        />
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel id="status-label">Status</InputLabel>
                            <Select
                                labelId="status-label"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                label="Status"
                            >
                                <MenuItem value="berjalan">Berjalan</MenuItem>
                                <MenuItem value="belum_mulai">Belum Mulai</MenuItem>
                                <MenuItem value="batal">Batal</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="tanggal_mulai"
                            label="Tanggal Mulai"
                            name="tanggal_mulai"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.tanggal_mulai}
                            onChange={handleChange}
                        />
                        <TextField 
                            margin="normal"
                            required
                            fullWidth
                            id="estimasi_selesai"
                            label="Estimasi Selesai"
                            name="estimasi_selesai"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.estimasi_selesai}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Simpan
                        </Button>
                    </form>
                </Box>
            </Modal>
        </TableContainer>
    );
}

export default Proyek;
