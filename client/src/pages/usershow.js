import { Box } from "@mui/system";
import AdminAppBar from "../components/app-bar/admin-app-bar";
import UserList from "../components/usershow/userlist";

function UserShow(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <AdminAppBar/>
            <UserList/>
        </Box>
    )
}

export default UserShow;