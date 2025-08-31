import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
