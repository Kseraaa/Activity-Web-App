import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import HistoryDisplayArea from "../components/history/history-display-area"
import FooterBar from '../components/footer/footer-bar'

function History(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/><br/>
            <HistoryDisplayArea/>
            <FooterBar/>
        </Box>
    )
}

export default History;