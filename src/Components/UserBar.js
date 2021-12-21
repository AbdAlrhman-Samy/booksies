//Router imports
import { Link } from "react-router-dom";

//MUI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';


import logo from '../Assets/logo.png'

function UserBar() {
    return (
        <AppBar position='sticky' sx={{ px:3, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Box src={logo} component='img' sx={{width:"4em", height:"100%"}}/>
            <Link style={{ textDecoration: "none"}} to="/profile">
                <Avatar alt="SrcsticSamy Avatar"
                sx={{ width: "2.5em", height:"auto", display:"inline-block", mt:1, border:"2px solid", borderColor:"primary.light"}}
                src="https://avatars.dicebear.com/api/male/srcsticsamy.svg" />
            </Link>

            
        </AppBar>
    )
}

export default UserBar
