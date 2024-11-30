import {Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

interface UploadDataFormProps {
  open: boolean;
  onClose: () => void;
}

export const UploadDataModal = ({open, onClose}: UploadDataFormProps) => {

  const allExpertLabels = ['competitor', 'customer', 'industry consultant', 'former executive', 'partner'];
  const [type, settype] = useState<number>(0);
  const [expert, setExpert] = useState<string[]>([]);

  const handleExpertChange = (label: string) => {
    if (expert.includes(label)) {
      setExpert(expert.filter((item) => item !== label));
    } else {
      setExpert([...expert, label]);
    }
  };

  const handleAllChange = () => {
    if (expert.length === allExpertLabels.length) {
      setExpert([]);
    } else {
      setExpert(allExpertLabels);
    }
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={() => onClose()}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (expert.length === 0) {
            alert('Error: Please select at least one expert');
          } else {
            alert('Submit form');
          }
        }
      }}
    >
      <DialogTitle>
        <Typography variant={'h3'} fontFamily={'Sansation'}>
          New Data
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          '& .MuiInputLabel-asterisk': {
            color: 'red'
          }

        }}
      >
        <InputLabel required>Project name</InputLabel>
        <TextField
          sx={{mt: 1}}
          autoFocus
          required
          id='name'
          name='name'
          type='text'
          placeholder='E.g. Microsoft Research'
          fullWidth
        />

        <InputLabel required sx={{mt: 4}}>Project type</InputLabel>
        <Select
          sx={{mt: 1}}
          required
          id='type'
          name='type'
          variant='outlined'
          fullWidth
          value={type}
          onChange={(e) => settype(e.target.value as number)}
        >
          <MenuItem value={0}>Company Research</MenuItem>
          <MenuItem value={1}>Management Research</MenuItem>
          <MenuItem value={2}>Industry Research</MenuItem>
        </Select>

        {/* If type is "Company Research" show Companies field */}
        {
          type === 0 && (
            <>
              <InputLabel required sx={{mt: 4}}>Companies</InputLabel>
              <TextField
                sx={{mt: 1}}
                required
                id='description'
                name='description'
                type='text'
                placeholder='Please define the purpose for this project.'
                fullWidth
              />
            </>
          )
        }

        <InputLabel sx={{mt: 4}}>Project Description</InputLabel>
        <TextField
          sx={{mt: 1}}
          id='description'
          name='description'
          type='text'
          placeholder='Please define the purpose for this project.'
          fullWidth
        />

        <InputLabel sx={{mt: 4}}>Project Description</InputLabel>
        <TextField
          multiline
          sx={{mt: 1}}
          id='description'
          name='description'
          type='text'
          placeholder='Tell us the range for the numbers of experts you want us to include for this research and the type of experts in order for us to start expert
screening stage.'
          fullWidth
        />

        <InputLabel required sx={{mt: 4}}>Expert</InputLabel>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={expert.length === allExpertLabels.length}
                  indeterminate={expert.length > 0 && expert.length < allExpertLabels.length}
                  onChange={handleAllChange}
                />
              }
              label="All"
            />
            {['competitor', 'customer'].map((label) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={expert.includes(label)}
                    onChange={() => handleExpertChange(label)}
                  />
                }
                label={label.charAt(0).toUpperCase() + label.slice(1)}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            {['industry consultant', 'former executive', 'partner'].map((label) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={expert.includes(label)}
                    onChange={() => handleExpertChange(label)}
                  />
                }
                label={label.charAt(0).toUpperCase() + label.slice(1)}
              />
            ))}
          </Box>
        </FormGroup>
        <DialogActions sx={{justifyContent: 'left', mt: 2, p: 0}}>
          <Button
            sx={{textTransform: 'none', fontFamily: 'Sansation', fontWeight: '300', width: '160px', fontSize: '18px'}}
            onClick={() => onClose()}
            variant={'outlined'}
          >Cancel</Button>
          <Button
            sx={{textTransform: 'none', backgroundColor: '#E8E5F9', color: 'black', fontWeight: 'bold', fontFamily: 'Sansation', width: '160px', fontSize: '18px'}}
            type="submit"
            variant={'outlined'}
          >Upload</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}
