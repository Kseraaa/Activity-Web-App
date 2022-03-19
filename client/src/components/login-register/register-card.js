import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { CardHeader, CardMedia} from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";

function RegisterCard() {
    
    const navigate = useNavigate();

    const [ firstname, setFirstname ] = useState();
    const [ lastname, setLastname ] = useState();
    const [ username, setUsername ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ password2, setPassword2 ] = useState();

    const registerSubmit = async () => {
        let result = await axios.post('http://localhost:8000/auth/register/', {
            first_name: firstname,
            last_name: lastname,
            username: username,
            email: email,
            password: password,
            password2: password2,
        });
        console.log(result)
    };
    return(
        <div>
        <Box>    
            <Card sx={{ mx:'auto', my: 1, maxWidth: 700 , display: 'flex' , bgcolor: 'grey'}} >
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardMedia
                        component="img"
                        height="40%"
                        width="40%"
                        image="/img/123.png"
                        alt="logo"
                    />
                    <CardHeader
                    titleTypographyProps={{fontFamily: 'Sarabun', fontSize: 36,}}
                    title="สร้างบัญชี"
                    />
                    <CardContent sx={{ width:650 }}>
                        <Typography 
                            variant="body1" 
                            sx={{ fontSize:16 }}>
                            ชื่อ
                        </Typography>
                        <Box
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                id="outlined-basic" 
                                label="ชื่อ" 
                                variant="outlined" 
                                onChange={e => setFirstname(e.target.value)}
                            />
                            <TextField 
                                id="outlined-basic" 
                                label="นามสกุล" 
                                variant="outlined" 
                                onChange={e => setLastname(e.target.value)}
                            />
                        </Box>

                        <Typography 
                            variant="body1" 
                            sx={{ fontSize:16 }}>
                            บัญชีผู้ใช้
                        </Typography>
                        <Box
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                id="outlined-basic" 
                                label="บัญชีผู้ใช้" 
                                variant="outlined" 
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Box>


                        <Typography 
                            variant="body1" 
                            sx={{ fontSize:16 }}>
                            อีเมล
                        </Typography>
                        <Box
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField 
                                id="outlined-basic" 
                                label="อีเมล" 
                                variant="outlined" 
                                onChange={e => setEmail(e.target.value)}   
                            />
                        </Box>


                        <Typography 
                            variant="body1" 
                            sx={{ fontSize:16 }}>
                            รหัสผ่าน
                        </Typography>
                        <Box
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-password-input"
                                label="รหัสผ่าน"
                                type="password"
                                autoComplete="current-password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Box>
                        <Typography 
                            variant="body1" 
                            sx={{ fontSize:16 }}>
                            ยืนยันรหัสผ่าน
                        </Typography>
                        <Box
                            component="form"
                            sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-password-input"
                                label="ยืนยันรหัสผ่าน"
                                type="password"
                                autoComplete="current-password"
                                onChange={e => setPassword2(e.target.value)}
                            />
                        </Box>
                        <br />
                        <Stack spacing={2} direction="row">
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" onClick={registerSubmit} >บันทึก</Button>
                            </Link>
                            <Button variant="outLine" onClick={() => {navigate("/login");}}>ยกเลิก</Button>
                        </Stack> 
                    </CardContent>     
                </Box>
            </Card>
        </Box>
      </div>
  );
}

export default RegisterCard;