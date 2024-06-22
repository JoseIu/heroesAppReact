import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroRoutes } from '../heroes/routes/HeroRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HeroRoutes />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
