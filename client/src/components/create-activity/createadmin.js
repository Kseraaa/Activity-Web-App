import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import { CardHeader } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { StyleSheet } from 'react-native';

function CreateAdmin() {

          {/* กำหนดเวลา */}
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
      setValue(newValue);
    };
  

  
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
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <DateTimePicker
                          label="Date&Time picker"
                          value={value}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                    </Box>

                    </CardContent>
                    
                </Box>
          </Card>
        </Box>
      </div>

  );
}

export default CreateAdmin;