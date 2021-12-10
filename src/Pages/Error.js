//Router imports
import { Link } from "react-router-dom"

//MUI imports
import Container from "@mui/material/Container"
import Box from "@mui/system/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

function Error() {
    return (
        <Container
        sx={{textAlign:"center", color:"error.main", height:"90vh", display:"flex", alignItems:"center", justifyContent:"space-evenly", flexDirection:"column"}}>
            <Box p={5} sx={{border:"3px solid", bgcolor:"primary.main", color:"secondary.light", width:"100%", borderRadius:3}}>
                <Typography variant="subtitle1">¯\_(ツ)_/¯</Typography>
                <Typography variant="h1">404</Typography>
                <Typography variant="body1">Nothing here, buddy.</Typography>
            </Box>
            <Link style={{textDecoration:"none"}} to="/"><Button variant="contained" color="primary" size="large">Go back home</Button></Link>
        </Container>
    )
}

export default Error