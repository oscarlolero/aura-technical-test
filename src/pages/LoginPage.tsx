import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Typography} from "@mui/material";

import {AuthContext} from "../context/AuthContext.tsx";
import AuthForm from "../components/Auth/AuthForm.tsx";

import logo from '../assets/images/logos/white-logo.png';

export default function LoginPage() {

  const navigate = useNavigate()
  const auth = useContext(AuthContext);

  const handleSubmit = (user: string, password: string) => {
    if (user === import.meta.env.VITE_USER_EMAIL && password === import.meta.env.VITE_USER_PASSWORD) {
      auth?.login();
      navigate("/dashboard");
    } else {
      alert('Invalid credentials');
    }
  }

  useEffect(() => {
    if (auth?.isAuthenticated) {
      navigate('/dashboard');
    }
  }, []);

  return <>
    <Box
      component="img"
      src={logo}
      alt='Logo'
      sx={{
        position: 'absolute',
        top: '22px',
        left: '37px',
      }}/>
    <Box sx={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1B093C'
    }}>
      <Typography variant={'h1'} fontFamily={'Inter'}>
        Welcome
      </Typography>
      <AuthForm onSubmit={handleSubmit}/>
    </Box>
  </>
}
