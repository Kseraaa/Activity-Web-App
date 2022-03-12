import React from "react";
import TextField from '@mui/material/TextField';
import { CardHeader, CardMedia } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function RegisterCard() {
    
    const navigate = useNavigate();

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
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="ชื่อ" variant="outlined" />
                    <TextField id="outlined-basic" label="นามสกุล" variant="outlined" />
                    </Box>


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
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:16 }}>
                        ยืนยันรหัสผ่าน
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
                        label="ยืนยันรหัสผ่าน"
                        type="password"
                        autoComplete="current-password"
                    />
                    </Box>


                    <br />
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={() => {navigate("/login");}}>เสร็จสิ้น</Button>
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