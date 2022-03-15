import { Box } from "@mui/system";
import CreateActivity from "../components/create-activity/createactivity"
import AdminAppBar from "../components/app-bar/admin-app-bar";

function AdminHome(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/>
            <CreateActivity/>
        </Box>
    )
}

export default AdminHome;