import MainLayout from "layouts/MainLayout";
import { Favorites, Home, Teachers } from "pages";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
