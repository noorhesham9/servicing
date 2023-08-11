import { Box } from "@mui/material";
import Services from "../../Components/Services/Services";
import Landing2 from "../../Components/landing2/Landing2";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";
function Home() {
  return (
    <>
      <Header home="scroll" />
      <Landing2 />
      <Services />
      <HomeContact name="contactus" />
    </>
  );
}

export default Home;
