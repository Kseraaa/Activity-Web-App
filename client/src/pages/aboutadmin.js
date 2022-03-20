import { Box } from "@mui/system";
import FooterBar from "../components/footer/footer-bar";
import Adminabout from "../components/about/adminabout";
import AdminAppBar from "../components/app-bar/admin-app-bar";

function AboutAdmin() {
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/>
            <Adminabout/>
            <FooterBar/>
        </Box>
    )
};

export default AboutAdmin;