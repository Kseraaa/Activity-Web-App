import React from "react";
import TextField from '@mui/material/TextField';
import { CardHeader } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function LoginCard() {
    return(
        <div>
        <Box>    
            <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                    titleTypographyProps={{fontSize: 36,}}
                    title="Login"
                    />
                    <CardContent sx={{ width:650 }}>


                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:16 }}>
                        Email
                    </Typography>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Box>


                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:16 }}>
                        Password
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
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    </Box>

                    
                    <br />
                    <Stack spacing={2} direction="row">
                        <Button variant="contained">Login</Button>
                        <Button variant="outLine">ลืมรหัสผ่าน</Button>
                    </Stack>
                    <br/>
                    <Stack spacing={2} direction="row">
                        <Button variant="outLine">register</Button>
                    </Stack> 
                    </CardContent>     
                </Box>
            </Card>
        </Box>
      </div>

  );
}

export default LoginCard;