import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import PermanentDrawer from "./components/PermanentDrawer.tsx";
import {Box} from "@mui/material";
import {AskAIPage} from "./pages/AskAIPage.tsx";
import {PrivateRoute} from "./components/Auth/PrivateRoute.tsx";
import {AuthContext} from "./context/AuthContext.tsx";
import {useContext} from "react";

function App() {

  const {isAuthenticated} = useContext(AuthContext);

  return (
    <Box sx={{display: 'flex'}}>
      {isAuthenticated && <PermanentDrawer/>}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage/>}/>
        {/* Protected routes */}
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/askai" element={<AskAIPage/>}/>
          <Route path="*" element={<h3>Page not found!</h3>}/>
        </Route>
      </Routes>
    </Box>
  )
}

export default App
