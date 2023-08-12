import "./App.css";
import Header from "./Components/header/Header";
import Landing from "./Components/landing/Landing";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import ScrollUp from "./Components/ScrollUP/ScrollUp";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, useLocation, useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ServicePage from "./Pages/Service/ServicePage";
import Landing2 from "./Components/landing2/Landing2";
import SubLanding from "./Components/SubLandingRoutes/SubLanding";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { motion } from "framer-motion";

import {
  computer,
  electricDevices,
  homeRepair,
  laptop02,
  mobile,
  screen,
} from "./assets";
import HomeContact from "./Components/HomeContactUS/HomeContact";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Laptop",
      element: <ServicePage title="Laptop" img={laptop02} services="Laptop" />,
    },
    {
      path: "/Computer",
      element: (
        <ServicePage title="Computer" img={computer} services="Computer" />
      ),
    },
    {
      path: "/mobile-phones",
      element: (
        <ServicePage
          title="Mobile Phones"
          img={mobile}
          services="Mobile Phones"
        />
      ),
    },
    {
      path: "/screens",
      element: <ServicePage title="Screens" img={screen} services="Screens" />,
    },
    {
      path: "/home-repairs",
      element: (
        <ServicePage
          title="Home Repairs"
          img={homeRepair}
          services="Home Repairs"
        />
      ),
    },
    {
      path: "/electric-devices",
      element: (
        <ServicePage
          title="Electric Devices"
          img={electricDevices}
          services="Electric Devices"
        />
      ),
    },
  ]);
  const location = useLocation();
  function ScrollToTop() {
    const location = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return null;
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
      <ScrollUp />

      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
        <ScrollToTop />
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}

export default App;
{
  /* <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="Laptop"
            element={<ServicePage title="Laptop" img={laptop02} />}
          />
          <Route
            path="/Computer"
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
        </Routes> */
}
