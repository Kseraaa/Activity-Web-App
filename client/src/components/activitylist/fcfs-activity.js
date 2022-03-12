import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button, CardHeader } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function renderRow1(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${index + 1} นายภัทรชัย  บริบูรณ์ `} />
      </ListItemButton>
    </ListItem>
  );
}

function renderRow2(props) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`${index + 1} นายธีรวีร์ ปฐมธนินพัฒน์`} />
        </ListItemButton>
      </ListItem>
    );
  }

export default function FcfsActivity() {

    const navigate = useNavigate();

    return (
        <Box>    
            <Card sx={{ mx:'auto', my:2,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >
            
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                    titleTypographyProps={{fontFamily: 'Sarabun', fontSize: 36}}
                    title="กิจกรรม FCFS"
                    />
                    <CardContent sx={{ width:1000 }} >
                        <Typography>
                            รายละเอียดกิจกรรม:....<br />
                            จำนวนคนเข้าร่วม:....<br />
                            ระยะเวลาเปิดลงทะเบียน:....<br />
                            ระยะเวลากิจกรรม:....<br />
                        </Typography>
                        <Typography color="black" variant="body1" sx={{ fontFamily: 'Sarabun', fontSize:20 }} >
                            รายชื่อคนผ่าน
                        </Typography>
                        <Box
                            sx={{ width: '100%', height: 470, maxWidth: 900, bgcolor: 'background.paper' }}
                        >
                            <FixedSizeList
                            height={200}
                            width={900}
                            itemSize={46}
                            itemCount={50}
                            overscanCount={5}
                            >
                            {renderRow1}
                            </FixedSizeList>
                            <br />
                        <Typography color="black" variant="body1" sx={{ fontFamily: 'Sarabun', fontSize:20 }} >
                            คิวสำรอง
                        </Typography>
                            <FixedSizeList
                            height={200}
                            width={900}
                            itemSize={46}
                            itemCount={50}
                            overscanCount={5}
                            >
                            {renderRow2}
                            </FixedSizeList>
                        </Box>
                        <Button onClick={() => {navigate("/activityadmin");}} >
                            ย้อนกลับ
                        </Button>
                    </CardContent>
                    
                </Box>
            </Card>
        </Box>
    );
}