import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Card, IconButton, Typography } from '@mui/material';

function ContactCard() {
    return(
        <Box
            sx={{ 
                display: 'flex',
                flexDirection:'row',
                width: 600,
                mx: "auto",
                bottom: '50%',
                border: '1px dashed grey',
            }}
        >
            <Box
                sx={{ 
                    display: 'flex',
                    flexDirection:'column',
                    width: '100%',
                    height: 'auto',
                    border: '1px dashed grey',
                }}
            >
                <IconButton aria-label='phone' sx={{mx: 'auto'}}>
                    <PhoneIcon/>
                </IconButton>
                <Typography sx={{textAlign: 'center'}}>
                    Phone: 098 7654321
                </Typography>
            </Box>
            
            <Box
                sx={{ 
                    display: 'flex',
                    flexDirection:'column',
                    width: '100%',
                    height: 'auto',
                    border: '1px dashed grey',
                }}
            >
                <IconButton aria-label='phone' sx={{mx: 'auto'}}>
                    <PhoneIcon/>
                </IconButton>
                <Typography sx={{textAlign: 'center'}}>
                    Email: 6410110xxx@psu.ac.th
                </Typography>
            </Box>
        </Box> 
    )
}

export default ContactCard