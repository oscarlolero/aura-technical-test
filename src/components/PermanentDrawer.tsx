import {Box, Drawer} from "@mui/material";
import logo from '../assets/images/white-drawer-logo.svg';
import imageIcon from '../assets/images/icon-image.svg';

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
    </Drawer>
  )
}
