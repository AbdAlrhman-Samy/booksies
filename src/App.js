//Router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI imports
import Container from '@mui/material/Container';

//Pages imports
import Home from "./Pages/Home"
import Error from "./Pages/Error"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import Timeline from "./Pages/Timeline"

//Assets imports
import bg from "./Assets/bg.svg"

export default function App() {
  
  return (
    <BrowserRouter>
      <Container maxWidth="false"
      sx={{backgroundImage: `url(${bg})`, minHeight: "100vh", backgroundRepeat:"no-repeat",
            backgroundSize:"cover", py:2}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/timeline" element={<Timeline/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}