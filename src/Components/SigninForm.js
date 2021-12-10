//React imports
import { useState } from 'react';

//MUI imports
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SigninForm() {

    const [email, setEmail] = useState('')
    const [pswrd, setPswrd] = useState('')

    function handleLogin(e) {
        e.preventDefault()

        console.log(email, pswrd);

        setEmail('')
        setPswrd('')
    }

    return (
        <Container maxWidth="md" component="form" sx={{display:"flex", flexDirection:"column", my:3}} onSubmit={handleLogin}>

            <TextField margin="small" label="Email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} color="secondary" required/>
            <TextField margin="normal" label="Password" type="password" value={pswrd} onChange={(e)=>setPswrd(e.target.value)} color="secondary" required/>

            <Button variant="contained" type="submit" disableElevation sx={{color:"text.light"}}>Log in</Button>
        </Container>
    )
}

export default SigninForm
