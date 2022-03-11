import React from "react";
import TextField from '@mui/material/TextField';
import { CardHeader, CardMedia } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function LoginCard() {

    const navigate = useNavigate();
    
    return(
        <div>
        <Box>
            <Card sx={{ mx:'auto', my:8,maxWidth: 700 , display: 'flex' , bgcolor: 'grey'}} >
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardMedia
                        component="img"
                        height="40%"
                        width="40%"
                        image="/img/123.png"
                        alt="logo"
                    />
                    <CardHeader
                    titleTypographyProps={{fontSize: 36,}}
                    title="เข้าสู่ระบบ"
                    />
                    <table width="100%" >
                        <tr>
                            <td>
                                <CardContent sx={{ width:320 }}>
                                <Typography 
                                    variant="body1" 
                                    sx={{ fontSize:16 }}>
                                    อีเมล
                                </Typography>
                                <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                <TextField id="outlined-basic" label="อีเมล" variant="outlined" />
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
                                    id="outlined-password-input"
                                    label="รหัสผ่าน"
                                    type="password"
                                    autoComplete="current-password"
                                />
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
                                </td>
                                <td>
                                <CardContent sx={{ width:320 }}>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ fontSize:16 }}>
                                        Google
                                    </Typography>
                                    <Button variant="outlined" sx={{ m: 1, height: 55 }} >เข้าสู่ระบบด้วย Google</Button>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </CardContent>
                            </td>
                        </tr>
                    </table>
                    <CardContent>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">เข้าสู่ระบบ</Button>
                            <Button variant="outLine">ลืมรหัสผ่าน</Button>
                            <Button variant="outLine" onClick={() => {navigate("/register");}}>สร้างบัญชี</Button>
                        </Stack>
                    </CardContent>
                    
                </Box>
            </Card>
        </Box>
      </div>
  );
}

export default LoginCard;