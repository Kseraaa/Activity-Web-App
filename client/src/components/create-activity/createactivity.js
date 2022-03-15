import React, { useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

        //  ประเภท 
const activitytype = [
  {
    value: 'FCFS',
    label: 'FirstComeFirstServe',
  },
  {
    value: 'C',
    label: 'Candidate',
  },

];

        //  ปุ่มupload 
const Input = styled('input')({
  display: 'none',
});

function CreateActivity() {

        // ปุ่มsave
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

      //  info ต่างๆใน card   
  const [image, setImage] = useState(null);
  const handleChangeImage = (event) => {
    setImage(event.target.files[0])
  };

  const [name, setName] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value)
  };

  const [description, setDescription] = useState("");
  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  };

  const [max_participant, setMax_participant] = useState("");
  const handleChangeMax_participant = (event) => {
    setMax_participant(event.target.value)
  };

  const [activity_type, setActivity_type] = useState("FCFS");
  const handleChangeActivity_type = (event) => {
    setActivity_type(event.target.value)
  };

  const [register_time_start, setRegister_time_start] = useState("");
  const handleChangeRegister_time_start = (newRegister_time_start) => {
      setRegister_time_start(newRegister_time_start);
  };

  const [register_time_end, setRegister_time_end] = useState("");
  const handleChangeRegister_time_end = (newRegister_time_end) => {
      setRegister_time_end(newRegister_time_end);
  };

  const [activity_time_start, setActivity_time_start] = useState("");
  const handleChangeActivity_time_start = (newActivity_time_start) => {
    setActivity_time_start(newActivity_time_start);
  };

  const [activity_time_end, setActivity_time_end] = useState("");
  const handleChangeActivity_time_end = (newActivity_time_end) => {
    setActivity_time_end(newActivity_time_end);
  };

  const navigate = useNavigate();

  const CreateAdminInfo = async () => {
    let formField = new FormData()
    // if (image !== null) {
    //   formField.append('image', image)
    // }
    formField.append('image', image)
    formField.append('name', name)
    formField.append('description', description)
    formField.append('max_participant', max_participant)
    formField.append('activity_type', activity_type)
    // formField.append('register_time_start', register_time_start)
    // formField.append('register_time_end', register_time_end)
    // formField.append('activity_time_start', activity_time_start)
    // formField.append('activity_time_end', activity_time_end)

    await axios({
      method: 'post',
      url: 'http://localhost:8000/api/activities',
      data: formField
    }).then((response) => {
      console.log(response.data);
      navigate("/createactivity");
    })
  };

  return(
    <div>
      <Box sx={{ mx: 'auto', mt: 10 }}>

        {/* การ์ด */}
        <Card sx={{ mx:'auto', my:3, maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >

              <Box sx={{ display:'flex', flexDirection:'column' }}>
                  <CardHeader
                    titleTypographyProps={{fontFamily:"Sarabun",fontSize: 36,}}
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
                      name="name"
                      value={name}
                      onChange={handleChangeName}
                    >
                      <TextField id="outlined-basic" label="กรุณากรอกชื่อ" variant="outlined" placeholder="กิจกรรม..."/>
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
                    <TextField id="outlined-basic" label="กรุณากรอกรายละเอียด" variant="outlined"
                    name="description"
                    value={description}
                    onChange={handleChangeDescription} />
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
                        name="max_participant"
                        value={max_participant}
                        onChange={handleChangeMax_participant}
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
                        // helperText="กรุณากรอกประเภทของกิจกรรม"
                      >
                        {activitytype.map((option) => (
                          <MenuItem key={option.value} value={option.value} onChange={handleChangeActivity_type}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>

                      {/* <select value={activitytypedefault} onChange={handleChangeActivity_type}>
                        <option value='FC'>first</option>
                        <option value='C'>can</option>
                      </select> */}
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
                          name="register_time_start"
                          value={register_time_start}
                          onChange={handleChangeRegister_time_start}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider><br/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <DateTimePicker
                          label="สิ้นสุดเวลา"
                          name="register_time_end"
                          value={register_time_end}
                          onChange={handleChangeRegister_time_end}
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
                          name="activity_time_start"
                          value={activity_time_start}
                          onChange={handleChangeActivity_time_start}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider><br/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <DateTimePicker
                          label="สิ้นสุดเวลา"
                          name="activity_time_end"
                          value={activity_time_end}
                          onChange={handleChangeActivity_time_end}
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
                          <Input 
                            accept="image/*" 
                            id="contained-button-file" 
                            multiple type="file"
                            name="image"
                            src={image}
                            onChange={handleChangeImage}
                          />
                          <Button variant="contained" component="span">
                            Upload 📸
                          </Button>
                        </label>
                      </Stack>              

                      <Stack spacing={2} direction="row">               
                        <Button 
                          variant="contained" 
                          color="success"
                          name="save_button"
                          onClick={CreateAdminInfo}>
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
                            <Typography sx={{ fontFamily:"Sarabun",fontSize: '50px'}} >
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

export default CreateActivity;