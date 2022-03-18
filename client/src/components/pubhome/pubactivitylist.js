import { CardHeader, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Text, StyleSheet } from 'react-native';
import Video from "../video/video";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function PubActivateDisplayArea() {

  const [open, setOpen] = React.useState(false);
  const [activitycards, setActivitycards] = useState([])
  const navigate = useNavigate()

  const getActivityCards = async () => {
    const response = await axios.get('http://localhost:8000/api/activities/')
    setActivitycards(response.data)
  }

  useEffect(() => {
    getActivityCards();
  }, []);

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
        <Video/>
        <Box sx={{ mx: 'auto', mt: 115 }}>
          {activitycards.map((activitycard) => (
            <Card key={activitycard.id} sx={{ mx:'auto', my:3,maxWidth: 1200 , display: 'flex' , bgcolor: 'grey'}} >
                  <CardMedia sx={{maxWidth: 500, maxHeight: 'auto'}}
                      component="img"
                      image={activitycard.image}
                  />
                  <Box sx={{ display:'flex', flexDirection:'column' }}>
                      <CardHeader
                        titleTypographyProps={{fontSize: 36}}
                        title={activitycard.name}
                        subheaderTypographyProps={{fontSize: 18}}
                        subheader={activitycard.description}
                      />
                      <CardContent sx={{ width:650 }}>
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
                              <Button variant="contained" onClick={() => {navigate("/login");}}>
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
                        จำนวนที่นั่งเหลือ 0 ท่านยังสามารถลงทะเบียนเป็นที่นั่งสำรองได้
                        <br />
                        หากต้องการสละสิทธิ์ กรุณาติดต่อช่องทางใดช่องทางหนึ่ง
                      </Typography>
                                        
                  </Box>
            </Card>
            )
            )
          }
        </Box>
      </div>
  );
}

export default PubActivateDisplayArea ;