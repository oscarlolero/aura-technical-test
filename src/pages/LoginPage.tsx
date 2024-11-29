import {Box} from "@mui/material";
import AuthForm from "../components/AuthForm.tsx";
import credentials from "../assets/data/credentials.json";
import {useNavigate} from "react-router-dom";
import logo from '../assets/images/white-logo.svg';
export default function LoginPage() {

  const navigate = useNavigate()

  const handleSubmit = (user: string, password: string) => {
    if (user === credentials.user && password === credentials.password) {
      navigate("/dashboard");
    } else {
      alert('Invalid credentials');
    }
  }

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
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1B093C'
    }}>
      <h1>Welcome</h1>
      <AuthForm onSubmit={handleSubmit}/>
    </Box>
  </>
}
