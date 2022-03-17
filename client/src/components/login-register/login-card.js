import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { CardHeader, CardMedia } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from "../../auth";

// const responseGoogle = (response) => {
//     console.log(response.tokenId);
// }

function LoginCard() {

    const navigate = useNavigate();
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    let auth = useAuth();
    
    const responseGoogle = async (response) => {
        auth.signin(response.tokenId, (newUser) => {
            console.log('login success.', newUser)
            if (newUser){
                if(newUser.is_staff){
                    console.log('Hi! Admin')
                    navigate('/createactivity', { replace: true })
                }else{
                    console.log('Hi! User')
                    navigate('/home', { replace: true })
                }
            }
        })
    }

    const handleSubmit = async () => {
        let result = await axios.post("http://localhost:8000/auth/login/", {
          username: username,
          password: password,
        });
        console.log("login success");
        if (result.status === 200 && result.data) {
            let response = await axios.get('http://localhost:8000/scauth/gglogin/', {
                headers: {
                    'Authorization': `Bearer ${result.data.access}`
                }
            })
            console.log(response.data)
            if ( response.data.is_staff === true ) {
                console.log('Hi! Admin')
                navigate('/createactivity', { replace: true })
            }else {
                console.log('Hi! User')
                navigate('/home', { replace: true })
            }
        }
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
                    titleTypographyProps={{fontFamily: 'Sarabun', fontSize: 36}}
                    title="เข้าสู่ระบบ"
                    />
                    <table width="100%" >
                        <tr>
                            <td>
                                <CardContent sx={{ width:320 }}>
                                <Typography 
                                    variant="body1" 
                                    sx={{ fontSize:16 }}>
                                    ชื่อผู้ใช้
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                
                                    <TextField 
                                        variant="outlined" 
                                        required
                                        id="username"
                                        label="ชื่อผู้ใช้"
                                        name="username"
                                        autoComplete="username"
                                        autoFocus
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                </Box>
                                <Typography 
                                    variant="body1" 
                                    sx={{ fontSize:16 }}>
                                    รหัสผ่าน
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                <TextField
                                    variant="outlined" 
                                    required
                                    id="password"
                                    label="รหัสผ่าน"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <CardContent>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained" onClick={handleSubmit}>เข้าสู่ระบบ</Button>
                                    </Stack>
                                    <br />
                                    <Typography>หากไม่มีบัญชี <Button onClick={() => {navigate("/register");}}>สร้างบัญชี</Button></Typography>
                                </CardContent>
                                </Box>
                                </CardContent>
                                </td>
                                <td>
                                    l
                                    l
                                    l
                                    l
                                    l
                                    l
                                    l
                                    l
                                    l
                                    l
                                    l
                                </td>
                                <td>
                                <CardContent sx={{ width:320 }}>
                                    <div>
                                        <GoogleLogin
                                            clientId="888881399412-spgq58e4cmhhs05icgb2uhct4584aenl.apps.googleusercontent.com"
                                            buttonText="Login with Google"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>
                                </CardContent>
                            </td>
                        </tr>
                    </table>
                </Box>
            </Card>
        </Box>
      </div>
  );
}

export default LoginCard;