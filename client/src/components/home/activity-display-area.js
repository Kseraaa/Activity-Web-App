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
import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const CssTextField = styled(TextField)({
  '& label': {
    color: 'black',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

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

  const [filteredActivitycards, setFilteredActivitycards] = useState([])
    const [search, setSearch] = useState("")

  useEffect(() => {
      setFilteredActivitycards(
          activitycards.filter( activitycard => {
              return activitycard.name.includes(search)
          })
      )
  }, [search, activitycards])

  const styles = StyleSheet.create({
    baseText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'#0B46FF',
      fontFamily:'Mali',
      
    },
    passText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'green',
      fontFamily:'Mali',
    },

    notpassText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'red',
      fontFamily:'Mali',
    },

    waitText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color:'grey',
      fontFamily:'Mali',
    },
  });


return(
      <div>
          <Box sx={{ 
            display: "flex",
            flexDirection: "row",
            mt: 5,
            }}>
            <Box sx={{ 
              width: 1200,
              }}>
              <Typography sx={{ fontSize: 140, fontWeight: 600, ml: '35%' }} color="#FFF">
                FANCIER
              </Typography>
              <Typography sx={{ fontSize: 30, fontWeight: 100, ml: '35%' }} color="#FFF">
                Activity Registration
              </Typography>
            </Box>
            <Box sx={{ 
              width: 1000,
              }}>
              <div class="container">
                  <div class="kitty">
                      <div class="face">
                          <div class="ear"></div>
                          <div class="eye"></div>
                          <div class="mouth">
                              <div class="nose"></div>
                              <div class="whisker-1"></div>
                              <div class="whisker-2"></div>
                          </div>
                          <div class="body">
                              <div class="hand">
                                  <div class="hand-l"></div>
                                  <div class="hand-r"></div>
                              </div>
                          </div>
                          <div class="tail"></div>
                      </div>
                      <div class="laptop">
                          <div class="logo"></div>
                      </div>
                  </div>
              </div>
            </Box>
          </Box>
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

        <Box sx={{ mx: 'auto', my: 10 }}>
          <Grid container justifyContent= "center">
            <Typography sx={{ fontSize: 100, fontWeight: 600, mx: 'auto' }} color="#FFF">
              ACTIVITIES
            </Typography>
          </Grid>

            <Grid container justifyContent= "center">
                  <CssTextField
                    id="search" 
                    label="Search" 
                    variant="outlined"
                    sx={{ mx: "0%", my: "auto", width:1000 }}
                    onChange={e => setSearch(e.target.value)}
                  />  
                </Grid> 
        </Box>

        <Box sx={{ mx: 'auto', mt: 10 }}>
            {filteredActivitycards.map((activitycard) => (
              <Card key={activitycard.id} sx={{ mx:'auto', my:3 ,maxWidth: 1200 , display: 'flex' , bgcolor: 'grey'}} >
                <CardMedia sx={{maxWidth: 500, maxHeight: 'auto'}}
                        component="img"
                        image={activitycard.image}
                    />
                    <Box sx={{ display:'flex', flexDirection:'column'  ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}}>
                        <CardHeader
                          titleTypographyProps={{ fontFamily: 'Mali', fontSize: 36}}
                          title={activitycard.name}
                          subheaderTypographyProps={{fontSize: 18,fontFamily:'Mali'}}
                          subheader={activitycard.description}
                        />
                        <CardContent sx={{ width:700 }}>
                          <Typography 
                            variant="body1" 
                            sx={{ fontFamily:'Mali',fontSize:18 }}>
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
                              <Button sx={{ fontFamily:'Mali',fontSize: 15 }}variant="contained" onClick={handleClickOpen}>
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
                                  <Typography sx={{ fontFamily:'Mali',fontSize: '50px'}} >
                                    <h1>ลงทะเบียนสำเร็จ!!</h1>
                                  </Typography>
                                </DialogTitle>
                                <DialogActions >
                                  <Button sx={{ fontFamily:'Mali',fontSize: '30px'}} onClick={handleClose} >กลับสู่หน้าหลัก </Button>
                                </DialogActions>
                              </Dialog>
                            </Stack>

                        </CardActions>
            
                      <CardContent sx={{ width:700 }}>
                      <Typography variant="h6" color='error.main' sx={{ fontFamily:'Mali',fontSize: 16 }}>
                        จำนวนที่นั่งเหลือ 0 ท่านยังสามารถลงทะเบียนเป็นที่นั่งสำรองได้
                        <br />
                        หากต้องการสละสิทธิ์ กรุณาติดต่อช่องทางใดช่องทางหนึ่ง
                      </Typography>
                      </CardContent>                       
                  </Box>
            </Card>))
            }
        </Box>
      </div>
  );
}

export default ActivateDisplayArea ;