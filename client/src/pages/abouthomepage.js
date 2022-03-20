import { Box } from "@mui/system";
import FooterBar from "../components/footer/footer-bar";
import About from "../components/about/adout";
import PannAppBar from "../components/app-bar/pann-app-bar";

function Abouthomepage() {
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/>
            <About/>
            <FooterBar/>
        </Box>
    )
};

export default Abouthomepage;