import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import HistoryDisplayArea from "../components/history/history-display-area"

function History(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/><br/>
            <HistoryDisplayArea/>
        </Box>
    )
}

export default History;