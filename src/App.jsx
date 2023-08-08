import "./App.css";
import Header from "./Components/header/Header";
import Landing from "./Components/landing/Landing";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import ScrollUp from "./Components/ScrollUP/ScrollUp";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <ScrollUp />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
