import { CardHeader } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, width } from "@mui/system";
import { Button } from "@mui/material";
import Videoplayback from "../video/videoplayback.mp4";

export default function ActivateDisplayArea() {

  return(
      <div>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
        >
          <source src={Videoplayback} type="video/mp4" />
        </video>
        <div>
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >
                <CardMedia
                      component="img"
                      height="270"
                      width="205"
                      image="/static/images/cards/paella.jpg"
                      alt="act1"
                    />
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                      titleTypographyProps={{fontSize: 36,}}
                      title="กิจกรรมแข่งพิมพ์เร็ว"
                      subheaderTypographyProps={{fontSize: 18}}
                      subheader=
                      "กิจกรรมแข่งพิมพ์เร็ว เป็นกิจกรรมที่จัดขึ้นเพื่อหาตัวแทนที่จะไปแข่งขันต่อในระดับจังหวัด โดยจัดขึ้นที่โรงเรียนหาดใหญ่วิทยาลัยสมบูรณ์กุลกันยา ณ ชั้น 6 อาคารปิ่นเกรียงไกร"
                    />
                    <CardContent sx={{ width:650 }}>
                      <Typography variant="body1" sx={{ fontSize:18 }}>
                        ลงทะเบียน    : เริ่ม 01/11/2022 | สิ้นสุด 05/11/2022<br />
                        กิจกรรม      : เริ่ม 07/11/2022  | สิ้นสุด 08/11/2022<br />
                        จำนวนผู้เข้าร่วมสูงสุด : 80 คน
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize:18 , fontWeight:600 }}>
                        สถานะ : รอการพิจารณา
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box>
                        <Button sx = {{ fontSize: 20 , fontWeight: 300 , my:2}}>
                          ลงทะเบียนกิจกรรม ♥
                        </Button>
                      </Box>
                    </CardActions>
                </Box>
          </Card>
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >
                <CardMedia
                      component="img"
                      height="270"
                      width="205"
                      image="/static/images/cards/paella.jpg"
                      alt="act1"
                    />
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                      titleTypographyProps={{fontSize: 36,}}
                      title="กิจกรรมแข่งพิมพ์เร็ว"
                      subheaderTypographyProps={{fontSize: 18}}
                      subheader=
                      "กิจกรรมแข่งพิมพ์เร็ว เป็นกิจกรรมที่จัดขึ้นเพื่อหาตัวแทนที่จะไปแข่งขันต่อในระดับจังหวัด โดยจัดขึ้นที่โรงเรียนหาดใหญ่วิทยาลัยสมบูรณ์กุลกันยา ณ ชั้น 6 อาคารปิ่นเกรียงไกร"
                    />
                    <CardContent sx={{ width:650 }}>
                      <Typography variant="body1" sx={{ fontSize:18 }}>
                        ลงทะเบียน    : เริ่ม 01/11/2022 | สิ้นสุด 05/11/2022<br />
                        กิจกรรม      : เริ่ม 07/11/2022  | สิ้นสุด 08/11/2022<br />
                        จำนวนผู้เข้าร่วมสูงสุด : 80 คน
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize:18 , fontWeight:600 }}>
                        สถานะ : รอการพิจารณา
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box>
                        <Button sx = {{ fontSize: 20 , fontWeight: 300 , my:2}}>
                          ลงทะเบียนกิจกรรม ♥
                        </Button>
                      </Box>
                    </CardActions>
                </Box>
          </Card>
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >
                <CardMedia
                      component="img"
                      height="270"
                      width="205"
                      image="/static/images/cards/paella.jpg"
                      alt="act1"
                    />
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                      titleTypographyProps={{fontSize: 36,}}
                      title="กิจกรรมแข่งพิมพ์เร็ว"
                      subheaderTypographyProps={{fontSize: 18}}
                      subheader=
                      "กิจกรรมแข่งพิมพ์เร็ว เป็นกิจกรรมที่จัดขึ้นเพื่อหาตัวแทนที่จะไปแข่งขันต่อในระดับจังหวัด โดยจัดขึ้นที่โรงเรียนหาดใหญ่วิทยาลัยสมบูรณ์กุลกันยา ณ ชั้น 6 อาคารปิ่นเกรียงไกร"
                    />
                    <CardContent sx={{ width:650 }}>
                      <Typography variant="body1" sx={{ fontSize:18 }}>
                        ลงทะเบียน    : เริ่ม 01/11/2022 | สิ้นสุด 05/11/2022<br />
                        กิจกรรม      : เริ่ม 07/11/2022  | สิ้นสุด 08/11/2022<br />
                        จำนวนผู้เข้าร่วมสูงสุด : 80 คน
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize:18 , fontWeight:600 }}>
                        สถานะ : รอการพิจารณา
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box>
                        <Button sx = {{ fontSize: 20 , fontWeight: 300 , my:2}}>
                          ลงทะเบียนกิจกรรม ♥
                        </Button>
                      </Box>
                    </CardActions>
                </Box>
          </Card>
        </div>
      </div>

  );
}