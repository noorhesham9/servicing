import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import ServCardInfo from "../../Components/ServCardInfo/ServCardInfo";
import SubLanding from "../../Components/SubLandingRoutes/SubLanding";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";

function ServicePage(Props) {
  const { title, img, services } = Props;
  return (
    <>
      <Header home="route" />
      <SubLanding title={title} img={img} />
      <About />
      {/* <Contact /> */}
      <HomeContact name="contactus" services={services} />
    </>
  );
}

export default ServicePage;
