import { CardHeader, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { StyleSheet } from 'react-native';
import TextField from '@mui/material/TextField';






function CreateAdmin() {

          {/* กำนหดเวลา */}
  
    const styles = StyleSheet.create({
      baseText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'#0B46FF'
        
      },
      passText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'green'
      },
  
      notpassText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'red'
      },
  
      waitText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color:'grey'
      },
    });
  
    return(
        <div>


        <Box sx={{ mx: 'auto', mt: 10 }}>

          {/* การ์ดใบที่3 */}
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >

                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                      titleTypographyProps={{fontSize: 36,}}
                      title="สำหรับการสร้างActivity"


                    />
                    <CardContent sx={{ width:650 }}>
                      <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        ชื่อกิจกรรม
                      </Typography>
  
                    {/* กรอกข้อความชื่อกิจกรรม */}
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="กรุณากรอกชื่อ" variant="outlined" />
                    </Box>


                    {/* กรอกข้อความรายละเอียด */}
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        รายละเอียดของกิจกรรม
                    </Typography>
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" label="กรุณากรอกรายละเอียด" variant="outlined" />
                    </Box>


                    {/* กำหนดเวลา */}
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        ระยะเวลาเปิดลงทะเบียน
                    </Typography>
                    <Box>

                    </Box>
                    </CardContent>
                </Box>
          </Card>
        </Box>
      </div>

  );
}

export default CreateAdmin;