import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import V2ActivateDisplayArea from "../components/activity/V2activity-display-area";

function V2Register(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/>
            <br />
            <br />
            <br />
            <V2ActivateDisplayArea/>
        </Box>
    )
}

export default V2Register;