import React from "react";
import { useLocation, useNavigate, Link, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Box, Typography } from "@mui/material";
import { Dashboard as DashboardIcon, ExitToApp } from "@mui/icons-material";
import { googleLogout } from "@react-oauth/google";
import { blue } from "@mui/material/colors";

function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const profile = location.state?.profile || JSON.parse(localStorage.getItem('profile'));
    const logOut = () => {
        googleLogout();
        localStorage.removeItem('profile');
        navigate('/');
    };

    if (!profile) {
        return (
            <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                No profile found. Please Login.
            </Typography>
        );
    }
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    {profile && (
                        <>
                            <Typography variant="body1" sx={{ marginRight: 2 }}>
                                {profile.name}
                            </Typography>
                            <Avatar src={profile.picture} alt="Profile Image" />
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{ 
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                 }}>
                <Toolbar />
                <List>
                    <ListItem button component={Link} to="/dashboard">
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={logOut}>
                        <ListItemIcon>
                            <ExitToApp sx={{ color: blue[500] }} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ 
                    flexGrow: 1,
                    p: 3,
                    ml: '240px',
                    mt: '64px',
                }}>
                <Toolbar />
                <Routes>
                    <Route 
                        path="/dashboard"
                        element={
                            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px", flexDirection: "column" }}>
                                <Typography variant="h4" gutterBottom>
                                    Welcome, {profile.name}
                                </Typography>
                                <Typography variant="h6">
                                    Email, {profile.email}
                                </Typography>
                                <img 
                                    src={profile.picture}
                                    alt="User Profile"
                                    style={{ borderRadius: '50%', marginTop: '20px' }} />
                            </div>
                        }
                    />
                </Routes>
            </Box>
        </Box>
    );
}

export default Dashboard;