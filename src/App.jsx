import "./App.css";

import ScrollUp from "./Components/ScrollUP/ScrollUp";
import Footer from "./Components/Footer/Footer";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ServicePage from "./Pages/Service/ServicePage";
import { AnimatePresence, useCycle } from "framer-motion";
import * as React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  computer,
  electricDevices,
  homeRepair,
  laptop02,
  mobile,
  screen,
} from "./assets";
import console from "./assets/console.jpg";
import { useTranslation } from "react-i18next";
import { infoCard } from "./Constants";

function App() {
  const [plan, setPlan] = useState("");
  const [contactButton, setConatctButton] = useState(false);
  const [lang, setlang] = useCycle("ar", "en");
  const { t, i18n } = useTranslation();
  const element = useRoutes([
    {
      path: "/",
      element: (
        <Home
          setConatctButton={setConatctButton}
          t={t}
          i18n={i18n}
          lang={lang}
          setlang={setlang}
        />
      ),
    },
    {
      path: "/Laptop",
      element: (
        <ServicePage
          setConatctButton={setConatctButton}
          contactButton={contactButton}
          title="laptoptitle"
          img={laptop02}
          services={`${infoCard[0].services}`}
          t={t}
          i18n={i18n}
          lang={lang}
          setlang={setlang}
        />
      ),
    },
    {
      path: "/Computer",
      element: (
        <ServicePage
          setConatctButton={setConatctButton}
          contactButton={contactButton}
          title="computertitle"
          img={computer}
          services={`${infoCard[2].services}`}
          t={t}
          i18n={i18n}
          lang={lang}
          setlang={setlang}
        />
      ),
    },
    {
      path: "/mobile-phones",
      element: (
        <ServicePage
          setConatctButton={setConatctButton}
          contactButton={contactButton}
          title="mobilephonetitle"
          img={mobile}
          services={`${infoCard[1].services}`}
          i18n={i18n}
          t={t}
          lang={lang}
          setlang={setlang}
        />
      ),
    },
    {
      path: "/screens",
      element: (
        <ServicePage
          setConatctButton={setConatctButton}
          contactButton={contactButton}
          title="screentitle"
          img={screen}
          services={`${infoCard[3].services}`}
          t={t}
          i18n={i18n}
          lang={lang}
          setlang={setlang}
        />
      ),
    },
    {
      path: "/home-repairs",
      element: (
        <ServicePage
          setConatctButton={setConatctButton}
          contactButton={contactButton}
          title="homeRepairstitle"
          img={homeRepair}
          services={`${infoCard[5].services}`}
          t={t}
          i18n={i18n}
          lang={lang}
          setlang={setlang}
        />
      ),
    },
    {
      path: "/electric-devices",
      element: (
        <ServicePage
          setConatctButton={setConatctButton}
          contactButton={contactButton}
          title="electricDevicetitle"
          img={electricDevices}
          services={`${infoCard[4].services}`}
          t={t}
          i18n={i18n}
          lang={lang}
          setlang={setlang}
        />
      ),
    },
    {
      path: "/gaming-console",
      element: (
        <ServicePage
          setConatctButton={setConatctButton}
          contactButton={contactButton}
          title="gamingConsoleTitle"
          img={console}
          services={`${infoCard[6].services}`}
          t={t}
          i18n={i18n}
          lang={lang}
          setlang={setlang}
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
      <Footer t={t} lang={lang} setConatctButton={setConatctButton} />
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
