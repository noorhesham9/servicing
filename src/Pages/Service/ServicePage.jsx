import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import SubLanding from "../../Components/SubLandingRoutes/SubLanding";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";
import Plan from "../../Components/Plan/Plan";
import { useEffect, useState } from "react";
function ServicePage(Props) {
  const { title, img, services } = Props;
  const [plan, setPlan] = useState("");
  return (
    <>
      <Header home="route" />
      <SubLanding title={title} img={img} />
      <Plan setPlan={setPlan} />
      {/* <About /> */}
      {/* <Contact /> */}
      <HomeContact name="contactus" services={services} plan={plan} />
    </>
  );
}

export default ServicePage;
