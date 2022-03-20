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
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faUserGroup, faBook, faComment } from '@fortawesome/free-solid-svg-icons'

document.body.className = "AnErrorHasOccured";
  
export default function AdminAppBar(props) {

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

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('user');
        localStorage.removeItem('refresh');
        navigate("/login");
    }

    const [activitycards, setActivitycards] = useState([])
    const navigate = useNavigate()

    const getActivityCards = async () => {
        const response = await axios.get('http://localhost:8000/api/activities/')
        setActivitycards(response.data)
    }

    useEffect(() => {
        getActivityCards();
    }, []);

    const [filteredActivitycards, setFilteredActivitycards] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        setFilteredActivitycards(
            activitycards.filter( activitycard => {
                return activitycard.name.includes(search)
            })
        )
    }, [search, activitycards])

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

                        {/* box for app bar buttons */}
                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }}} className="hover-underline">
                                
                                <nav>
                                    <a href='/createactivity'>Create <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon></a>
                                    <a href='/activityadmin'>List <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></a>
                                    <a href='/username'>User <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon></a>
                                    <a href='/aboutadmin'>About <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></a>
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
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
    );
};