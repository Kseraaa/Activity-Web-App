import { Box } from "@mui/system";
import PublicAppBar from "../components/app-bar/public-app-bar"
import PubActivateDisplayArea from "../components/pubhome/pubactivitylist";

function PubHome(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PublicAppBar/>
            <ubActivateDisplayArea/>
        </Box>
    )
}

export default PubHome;