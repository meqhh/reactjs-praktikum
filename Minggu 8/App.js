import React from "react";
import { CssBaseline, Box, AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem, List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle, ChevronLeft as ChevronLeftIcon, Dashboard as DashboardIcon, School as SchoolIcon } from '@mui/icons-material';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mahasiswa from "./Mahasiswa";
import Proyek from "./Proyek";
function App() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="open-drawer" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
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
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Drawer
                variant="permanent"
                open={open}
                sx={{ 
                        // Conditional styling for drawer based on `open` state
                        width: open ? 240 : 0, // Set drawer width to 240px if open, else 0
                        transition: 'width 0.3s', // Smooth transition for drawer opening/closing
                        '& .MuiDrawer-paper': {
                            position: 'relative',
                            width: open ? 240 : 0, // Drawer paper width depends on `open`
                            transition: 'width 0.3s', // Apply transition for drawer paper
                            boxSizing: 'border-box',
                            overflowX: open ? 'visible' : 'hidden' // Hide content if drawer is closed
                        }
                 }}
                >
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
                        <ListItem button component={Link} to="/mahasiswa">
                            <ListItemIcon>
                                <SchoolIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mahasiswa" />
                        </ListItem>
                        <ListItem button component={Link} to="/proyek">
                            <ListItemIcon>
                                <SchoolIcon />
                            </ListItemIcon>
                            <ListItemText primary="Proyek" />
                        </ListItem>
                    </List>
                </Drawer>
                <Box compoenent="main" sx={{ flexGrow: 1, p:3 }}>
                    <Toolbar />
                    <Routes>
                        <Route path="/dashboard" element={
                            <div>
                                <Typography variant="h4">
                                    dashboard
                                </Typography>
                                <Typography paragraph>
                                    This is the dashboard page.
                                </Typography>
                            </div>
                        } />
                        <Route path="/mahasiswa" element={
                            <Mahasiswa />
                        } />
                        <Route path="/proyek" element={
                            <Proyek />
                        } />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

export default App;