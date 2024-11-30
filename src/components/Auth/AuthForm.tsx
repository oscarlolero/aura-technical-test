import {useState} from "react";
import {Box, Button, InputLabel, TextField} from "@mui/material";

import {isValidMail} from "../../utils/utils.ts";

interface AuthFormProps {
  onSubmit: (user: string, password: string) => void;
}

export default function AuthForm({onSubmit}: AuthFormProps) {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ user: string; password: string }>({ user: '', password: '' });

  const handleSubmit = () => {
    if (!isValidMail(email) || !password) {
      setErrors({
        user: !isValidMail(email) ? 'Invalid email' : '',
        password: !password ? 'Invalid password' : '',
      })
      return;
    } else {
      setErrors({user: '', password: ''});
    }

    onSubmit(email, password);
  }

  return (
    <Box sx={{mt: 6, width: '320px', display: 'flex', flexDirection: 'column'}}>
      <InputLabel sx={{fontSize: 14, color: 'white', fontWeight: 'bold', mb: 1}}>
        User
      </InputLabel>
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
        value={email}
        error={!!errors.user}
        helperText={errors.user}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputLabel sx={{fontSize: 14, color: 'white', fontWeight: 'bold', mt: 4, mb: 1}}>
        Password
      </InputLabel>
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
        error={!!errors.password}
        helperText={errors.password}
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
