import {Box, Typography} from "@mui/material";
import heroImage from '../assets/images/dashboard/hero-image.jpg';
import documentsImage from '../assets/images/dashboard/documents-image.svg';
import uploadYourDataImage from '../assets/images/dashboard/upload-your-data-image.svg';
import aiImage from '../assets/images/dashboard/documents-image.svg';
import SearchData from "../components/Search/SearchData.tsx";

interface OptionBoxProps {
  onClick: () => void;
  label: string;
  image: string;
}

const OptionBox = ({onClick, label, image}: OptionBoxProps) => {
  return <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "4px",
      padding: "16px",
      width: "180px",
      height: "180px",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <img src={image} alt={`${label} image`} style={{height: "120px", width: "120px"}}/>
    <Typography variant={"subtitle1"} fontFamily={"Sansation"} color={"#3E4551"}>
      {label}
    </Typography>
  </Box>;
}

export default function DashboardPage() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh'}}>
      <Box sx={{height: '397px', width: '100%', backgroundImage: `url(${heroImage})`}}>
        <Box sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
          <Typography variant={'h2'} fontFamily={'Sansation'} sx={{mb: 2}}>
            AURA
          </Typography>
          <Typography variant={'h3'} fontFamily={'Sansation'}>
            Augmented Universal Research Assistant
          </Typography>
          <Typography variant={'body1'} fontFamily={'Sansation'} sx={{textShadow: "2px 2px 3px black", mt: 1}}>
            Your in one single intuitive platform along side with your team.
          </Typography>

          <Box sx={{display: 'flex', mt: 4, gap: '32px'}}>
            <OptionBox
              label={'Search Data'}
              image={documentsImage}
              onClick={() => alert('Search Data')}
            />
            <OptionBox
              label={'Upload your Data'}
              image={uploadYourDataImage}
              onClick={() => alert('Search Data')}
            />
            <OptionBox
              label={'Try our AI Tool'}
              image={aiImage}
              onClick={() => alert('Search Data')}
            />
          </Box>

        </Box>
      </Box>

      <SearchData/>
    </Box>
  )
}
