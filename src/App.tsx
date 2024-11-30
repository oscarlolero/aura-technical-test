import {Route, Routes, useLocation} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import './App.css'
import DashboardPage from "./pages/DashboardPage.tsx";
import PermanentDrawer from "./components/PermanentDrawer.tsx";
import {Box} from "@mui/material";
import {AskAIPage} from "./pages/AskAIPage.tsx";

function App() {
  const location = useLocation();
  const hideDrawer = location.pathname === "/login";

  return (
    <Box sx={{display: 'flex'}}>
      {!hideDrawer && <PermanentDrawer/>}
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/askai" element={<AskAIPage/>}/>
        <Route path="*" element={<>404</>}/>
      </Routes>
    </Box>
  )
}

export default App
