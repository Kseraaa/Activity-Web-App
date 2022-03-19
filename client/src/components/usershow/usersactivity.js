import { CardHeader } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import { Box } from "@mui/system";

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
function UserAct() {
  const navigate = useNavigate();
    return(
        <div>



          {/* การ์ดใบที่3 */}
          <Card sx={{ mx:'auto', my:9,maxWidth: 1000 , display: 'flex' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}} >

                <Box >
                    <CardHeader
                      titleTypographyProps={{fontFamily:"Sarabun" ,fontSize: 36,}}
                      title="นาย ธีรวีร์ ปฐมธนินพัฒน์"
                      subheaderTypographyProps={{fontFamily:"Sarabun" ,fontSize: 20}}
                      subheader="กิจกรรมที่เคยเข้าร่วม"            
                    />
                    <CardContent  sx={{ width:650 }}>
                    <Stack  alignItems="center"  >
                      <Box  >
                        <Typography 
                          variant="body1" 
                          sx={{ fontSize:18 }}>
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                          กิจกรรม...............<br />
                        </Typography>
                      </Box>
                    </Stack>
                    <br />
                    <br />
                    <Stack spacing={2} direction="row">
                    <Box onClick={() => {navigate("/username");}}>
                      <Button variant="contained">◀ ย้อนกลับ</Button>
                    </Box>
                    </Stack>

                    </CardContent>

                    <CardActions>

                    </CardActions>

                </Box>
          </Card>
      </div>

  );
}

export default UserAct;