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
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

document.body.className = "AnErrorHasOccured";

const PannAppBar = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('user');
        localStorage.removeItem('refresh');
        navigate("/login");
    }

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

return (
            <AppBar position="static" color='grey'>
                <Container maxWidth="x1">
                    <Toolbar disableGutters>

                            {/* FANCIER button */}
                            <Button 
                                onClick={() => {navigate("/home");}}
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
                                    <Box onClick={() => {navigate("/home");}}>
                                        <Typography textAlign="center" color="black">กิจกรรม</Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/history");}}>
                                        <Typography textAlign="center" color="black">ประวัติการเข้าร่วม</Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/contact");}}>
                                        <Typography textAlign="center" color="black">ติดต่อ</Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/abouthomepage");}}>
                                        <Typography textAlign="center" color="black">About</Typography>
                                    </Box>
                                </MenuItem>

                            </Menu>
                        </Box>

                        {/* FANCIER button (minimized window) */}
                        <Button onClick={() => {navigate("/home");}}>
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
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }}} className="hover-underline">
                                
                                <nav>
                                    <a href='/home'>Activities</a>
                                    <a href='/history'>History</a>
                                    <a href='/contact'>Contact</a>
                                    <a href='/abouthomepage'>About</a>
                                </nav>
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
                                    </Typography><br />
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
};
export default PannAppBar;