import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Box, IconButton, Typography } from '@mui/material';

function ContactCard() {
    return(
        <Box
            sx={{ 
                display: 'flex',
                flexDirection:'row',
                width: 500,
            }}
        >
            <Box
                sx={{ 
                    display: 'flex',
                    flexDirection:'column',
                    width: '100%',
                    position: 'relative',
                    left: 660,
                    top: 800,
                }}
            >
                <IconButton aria-label='phone' sx={{mx: 'auto'}}>
                    <PhoneIcon/>
                </IconButton>
                <Typography sx={{textAlign: 'center'}}>
                    Phone:
                    098 7654321
                </Typography>
                </Box>
                
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
};

export default ContactCard