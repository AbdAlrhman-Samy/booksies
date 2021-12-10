//Router imports
import { Link } from "react-router-dom";

//MUI imports
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

//Assets imports
import logo from '../Assets/logo.png'
import {FcConferenceCall} from 'react-icons/fc'
import {FcSearch} from 'react-icons/fc'
import {FcReading} from 'react-icons/fc'
import {FiLogIn} from 'react-icons/fi'
import {BsFillPersonPlusFill} from 'react-icons/bs'


function Home() {
    return (
        <Container>
            <Box my={2} marginRight={0}>
                <Link style={{ textDecoration: "none" }} to="login"><Button variant="contained" startIcon={<FiLogIn/>}>Login</Button></Link>
            </Box>

            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{minHeight:'80vh', textAlign:'center'}}>
                <Grid item md={7}>
                    <Box component="img" src={logo} my={3} maxWidth="100%"/>
                </Grid>

                <Grid item md={5}>
                    <Typography variant="h5"><FcConferenceCall/> Follow Friends</Typography>
                    <br/>
                    <Typography variant="h5"><FcReading/> Share Your Reviews</Typography>
                    <br/>
                    <Typography variant="h5"><FcSearch/> Discover New Books</Typography>

                    <Divider sx={{my:4}}><Typography variant="subtitle2">Are you intrested?</Typography></Divider>
                    <Link style={{ textDecoration: "none" }} to="signup">
                        <Button variant="outlined" color="secondary" startIcon={<BsFillPersonPlusFill/>}> Create an Account!</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
