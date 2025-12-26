import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./Components/LandingPage";
import LoginWithNavigation from "./Components/LoginWithNavigation";
import RegisterWithNavigation from "./Components/ RegisterWithNavigation";
import ProfileWithNavigation from "./Components/ProfileWithNavigation";

import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginWithNavigation />} />
        <Route path="/register" element={<RegisterWithNavigation />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileWithNavigation />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
