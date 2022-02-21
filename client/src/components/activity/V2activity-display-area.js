import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function V2ActivateDisplayArea(){

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
        <Card 
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 1000,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }} >

        <CardMedia
          component="img"
          height="300"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="ar"
        />

        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            กิจกรรมเเบบ Candidate
          </Typography>
          <Typography variant="h6" color="text.secondary">
              ลงทะเบียน: เริ่ม 01/11/2022 สิ้นสุด 05/11/2022 
              <br />
              กิจกรรม: เริ่ม 07/11/2022 สิ้นสุด 08/11/2022
              <br />
              จำนวนผู้เข้าร่วมสูงสุด 80
              <br />
              รายละเอียดกิจกรรมรายละเอียดรายละเอียดกิจกรรมรายละเอียด
              รายละเอียดกิจกรรมรายละเอียดรายละเอียดกิจกรรมรายละเอียด

          </Typography>
        </CardContent>


        <CardActions>
            <Stack spacing={2} direction="row">
              
              <Button variant="contained"  onClick={handleClickOpen}>
                ลงทะเบียน
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth= 'md'
              >
                <DialogTitle id="alert-dialog-title" gutterBottom variant="h1" sx={{color: '#004AAD'}}>
                  <Typography sx={{ fontSize: '50px'}} >
                    <h1>ลงทะเบียนสำเร็จ!!</h1>
                  </Typography>
                </DialogTitle>
                <DialogActions >
                  <Button sx={{ fontSize: '30px'}} onClick={handleClose} >กลับสู่หน้าหลัก </Button>
                </DialogActions>
              </Dialog>

              <Button variant="contained">เเนบไฟล์ที่นี่</Button>

            </Stack>
        </CardActions>

            <Typography variant="h6" color='error.main'>
              หากต้องการสละสิทธิ์ กรุณาติดต่อช่องทางใดช่องทางหนึ่ง
            </Typography>
      </Card>
    )
}

export default V2ActivateDisplayArea ;