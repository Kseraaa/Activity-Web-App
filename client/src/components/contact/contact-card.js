import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Box, IconButton, Typography } from '@mui/material';

function ContactCard() {
    return(
            <Box 
                sx={{ 
                    display: 'flex',
                    flexDirection:'row',
                    border: '1px dashed grey',
                    p: 0,
                    m: 4,
                    width: 400,
                    bottom: 750,
                    left: '50%',
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex',
                        flexDirection:'column',
                        width: '100%',
                        
                    }}
                >
                    <IconButton aria-label='phone' sx={{mx: 'auto'}}>
                        <PhoneIcon/>
                    </IconButton>
                    <Typography sx={{textAlign: 'center'}}>
                    Phone:<br />
                    098 7654321<br />
                    </Typography>
                </Box>
                
                <Box 
                    sx={{ 
                        display: 'flex',
                        flexDirection:'column',
                        width: '100%',
                    }}
                >
                    <IconButton aria-label='phone' sx={{mx: 'auto'}}>
                        <EmailIcon/>
                    </IconButton>
                    <Typography sx={{textAlign: 'center'}}>
                    Email:<br />
                    6410110xxx@psu.ac.th<br />
                    </Typography>
                </Box>
            </Box>  
    )
}

export default ContactCard