import {Box, Button, FormLabel, TextField} from "@mui/material";
import {useState} from "react";

export default function AuthForm({onSubmit}: {onSubmit: (user: string, password: string) => void}) {

  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    onSubmit(user, password);
  }

  return (
    <Box sx={{mt: 6, width: '320px', display: 'flex', flexDirection: 'column'}}>
      <FormLabel sx={{fontSize: 14, color: 'white', fontWeight: 'bold', mb: 1}}>
        User
      </FormLabel>
      <TextField
        sx={{
          height: '48px',
          backgroundColor: 'white',
          borderRadius: '6px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            height: '48px',
          },
        }}
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <FormLabel sx={{fontSize: 14, color: 'white', fontWeight: 'bold', mt: 4, mb: 1}}>
        Password
      </FormLabel>
      <TextField
        sx={{
          height: '48px',
          backgroundColor: 'white',
          borderRadius: '6px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            height: '48px',
          }
        }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        sx={{
          mt: 4,
          height: '50px',
          width: '100%',
          backgroundColor: '#2D3648',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          textTransform: 'none',
          textShadow: '2px 2px 4px black',
        }}
        variant={'contained'}
        onClick={() => handleSubmit()}
      >Continue</Button>
    </Box>
  )
}
