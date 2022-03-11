import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function HistoryCard1() {
    return (
        <Card sx={{ maxWidth: 'auto' }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="his1"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        กิจกรรมวิ่งผลัด
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        จัดขึ้นวันที่...<br/>จบวันที่...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default HistoryCard1;
