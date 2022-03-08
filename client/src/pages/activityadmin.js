import { Box } from "@mui/system";
import ActivateList from "../components/activitylist/activitylist";
import AdminAppBar from "../components/app-bar/admin-app-bar";

function ActivityAdmin(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/>
            <ActivateList/>
        </Box>
    )
}

export default ActivityAdmin;