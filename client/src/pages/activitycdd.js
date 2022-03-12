import { Box } from "@mui/system";
import CddActivity from "../components/activitylist/cdd-activity";
import AdminAppBar from "../components/app-bar/admin-app-bar";

function Activitycdd(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/><br/>
            <CddActivity/>
        </Box>
    )
}

export default Activitycdd;
