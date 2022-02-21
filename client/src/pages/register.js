
import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import ActivateDisplayArea from "../components/activity/activity-display-area";

function Register(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/>
            <br />
            <br />
            <br />
            <ActivateDisplayArea/>
        </Box>
    )
}

export default Register;