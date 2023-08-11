import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import SubLanding from "../../Components/SubLandingRoutes/SubLanding";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";
import Plan from "../../Components/Plan/Plan";
function ServicePage(Props) {
  const { title, img, services } = Props;
  return (
    <>
      <Header home="route" />
      <SubLanding title={title} img={img} />
      <Plan />
      {/* <About /> */}
      {/* <Contact /> */}
      <HomeContact name="contactus" services={services} />
    </>
  );
}

export default ServicePage;
