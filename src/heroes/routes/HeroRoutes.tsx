import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../../ui/components';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="*" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
