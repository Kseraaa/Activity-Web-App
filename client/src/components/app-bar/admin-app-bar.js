import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

document.body.className = "AnErrorHasOccured";

const AdminAppBar = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('user');
        localStorage.removeItem('refresh');
        navigate("/login");
    }

return ( 
            <AppBar position="static" color='grey' >
                <Container maxWidth="x1">
                    <Toolbar disableGutters>
                            <Button 
                                onClick={() => {navigate("/createactivity");}}
                            >
                                <Avatar
                                    sx={{ width: 70, height: 65 }}
                                    variant="square"
                                    src="/img/fancierlogo1.png"
                                />
                                <Avatar
                                    sx={{ width: 130, height: 65 }}
                                    variant=""
                                    src="/img/fancierlogo2.png"
                                />
                            </Button>
                        {/* Box for menu (when minimized window) */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            
                            {/* menuicon */}
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            {/* menu */}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/adminhome");}}>
                                        <Typography textAlign="center" color="black">สร้าง</Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/activityadmin");}}>
                                        <Typography textAlign="center" color="black">รายชื่อกิจกรรม</Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/username");}}>
                                        <Typography textAlign="center" color="black">รายชื่อผู้ใช้</Typography>
                                    </Box>
                                </MenuItem>

                            </Menu>
                        </Box>

                        {/* FANCIER button (minimized window) */}
                        <Button >
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                color="black"
                            >
                                Fancier
                            </Typography>
                        </Button>

                        {/* box for app bar buttons */}
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
                                
                                <Button
                                    onClick= {() => {navigate("/createactivity");}}
                                    sx={{fontSize: 23, fontWeight: 500, mx: 2 ,my: 2, color: 'black', display: 'block' }}
                                >   
                                    สร้าง
                                </Button>

                                <Button
                                    onClick= {() => {navigate("/activityadmin");}}
                                    sx={{ fontSize: 23, fontWeight: 500, mx: 2 ,my: 2, color: 'black', display: 'block' }}
                                >   
                                    รายชื่อกิจกรรม
                                </Button>

                                <Button
                                    onClick= {() => {navigate("/username");}}
                                    sx={{ fontSize: 23, fontWeight: 500, mx: 2 ,my: 2, color: 'black', display: 'block' }}
                                >   
                                    รายชื่อผู้ใช้
                                </Button>

                        </Box>
                        
                        {/* box for user profile */}                        
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Menu">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1.5 }}>
                                    <Avatar alt="Admin" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        {/* name : {user.username} <br /> */}
                                        <Button onClick= {handleLogout}>Logout</Button>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
};
export default AdminAppBar;