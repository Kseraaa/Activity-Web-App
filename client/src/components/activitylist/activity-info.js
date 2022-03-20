import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

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

export default function ActivityInfo() {

  const [activitycards, setActivitycards] = useState([])
  const navigate = useNavigate()

  const getActivityCards = async () => {
      const response = await axios.get('http://localhost:8000/api/activities/')
      setActivitycards(response.data)
  }

  useEffect(() => {
      getActivityCards();
  }, []);

  const [filteredActivitycards, setFilteredActivitycards] = useState([])
    const [search, setSearch] = useState("")

  useEffect(() => {
      setFilteredActivitycards(
          activitycards.filter( activitycard => {
              return activitycard.name.includes(search)
          })
      )
  }, [search, activitycards])

  return (
      <Box>
        <Grid container justifyContent= "center">
          <CssTextField 
            id="search" 
            label="Search" 
            variant="outlined"
            sx={{ mx: "0%", my: "auto", width:1000 }}
            onChange={e => setSearch(e.target.value)}
          />  
        </Grid>

        {filteredActivitycards.map((activitycard) => (
          <Card key={activitycard.id} sx={{ mx:'auto', my:2, maxWidth: 1000 , display: 'flex' , bgcolor: 'grey' }} >
            <Box sx={{ display:'flex', flexDirection:'column' }}>
              <CardContent sx={{ width:1000, pt: 1 }} >
                <Typography
                  variant="body1"
                  sx={{ 
                    fontFamily: 'Sarabun', 
                    fontSize: 30,
                    ml: 2, 
                    mt: 1,
                  }}>
                  {activitycard.name}
                </Typography>

                <Box sx={{ ml: 2, mb: 1 }}>
                  <Typography 
                    variant="body1" 
                    sx={{ fontFamily: 'Sarabun', fontSize:16 }}
                  >
                      ประเภทกิจกรรม: {activitycard.activity_type.replace("FCFS", "First come first serve")} <br />
                      รายละเอียดกิจกรรม: {activitycard.description} <br />
                      จำนวนคนเข้าร่วมสูงสุด: {activitycard.max_participant} <br />
                      ระยะเวลาเปิดลงทะเบียน: {activitycard.register_time_start} - {activitycard.register_time_end} <br />
                      ระยะเวลากิจกรรม: {activitycard.activity_time_start} - {activitycard.activity_time_end} <br />
                  </Typography>
                </Box>
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
                <Typography 
                  color="black" 
                  variant="body1" 
                  sx={{ 
                    fontFamily: 'Sarabun', 
                    fontSize:20 
                  }} >
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
              </CardContent>
            </Box>
          </Card> ))}
      </Box>
    );
}