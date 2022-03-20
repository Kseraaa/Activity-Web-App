import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent, CardHeader, Stack, Button } from "@mui/material"
import Typography from '@mui/material/Typography';

function About () {

    return(
        <div>
            <Card sx={{ mx:'auto', my:9,maxWidth: 1000 , display: 'flex' ,background: 'linear-gradient(45deg, #ffffff 30%, #dfe2e8  90%)'}} >

                <Box >
                    <CardHeader
                        titleTypographyProps={{fontFamily:"Sarabun",fontSize: 36,}}
                        title="About"
                    />

                    <CardContent sx={{ width:1000 }} >

                        <Box>
                            <Typography  color="black" variant="body1" sx={{ fontSize:25 }} >
                                เว็บไซต์นี้ เป็นเว็บไซต์สำหรับลงทะเบียนกิจกรรมที่ท่านสนใจ มีการลงทะเบียน 2 รูปแบบ คือ <br />
                                First come First serve [ลงทะเบียนก่อนมีสิทธิ์ก่อน] <br />
                                Candidate [ทางผู้จัดเป็นคนคัดเลือกผู้เข้าร่วม]
                            </Typography>
                        </Box>

                    </CardContent>

                </Box>
            </Card>

        </div>

    );
}

export default About;