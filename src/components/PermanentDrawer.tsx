import {Box, Button, Drawer} from "@mui/material";
import logo from '../assets/images/logos/white-drawer-logo.svg';
import imageIcon from '../assets/images/etc/icon-image.svg';
import {AuthContext} from "../context/AuthContext.tsx";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

const IconRow = () => {
  return <Box>
    {
      Array.from({length: 3}).map((_, index) => {
        return <Box key={index} sx={{width: '100%', justifyItems: 'center', mb: 3}}>
          <img src={imageIcon} alt='Icon' style={{width: '24px', height: '24px'}}/>
        </Box>
      })
    }
  </Box>
}

export default function PermanentDrawer() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    auth?.logout();
    navigate('/login');
  }
  return (
    <Drawer
      sx={{
        width: '104px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '104px',
          boxSizing: 'border-box',
          backgroundColor: '#1B093C',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        src={logo}
        component='img'
        alt='Logo'
        sx={{width: '90px', height: '64px', alignSelf: 'center', mt: 2}}
      />

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        mt: 6,
      }}>
        <IconRow/>
        <IconRow/>
      </Box>
      <Button
        variant={'outlined'}
        color={'secondary'}
        sx={{ mx: 2, mb: 1, fontSize: 10 }}
        onClick={() => handleLogOut()}>
        Logout
      </Button>
    </Drawer>
  )
}
