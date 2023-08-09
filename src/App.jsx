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
import {
  computer,
  electricDevices,
  homeRepair,
  laptop02,
  mobile,
  screen,
} from "./assets";

function App() {
  return (
    <>
      <Header />
      {/* <Landing /> */}
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Laptop"
          element={<ServicePage title="Laptop" img={laptop02} />}
        />
        <Route
          path="Computer"
          element={<ServicePage title="Computer" img={computer} />}
        />
        <Route
          path="mobile-phones"
          element={<ServicePage title="Mobile Phones" img={mobile} />}
        />
        <Route
          path="screens"
          element={<ServicePage title="Screens" img={screen} />}
        />
        <Route
          path="home-repairs"
          element={<ServicePage title="Home Repairs" img={homeRepair} />}
        />
        <Route
          path="electric-devices"
          element={
            <ServicePage title="Electric Devices" img={electricDevices} />
          }
        />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
