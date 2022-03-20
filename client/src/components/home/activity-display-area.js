import { CardHeader, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { Text, StyleSheet } from 'react-native';
import Video from "../video/video";
import axios from 'axios';

function ActivateDisplayArea() {

  const [open, setOpen] = React.useState(false);
  const [activitycards, setActivitycards] = useState([])

  const getActivityCards = async () => {
    const response = await axios.get('http://localhost:8000/api/activities/')
    console.log(response.data)
    setActivitycards(response.data)
  }

  useEffect(() => {
    getActivityCards();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Box sx={{ 
            border:'1px dashed grey',
            mt: 10,
          }}>
          <Grid container justifyContent= "center">
              <Card sx={{ 
                  border:'1px dashed grey',
                  height: 'auto',
                  width: 'auto',
                  background: ' linear-gradient(217deg, rgba(182, 62, 238, 0.8), rgba(255,0,0,0) 100%),linear-gradient(127deg, rgba(0, 195, 255, 0.8), rgba(0,255,0,0) 100%),linear-gradient(336deg, rgb(63, 43, 245, 0.8), rgba(0,0,255,0) 100%);'
                }}>
                <Grid container justifyContent= "center">
                  <CardMedia sx={{ m:10 }}>
                    <Video/>
                  </CardMedia>
                </Grid>
              </Card>
          </Grid>
        </Box>
        <Box sx={{ mx: 'auto', mt: 115 }}>
            {activitycards.map((activitycard) => (
              <Card key={activitycard.id} sx={{ mx:'auto', my:3 ,maxWidth: 1200 , display: 'flex' , bgcolor: 'grey'}} >
                <CardMedia sx={{maxWidth: 500, maxHeight: 'auto'}}
                        component="img"
                        image={activitycard.image}
                    />
                    <Box sx={{ display:'flex', flexDirection:'column'  ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}}>
                        <CardHeader
                          titleTypographyProps={{ fontFamily: 'Sarabun', fontSize: 36}}
                          title={activitycard.name}
                          subheaderTypographyProps={{fontSize: 18}}
                          subheader={activitycard.description}
                        />
                        <CardContent sx={{ width:700 }}>
                          <Typography 
                            variant="body1" 
                            sx={{ fontSize:18 }}>
                            ลงทะเบียน : เริ่ม {activitycard.register_time_start} | สิ้นสุด {activitycard.register_time_end}<br />
                            กิจกรรม : เริ่ม {activitycard.activity_time_start}  | สิ้นสุด {activitycard.activity_time_end}<br />
                            จำนวนผู้เข้าร่วมสูงสุด : {activitycard.max_participant} คน <br/>
                            ประเภท: {activitycard.activity_type.replace('FCFS','First come first serve').replace('C', 'Candidate')} <br/>
                          </Typography>
                      
                          <Text style={styles.baseText}>
                            สถานะ :
                            <Text style={styles.waitText}> รอการพิจารณา</Text>
                          </Text>  
                        </CardContent>

                        {/* ปุ่มลงทะเบียนและป็อปอัพ */}
                        <CardActions>
                            <Stack spacing={2} direction="row">
                              <Button variant="contained" onClick={handleClickOpen}>
                                ลงทะเบียน
                              </Button>
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                maxWidth= 'md'
                              >
                                <DialogTitle id="alert-dialog-title" gutterBottom variant="h1" sx={{color: '#004AAD'}}>
                                  <Typography sx={{ fontSize: '50px'}} >
                                    <h1>ลงทะเบียนสำเร็จ!!</h1>
                                  </Typography>
                                </DialogTitle>
                                <DialogActions >
                                  <Button sx={{ fontSize: '30px'}} onClick={handleClose} >กลับสู่หน้าหลัก </Button>
                                </DialogActions>
                              </Dialog>
                            </Stack>

                        </CardActions>
            
                        <Typography variant="h6" color='error.main' sx={{ fontSize:16 }}>
                          <br />
                          หากต้องการสละสิทธิ์ กรุณาติดต่อช่องทางใดช่องทางหนึ่ง
                        </Typography>                     
                  </Box>
            </Card>))
            }
        </Box>
      </div>
  );
}

export default ActivateDisplayArea ;