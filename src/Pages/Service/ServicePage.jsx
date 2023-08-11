import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import ServCardInfo from "../../Components/ServCardInfo/ServCardInfo";
import SubLanding from "../../Components/SubLandingRoutes/SubLanding";

function ServicePage(Props) {
  const { title, img } = Props;
  return (
    <>
      <SubLanding title={title} img={img} />
      <About />
      {/* <Contact /> */}
    </>
  );
}

export default ServicePage;
