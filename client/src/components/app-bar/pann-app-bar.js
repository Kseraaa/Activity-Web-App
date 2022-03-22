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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@mui/styles';
import { faAward, faUsers, faComment, faCalendarDays, faCircleUser } from '@fortawesome/free-solid-svg-icons'


document.body.className = "AnErrorHasOccured";

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });


const PannAppBar = () => {

    const guessuser = JSON.parse(localStorage.getItem('guessuser'));
    const gguser = JSON.parse(localStorage.getItem('gguser'));

    const handleLogout = () => {
        localStorage.clear();
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

    const classes = useStyles();

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
                                        <Typography textAlign="center" color="black">Activities <FontAwesomeIcon icon={faAward}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/history");}}>
                                        <Typography textAlign="center" color="black">History <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/contact");}}>
                                        <Typography textAlign="center" color="black">Contact <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></Typography>
                                    </Box>
                                </MenuItem>

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box onClick={() => {navigate("/abouthome");}}>
                                        <Typography textAlign="center" color="black">About <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></Typography>
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
                                    <a href='/home'>Activities <FontAwesomeIcon icon={faAward}></FontAwesomeIcon></a>
                                    <a href='/history'>History <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon></a>
                                    <a href='/contact'>Contact <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></a>
                                    <a href='/abouthome'>About <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></a>
                                </nav>
                        </Box>

                        {/* box for user profile */}                        
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Menu" >
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1.5 }}>
                                    <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
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
                                        <Button onClick= {handleLogout} className={classes.root} >Logout</Button>
                                    </Typography>
                                </MenuItem>  
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    );
};
export default PannAppBar;