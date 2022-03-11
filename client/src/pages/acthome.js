import { Box } from "@mui/system";
import PublicAppBar from "../components/app-bar/public-app-bar"

function PubHome(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PublicAppBar/>
        </Box>
    )
}

export default PubHome;