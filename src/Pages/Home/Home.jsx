import { Box } from "@mui/material";
import Services from "../../Components/Services/Services";
import Landing2 from "../../Components/landing2/Landing2";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";
import Plan from "../../Components/Plan/Plan";
import { useState } from "react";
function Home() {
  const [plan, setPlan] = useState("");

  return (
    <>
      <Header home="scroll" />
      <Landing2 />
      <Services />
      <Plan setPlan={setPlan} />
      <HomeContact name="contactus" plan={plan} />
    </>
  );
}

export default Home;
