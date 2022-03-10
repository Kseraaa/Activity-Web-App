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
import MenuItem from '@mui/material/MenuItem';
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import { Dialog, DialogActions, DialogTitle } from "@mui/material"
import { styled } from '@mui/material/styles';

         {/* ประเภท */}
const currencies = [
  {
    value: 'FCFS',
    label: 'FirstComeFirstServe',
  },
  {
    value: 'CDD',
    label: 'Candidate',
  },

];

        {/* ปุ่มupload */}
const Input = styled('input')({
  display: 'none',
});

function CreateAdmin() {

         {/* เวลา */}
    const [value1, setValue1] = React.useState(new Date('2022-01-01T21:11:54'));
    const handleChange1 = (newValue1) => {
      setValue1(newValue1);
    };

    const [value2, setValue2] = React.useState(new Date('2022-01-01T21:11:54'));
    const handleChange2 = (newValue2) => {
      setValue2(newValue2);
    };

    const [value3, setValue3] = React.useState(new Date('2022-01-01T21:11:54'));
    const handleChange3 = (newValue3) => {
      setValue3(newValue3);
    };

    const [value4, setValue4] = React.useState(new Date('2022-01-01T21:11:54'));
    const handleChange4 = (newValue4) => {
      setValue4(newValue4);
    };
         {/* ประเภท */}
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

         {/* ปุ่มsave */}
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <div>
        <Box sx={{ mx: 'auto', mt: 10 }}>

          {/* การ์ด */}
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >

                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                      titleTypographyProps={{fontSize: 36,}}
                      title="สำหรับการสร้างกิจกรรม"
                    />
                    <CardContent sx={{ width:650 }}>

                    {/* กรอกข้อความชื่อกิจกรรม */}
                      <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        ชื่อกิจกรรม
                      </Typography>
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


                    {/* ระบุจำนวนคน */}
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        ระบุจำนวนคนเข้าร่วมสูงสุด
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                    <div>
                      <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      /> 
                    </div>
                    </Box>


                    {/* ระบุประเภท */}
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        ระบุประเภทชองกิจกรรม
                    </Typography>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          id="ประเภท"
                          select
                          label="ประเภทของกิจกรรม"
                          value={currency}
                          onChange={handleChange}
                          //helperText="กรุณากรอกประเภทของกิจกรรม"
                        >
                          {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                    </Box>
                    <br/>

                    {/* กำหนดเวลา */}
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        ระยะเวลาเปิดลงทะเบียน
                    </Typography>
                    <Box>
                      <br/>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DateTimePicker
                            label="เริ่มเวลา"
                            value={value1}
                            onChange={handleChange1}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider><br/>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DateTimePicker
                            label="สิ้นสุดเวลา"
                            value={value2}
                            onChange={handleChange2}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </Box>
                    <br/>
                    <Typography 
                        variant="body1" 
                        sx={{ fontSize:20 }}>
                        ระยะเวลากิจกรรม
                    </Typography>
                    <Box>
                      <br/>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DateTimePicker
                            label="เริ่มเวลา"
                            value={value3}
                            onChange={handleChange3}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider><br/>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <DateTimePicker
                            label="สิ้นสุดเวลา"
                            value={value4}
                            onChange={handleChange4}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </Box>
                    <br />
                    <Typography variant="h6" color='error.main' sx={{ fontSize:16 }}>
                      กรุณาตรวจสอบข้อมูลที่กรอกให้ถูกต้องก่อนทำการบันทึก เนื่องจากบันทึกเเล้วไม่สามารถเเก้ไขได้
                      <br />
                      หากเกิดข้อผิดพลาด เเอดมินจะทำการลบกิจกรรมได้ที่หน้า รายชื่อกิจกรรม
                    </Typography>
                    </CardContent>

                    {/* ปุ่มบันทึกและป็อปอัพ */}
                    <CardActions>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                              Upload 📸
                            </Button>
                          </label>
                        </Stack>              

                        <Stack spacing={2} direction="row">               
                          <Button variant="contained" color="success" onClick={handleClickOpen}>
                            บันทึก
                          </Button>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            maxWidth= 'md'
                          >
                            <DialogTitle id="alert-dialog-title" gutterBottom variant="h1" sx={{color: '#4aad00'}}>
                              <Typography sx={{ fontSize: '50px'}} >
                                <h1>บันทึกสำเร็จ</h1>
                              </Typography>
                            </DialogTitle>
                            <DialogActions >
                              <Button sx={{ fontSize: '30px',color: '#4aad00'}} onClick={handleClose} >ย้อนกลับ </Button>
                            </DialogActions>
                          </Dialog>
                        </Stack>
                    </CardActions>
                </Box>
          </Card>
        </Box>
      </div>

  );
}

export default CreateAdmin;