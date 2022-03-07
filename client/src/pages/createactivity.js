import { Box } from "@mui/system";
import CreateAdmin from "../components/create-activity/createadmin"
import AdminAppBar from "../components/app-bar/admin-app-bar";

function adminHome(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/>
            <CreateAdmin/>
        </Box>
    )
}

export default adminHome;