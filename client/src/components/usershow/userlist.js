import { CardHeader } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserList() {
  const navigate = useNavigate();
  
  
    return(
        <div>


        <Box sx={{ mx: 'auto', mt: 10 }}>

          {/* การ์ดใบที่3 */}
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >

                <Box >
                    <CardHeader
                      titleTypographyProps={{fontSize: 30,}}
                      title="ผู้ใช้งาน"
                    />

                    <CardContent sx={{ width:500  }} >

                    <Stack  alignItems="center" >
                        <Box onClick={() => {navigate("/oneuser");}}>
                          <Button>
                          <Box textAlign="left" >
                            <Typography    color="black" variant="body1" sx={{ fontSize:20 }} >
                              นาย ธีรวีร์ ปฐมธนินพัฒน์
                            </Typography>
                          </Box>
                          </Button>
                        </Box>
                    </Stack> 

                    </CardContent>

                </Box>
          </Card>
        </Box>
      </div>

  );
}

export default UserList;