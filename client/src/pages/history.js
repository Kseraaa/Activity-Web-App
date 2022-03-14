import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
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