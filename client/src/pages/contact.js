import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import ContactCard from "../components/contact/contact-card";
import ContactStudentCard from "../components/contact/contact-student-card";


function Contact(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/>
            <ContactStudentCard/>
            <ContactCard/>
        </Box>
    )
}

export default Contact;