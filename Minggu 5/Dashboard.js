import React, { useState, useEffect } from 'react';
import {
    Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import {
    Menu as MenuIcon, AccountCircle, Logout as LogoutIcon,
    Dashboard as DashboardIcon, ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import StoreAPI from './StoreAPI.js';
function Utama() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('isLoggedIn');
        navigate('/');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit" onClick={handleMenu}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleLogout}>
                            <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                            Logout
                        </MenuItem>
                    </Menu>
                    {username && (
                        <Typography variant="body1" sx={{ ml: 2}}> 
                            Hello, {username}
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
            
            <Drawer variant="permanent"
                open={open}
                sx={{
                    '& .MuiDrawer-paper': {
                        position: 'revert-layer', whiteSpace: 'nowrap', width: 240, transition: 'width 0.3s', boxSizing: 'border-box'
                    },
                    '& .MuiDrawer-paperClose': { overflowX: 'hidden', transition: 'width 0.3', width:
                        0
                    }
                }}>
                <Toolbar>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <List>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to="/storeapi">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Data Fake Store" />
                    </ListItem>   
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route 
                        path="/dashboard"
                        element={
                            <div>
                                <Typography variant="h4">Selamat Datang di Dashboard {username}</Typography>
                            </div>
                        }
                    />
                    <Route 
                        path="/storeapi"
                        element={<StoreAPI/>}
                    />
                </Routes>

            </Box>
        </Box>
    )

}

export default Utama;
