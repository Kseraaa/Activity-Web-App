import React from "react";
import { CardHeader } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function ActivityList() {

    const navigate = useNavigate();
    
    return(
        <div>
        <Box>    
            <Card sx={{ mx:'auto', my:3,maxWidth: 1000 , display: 'flex' , bgcolor: 'grey'}} >
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <CardHeader
                    titleTypographyProps={{ fontFamily: 'Sarabun', fontSize: 36 }}
                    title="รายชื่อกิจกรรม"
                    />
                    <CardContent sx={{ width:500  }} >
                        <Box >
                            <Button>
                                <Typography color="black" variant="body1" sx={{ fontSize:18 }} onClick={() => {navigate("/activityfcfs");}} >
                                    กิจกรรมแบบ fcfs
                                </Typography>
                            </Button>
                            <IconButton aria-label="delete" size="small"  >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                        <Box >
                            <Button>
                                <Typography color="black" variant="body1" sx={{ fontSize:18 }} onClick={() => {navigate("/activitycdd");}} >
                                    กิจกรรมแบบ cdd
                                </Typography>
                            </Button>
                            <IconButton aria-label="delete" size="small" >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
      </div>

  );
}

export default ActivityList;