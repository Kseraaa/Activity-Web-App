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
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import Stack from '@mui/material/Stack';

document.body.className = "AnErrorHasOccured";

const PublicAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();
        
return (
            <AppBar position="static" color='grey'>
                <Container maxWidth="x1">
                    <Toolbar disableGutters>

                            {/* FANCIER button */}
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
                                    <Box onClick={() => {navigate("/publichome");}}>
                                        <Typography textAlign="center" color="black">กิจกรรม</Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/contact2");}}>
                                        <Typography textAlign="center" color="black">ติดต่อ</Typography>
                                    </Box>
                                </MenuItem>

                            </Menu>
                        </Box>

                        {/* FANCIER button (minimized window) */}
                        <Button onClick={() => {navigate("/publichome");}}>
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
                                    onClick= {() => {navigate("/publichome");}}
                                    sx={{ fontSize: 18, fontWeight: 550, mx: 2 ,my: 2, color: 'black', display: 'block' }}
                                >   
                                    กิจกรรม
                                </Button>


                                <Button
                                    onClick= {() => {navigate("/contact2");}}
                                    sx={{ fontSize: 18, fontWeight: 550, mx: 2 ,my: 2, color: 'black', display: 'block' }}
                                >   
                                    ติดต่อ
                                </Button>

                                <PopupState variant="popover" popupId="demo-popup-popover">
                                    {(popupState) => (
                                        <div>
                                            <Button sx={{ fontSize: 18, fontWeight: 550, mx: 2 ,my: 2, color: 'black', display: 'block' }} {...bindTrigger(popupState)}>
                                                วิธีใช้
                                            </Button>
                                            <Popover
                                                {...bindPopover(popupState)}
                                                anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                                }}
                                                transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                                }}
                                            >
                                                <Typography sx={{ p: 2 }}>
                                                    เว็บไซต์นี้เป็นเว็บไซต์สำหรับลงทะเบียนกิจกรรมที่ท่านสนใจ <br />
                                                    มีการลงทะเบียน2รูปแบบ คือ <br />
                                                    First come First serve [ลงทะเบียนก่อนมีสิทธิ์ก่อน] <br />
                                                    Candidate [ทางผู้จัดเป็นคนคัดเลือกผู้เข้าร่วม] 
                                                </Typography>
                                            </Popover>
                                        </div>
                                    )}
                                </PopupState>
                        </Box>

                        {/* ปุ่มสมัครสมาชิก */}                        
                        <Box sx={{ flexGrow: 0 }}>
                        <Stack spacing={2} direction="row">
                            <Box onClick={() => {navigate("/login");}}>
                            <Button variant="contained">LOGIN</Button>
                            </Box>
                        </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
};
export default PublicAppBar;