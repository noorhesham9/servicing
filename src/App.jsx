import "./App.css";
import Header from "./Components/header/Header";
import Landing from "./Components/landing/Landing";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import ScrollUp from "./Components/ScrollUP/ScrollUp";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ServicePage from "./Pages/Service/ServicePage";
import Landing2 from "./Components/landing2/Landing2";
import SubLanding from "./Components/SubLandingRoutes/SubLanding";

function App() {
  return (
    <>
      <Header />
      {/* <Landing /> */}
      {/* <Landing2 /> */}
      <SubLanding />
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Laptop" element={<ServicePage title="Laptop" />} />
      </Routes>
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
