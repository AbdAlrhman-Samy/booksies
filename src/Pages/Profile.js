//Router imports
import { Link, useNavigate } from "react-router-dom";

//Components imports
import Bookshelf from "../Components/Bookshelf";

//MUI imports
import Container from "@mui/material/Container"
import Box from "@mui/system/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {FiLogOut, FiEdit2} from 'react-icons/fi'
import {ImHome} from 'react-icons/im'

import { getAuth, signOut } from "firebase/auth";

import { useContext } from "react"
import { AuthContext } from "../API/AuthContext"


function Profile() {

    let navigate = useNavigate();

    const user = useContext(AuthContext)

    if (user) {console.log(user)}

    const handleLogout = () => {
        signOut(getAuth())
        .then(()=>{
            console.log('logged out');
            setTimeout(() => {
                navigate("/");
              }, 2000);
        })
        .catch((err)=>{
            console.log(err);
        })

    }

    return (
        <Container maxWidth="false">
            <Box p={1} sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", textAlign:"center", }}>

                <Avatar alt="SrcsticSamy Avatar"
                sx={{ minWidth: "110px", height:"auto", display:"inline-block", m:1, border:"2px solid", borderColor:"primary.light", bgcolor:"white", p:0.5}}
                src={`https://avatars.dicebear.com/api/bottts/${user? user.displayName : "none"}.svg?background=%23ffffff`} />

                <Box>
                    <Typography variant="h5" sx={{fontWeight:"600"}}>
                        {user? user.displayName : null}
                        <IconButton aria-label="edit" color="primary" size="big"><FiEdit2/></IconButton>
                    </Typography>
                </Box>

            </Box>

            <Box mx="auto" p={0.5} mb={1} sx={{bgcolor:"background.default"}}>
                <Typography variant="body2" sx={{fontWeight:"light", textAlign:"center"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, non quidem delectus omnis dignissimos optio assumenda atque vel similique. </Typography>
            </Box>

            <Box mx="auto" mb={2} sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                <Link style={{ textDecoration: "none" }} to="/timeline"><Button variant="contained" color="secondary" startIcon={<ImHome/>}>Home</Button></Link>
        
                <Button variant="contained" size="small" color="primary" endIcon={<FiLogOut/>} onClick={handleLogout}>Log out</Button>
            </Box>
            
            <Bookshelf/>

        </Container>
    )
}

export default Profile
