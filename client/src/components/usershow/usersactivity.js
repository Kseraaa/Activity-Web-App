import { CardHeader, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Text, StyleSheet } from 'react-native';


function UserAct() {

  
  
    return(
        <div>


        <Box sx={{ mx: 'auto', mt: 10 }}>

          {/* การ์ดใบที่3 */}
          <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >

                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                      titleTypographyProps={{fontSize: 36,}}
                      title="พี"

                    />
                    <CardContent sx={{ width:650 }}>
  
                    </CardContent>

                    {/* ปุ่มลงทะเบียนและป็อปอัพ */}
                    <CardActions>

                    </CardActions>

                </Box>
          </Card>
        </Box>
      </div>

  );
}

export default UserAct;