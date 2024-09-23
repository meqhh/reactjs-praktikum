import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function App() {
    // State untuk menangani apakah modal terbuka atau tertutup
    const [open, setOpen] = useState(false);
    // Funsi untuk membuka modal 
    const handleClickOpen = () => {
        setOpen(true);
    };
    // Fungsi untuk menutup modal
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>KRS - Kartu Rencana Studi</h1>
            {/* Tombol untuk membuka modal */}
            <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            >
                Detail Mata Kuliah
            </Button>
            {/* Modal untuk menampilkan detail matakuliah */}
            <Dialog
            open={open}
            onClose={handleClose}
            >
                <DialogTitle>Detail Mata Kuliah</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <b>Kode Mata Kuliah:</b> MK001 <b />
                        <b>Nama Mata Kuliah:</b> Pemograman Web <b />
                        <b>SKS:</b> 3 <b />
                        <b>Semester:</b> 4 <b />
                        <b>Dosen Pengajar</b> Dr. John Doe
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                    onClick={handleClose}
                    color="primary"
                    >
                        Tutup
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default App;