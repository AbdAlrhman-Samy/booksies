//React imports
import { useState } from 'react';

//Router imports
import { useNavigate } from "react-router-dom";

//MUI imports
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignupForm() {
    const auth = getAuth()

    let navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pswrd, setPswrd] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSignup = async (e) =>{
        e.preventDefault()

        setLoading(true)

        createUserWithEmailAndPassword(auth, email, pswrd)
        .then(userCreds => {
            updateProfile(userCreds.user, {
                displayName: username,
            }).then(() => {
                setTimeout(() => {
                    navigate("/profile");
                  }, 1500);
            })
            
        })
        .catch(err => {
            console.log(err);
        })

        return ()=> console.log('unsub');
    }


    return (
        <Container maxWidth="md" component="form" sx={{display:"flex", flexDirection:"column", my:2}} onSubmit={handleSignup}>

            <TextField margin="dense" label="Username" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} color="secondary" required/>
            <TextField margin="dense" label="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} color="secondary" required/>
            <TextField margin="dense" label="Password" type="password" value={pswrd} onChange={(e)=>setPswrd(e.target.value)} color="secondary" required/>

            

            {loading?
            <Button variant="contained" type="submit" disableElevation sx={{color:"text.light", mt:1}} disabled>Creating Account...</Button>
            :
            <Button variant="contained" type="submit" disableElevation sx={{color:"text.light", mt:1}}>Sign up</Button>
            }
        </Container>
    )
}

export default SignupForm
