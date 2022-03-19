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




          {/* การ์ดใบที่3 */}
          <Card sx={{ mx:'auto', my:9,maxWidth: 1000 , display: 'flex' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}} >

                <Box >
                    <CardHeader
                      titleTypographyProps={{fontFamily:"Sarabun",fontSize: 36,}}
                      title="ผู้ใช้งาน"
                    />

                    <CardContent sx={{ width:500  }} >

                    <Stack  alignItems="center" >
                        <Box onClick={() => {navigate("/oneuser");}}>
                          <Button>
                          <Box  textAlign="left" >
                            <Typography  color="black" variant="body1" sx={{ fontSize:20 }} >
                              นาย ธีรวีร์ ปฐมธนินพัฒน์
                            </Typography>
                          </Box>
                          </Button>
                        </Box>
                    </Stack> 

                    </CardContent>

                </Box>
          </Card>

      </div>

  );
}

export default UserList;