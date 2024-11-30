import {useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {createCompletion} from "../utils/openaiClient.ts";
import {useNavigate} from "react-router-dom";

export interface Message {
  isAI: boolean;
  text: string | null;
}

export const AskAIPage = () => {

  const navigate = useNavigate();

  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {isAI: true, text: "Hello! I am Aura AI. How can I help you today?"},
  ]);

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === "Enter") {
      handleAskAI();
    }
  };

  const handleAskAI = async () => {
    try {
      const userMessage = { isAI: false, text: prompt };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setPrompt('');
      const response = await createCompletion([...messages, userMessage]);
      setMessages((prevMessages) => [...prevMessages, { isAI: true, text: response }]);
    } catch (error) {
      console.error('Error asking AI:', error);
    }
  };

  return <>
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', p: 2}}>
      <Box>
        <Button
          variant={"outlined"}
          color={"primary"}
          sx={{position: 'absolute'}}
          onClick={() => navigate('/dashboard')}
        >Back</Button>
      </Box>
      <Typography variant={'h2'} color={'black'} fontFamily={'Sansation'} align={'center'} sx={{mb: 2}}>
        Aura AI
      </Typography>

      <Box sx={{flexGrow: 1}}>
        {messages.map((message, index) => (
          <Box key={index} sx={{display: "flex", justifyContent: message.isAI ? "flex-start" : "flex-end"}}>
            <Box
              sx={{
                backgroundColor: message.isAI ? "#F0F0F0" : "#E0F7FA",
                borderRadius: "4px",
                padding: "8px",
                margin: "4px",
              }}
            >
              <Typography variant={"body1"} color={"black"}>
                {message.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{display: 'flex'}}>
        <TextField
          sx={{mr: 2}}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          label={"Ask AI"}
          onKeyDown={handleKeyDown}
          variant={"outlined"}
          fullWidth
        />
        <Button
          variant={"contained"}
          color={"primary"}
          onClick={() => handleAskAI()}
        >Send</Button>
      </Box>
    </Box>
  </>
}
