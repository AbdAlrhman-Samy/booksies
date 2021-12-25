//React imports
import { useState } from 'react';

//Router imports
import { useNavigate } from "react-router-dom";


//MUI imports
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function SigninForm() {

    let navigate = useNavigate();

    const auth = getAuth()

    const [email, setEmail] = useState('')
    const [pswrd, setPswrd] = useState('')
    const [loading, setLoading] = useState(false)


    const handleLogin = async (e) =>{
        e.preventDefault()

        setLoading(true)

        signInWithEmailAndPassword(auth, email, pswrd)
        .then(user => {
            console.log(user);
            setTimeout(() => {
                navigate("/profile");
              }, 1500);
        })
        .catch(err => {
            console.log(err);
        })

        return ()=> console.log('unsub');
    }

    return (
        <Container maxWidth="md" component="form" sx={{display:"flex", flexDirection:"column", my:3}} onSubmit={handleLogin}>

            <TextField margin="dense" label="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} color="secondary" required/>
            <TextField margin="normal" label="Password" type="password" value={pswrd} onChange={(e)=>setPswrd(e.target.value)} color="secondary" required/>

            {loading?
            <Button variant="contained" type="submit" disableElevation sx={{color:"text.light"}} disabled >Logging in...</Button>
            :
            <Button variant="contained" type="submit" disableElevation sx={{color:"text.light"}}>Log in</Button>
            }
        </Container>
    )
}

export default SigninForm
