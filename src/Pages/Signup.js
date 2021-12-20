//Router imports
import { Link } from "react-router-dom";

//Components imports
import SignupForm from "../Components/SignupForm";

//MUI imports
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';

import {IoMdArrowRoundBack} from "react-icons/io"
import {FaUserPlus} from "react-icons/fa"

function Signin() {
    return (
        <Container sx={{minHeight:"90vh", display:"flex", py:5,}}>
            <Container maxWidth="md"
            sx={{bgcolor:"background.default", textAlign:"center", height:"fit-content", alignSelf:"center", py:2, position: "relative",
            borderRadius:5, border:"2px solid", borderColor:"secondary.main"}}>
                
                <Link to="/" style={{ textDecoration: "none" }}>
                    <IconButton variant="outlined" color="secondary" size="large"
                    sx={{ position: "absolute", left: "0", top: "0", m: 1}}>
                        <IoMdArrowRoundBack />
                    </IconButton>
                </Link>
                
                <Box>
                    <Box my={3}>
                        <FaUserPlus style={{transform:"scale(5)"}}/>
                    </Box>
                    <Divider><Typography variant="h6">Join Booksies</Typography></Divider>
                </Box>

                <SignupForm/>

                <Divider sx={{my:2}}><Typography variant="subtitle2">Already a member?</Typography></Divider>
                    <Link to="/login" style={{ textDecoration: "none"}}>
                        <Button size="small" variant="outlined" color="secondary">Login</Button>
                    </Link>
            </Container>
            
        </Container>
    )
}

export default Signin
