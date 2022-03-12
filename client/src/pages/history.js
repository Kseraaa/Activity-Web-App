import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import HistoryDisplayArea from "../components/history/history-display-area"
import FooterBar from '../components/footer/footer-bar'
import HistoryCard from "../components/history/history-card";

function History(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/><br/>
            <HistoryCard/>
            <FooterBar/>
        </Box>
    )
}

export default History;