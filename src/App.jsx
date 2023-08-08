import ScrollUp from "./Components/ScrollUP/ScrollUp";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ServicePage from "./Pages/Service/ServicePage";

function App() {
  return (
    <>
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="labtop" element={<ServicePage />} />
      </Routes>
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
