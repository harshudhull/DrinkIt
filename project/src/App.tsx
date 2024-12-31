import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IntroPage } from './pages/IntroPage';
import { AuthPage } from './pages/AuthPage';
import { ProfileSetupPage } from './pages/ProfileSetupPage';
import { HomePage } from './pages/HomePage';
import { HydrationLogPage } from './pages/HydrationLogPage';
import { RewardsPage } from './pages/RewardsPage';
import { EditProfilePage } from './pages/EditProfilePage';
import { useAuthStore } from './store/authStore';

function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/setup-profile"
          element={
            user ? <ProfileSetupPage /> : <Navigate to="/auth" replace />
          }
        />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="/log"
          element={user ? <HydrationLogPage /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="/rewards"
          element={user ? <RewardsPage /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="/profile"
          element={user ? <EditProfilePage /> : <Navigate to="/auth" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;