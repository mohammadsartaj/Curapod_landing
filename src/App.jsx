import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes/AppRouters";
import Navbar from "./UtilsComp/nav";
import Footer from "./UtilsComp/Footer";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <LandingPage />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      {/* <SessionProvider> */}
      <RouterProvider router={router} />
      {/* </SessionProvider> */}
    </div>
  );
}
export default App;
