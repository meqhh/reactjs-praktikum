const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

// Buat koneksi pool ke database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lks_db',
    waitForConnections: true,
    connectionLimit: 10, // Jumlah maksimum koneksi yang dapat dibuka secara bersamaan
    queueLimit: 0
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// API get dari tabel user
app.get('/lks/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// API get dari tabel proyek
app.get('/lks/api/proyeks', (req, res) => {
    const sql = 'SELECT * FROM proyeks';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.post('/lks/api/proyeks', (req, res) => {
    const { nama_proyek, alamat_proyek, jumlah_manpower, status, tanggal_mulai, estimasi_selesai } = req.body;
    const sql = 'INSERT INTO proyeks (nama_proyek, alamat_proyek, jumlah_manpower, status, tanggal_mulai, estimasi_selesai, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())';
    db.query(sql, [nama_proyek, alamat_proyek, jumlah_manpower, status, tanggal_mulai, estimasi_selesai], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Data berhasil ditambah', data: results });
    });
});

// API get dari tabel manhour
app.get('/lks/api/manhours', (req, res) => {
    const sql = 'SELECT * FROM manhours';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// API get dari tabel manpower
app.get('/lks/api/manpower', (req, res) => {
    const sql = 'SELECT * FROM manpower';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});