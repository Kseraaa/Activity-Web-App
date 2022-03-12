import { Box } from "@mui/system";
import FcfsActivity from "../components/activitylist/fcfs-activity";
import AdminAppBar from "../components/app-bar/admin-app-bar";

function Activityfcfs(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/><br/>
            <FcfsActivity/>
        </Box>
    )
}

export default Activityfcfs;