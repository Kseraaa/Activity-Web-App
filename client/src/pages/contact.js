import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import ContactCard from "../components/contact/contact-card";

function Contact(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/>
            <ContactCard/>
        </Box>
    )
}

export default Contact;