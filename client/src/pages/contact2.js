import { Box } from "@mui/system";
import PubAppBar from "../components/app-bar/public-app-bar";
import ContactCard from "../components/contact/contact-card";
import ContactStudentCard from "../components/contact/contact-student-card";


function Contact2(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PubAppBar/>
            <ContactStudentCard/>
            <ContactCard/>
        </Box>
    )
}

export default Contact2;