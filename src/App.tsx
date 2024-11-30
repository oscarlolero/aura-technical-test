import { useContext, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import { PrivateRoute } from "./components/Auth/PrivateRoute.tsx";
import { AuthContext } from "./context/AuthContext.tsx";
import PermanentDrawer from "./components/PermanentDrawer.tsx";

// Lazy loading for pages
const LoginPage = lazy(() => import("./pages/LoginPage.tsx"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.tsx"));
const AskAIPage = lazy(() => import("./pages/AskAIPage.tsx"));

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Box sx={{ display: 'flex' }}>
      {isAuthenticated && <PermanentDrawer />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/askai" element={<AskAIPage />} />
            <Route path="*" element={<h3>Page not found!</h3>} />
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
