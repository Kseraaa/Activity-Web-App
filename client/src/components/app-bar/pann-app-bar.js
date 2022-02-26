import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const settings = ['Name : ', 'Email : ', 'Logout'];

const PannAppBar = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let navigate = useNavigate();

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        left: 1260,
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            width: '20ch',

    }));


return (
    <AppBar position="static" color='grey'>
        <Container maxWidth="x1">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    color="black"
                    onClick={() => {navigate("/home")}}
                >
                    Fancier
                </Typography>

                <Box sx={{width: 'auto'}}>
                    <Button 
                        onClick={() => {navigate("/home")}}
                    >
                        <Typography color= "black">
                            กิจกรรม
                        </Typography>
                    </Button>
                </Box>

                <Box sx={{width: 'auto'}}>
                    <Button 
                        onClick={() => {navigate("/history")}}
                    >
                        <Typography color= "black">
                            ประวัติการเข้าร่วม
                        </Typography>
                    </Button>
                </Box>

                <Box sx={{width: 'auto'}}>
                    <Button 
                        onClick={() => {navigate("/contact")}}
                    >
                        <Typography color= "black">
                            ติดต่อ
                        </Typography>
                    </Button>
                </Box>
                
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 1.5 , left: 1260}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    
                </Menu>
            </Toolbar>
        </Container>
    </AppBar>
    );
};
export default PannAppBar;