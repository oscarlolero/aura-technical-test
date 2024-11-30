import {Box, Typography} from "@mui/material";
import heroImage from '../assets/images/dashboard/hero-image.jpg';
import documentsImage from '../assets/images/dashboard/documents-image.svg';
import uploadYourDataImage from '../assets/images/dashboard/upload-your-data-image.svg';
import aiImage from '../assets/images/dashboard/documents-image.svg';
import SearchData from "../components/Search/SearchData.tsx";
import {OptionBox} from "../components/Dashboard/OptionBox.tsx";
import {useState} from "react";
import {UploadDataModal} from "../components/UploadData/UploadDataModal.tsx";
import {useNavigate} from "react-router-dom";


export default function DashboardPage() {
  const navigate = useNavigate();

  const [newDataFormOpen, setNewDataFormOpen] = useState(false);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh'}}>
      <Box sx={{height: '390px', width: '100%', backgroundImage: `url(${heroImage})`}}>
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
              onClick={() => null}
            />
            <OptionBox
              label={'Upload your Data'}
              image={uploadYourDataImage}
              onClick={() => setNewDataFormOpen(true)}
            />
            <OptionBox
              label={'Try our AI Tool'}
              image={aiImage}
              onClick={() => navigate('/askai')}
            />
          </Box>

        </Box>
      </Box>

      <SearchData/>

      <UploadDataModal open={newDataFormOpen} onClose={() => setNewDataFormOpen(false)}/>

    </Box>
  )
}
