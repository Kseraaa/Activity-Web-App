import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Card, IconButton, Typography } from '@mui/material';

function ContactCard() {
    return(
            <Box 
                sx={{ 
                    display: 'flex',
                    flexDirection:'row',
                    border: '',
                    p: 0,
                    m: 4,
                    width: 400,
                    
                }}
            >
                <Card 
                    sx={{ 
                        display: 'flex',
                        flexDirection:'column',
                        width: '100%',
                        position: 'relative',
                        top: 30,
                        left: '7%',
                    }}
                >
                    <IconButton aria-label='phone' sx={{mx: 'auto'}}>
                        <PhoneIcon/>
                    </IconButton>
                    <Typography sx={{textAlign: 'center'}}>
                    Phone:<br />
                    098 7654321<br />
                    </Typography>
                </Card>
                
                <Card 
                    sx={{ 
                        display: 'flex',
                        flexDirection:'column',
                        width: '100%',
                        position: 'relative',
                        top: 30,
                        left: '20%',
                    }}
                >
                    <IconButton aria-label='phone' sx={{mx: 'auto'}}>
                        <EmailIcon/>
                    </IconButton>
                    <Typography sx={{textAlign: 'center'}}>
                    Email:<br />
                    6410110xxx@psu.ac.th<br />
                    </Typography>
                </Card>
            </Box>  
    )
}

export default ContactCard