import { Box } from "@mui/system";
import PannAppBar from "../components/app-bar/pann-app-bar";
import Regis1Area from "../components/register/regis1";
import Regis2Area from "../components/register/regis2";

function Register(){
    return(
        <Box sx={{ flexGrow: 1}}>
            <PannAppBar/>
            <br />
            <br />
            <br />
            <Regis1Area/>
            <br />
            <Regis2Area/>
        </Box>
    )
}

export default Register;