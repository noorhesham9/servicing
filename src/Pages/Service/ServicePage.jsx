import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import SubLanding from "../../Components/SubLandingRoutes/SubLanding";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
<<<<<<< Updated upstream
import Header from "../../Components/header/Header";

=======
import Plan from "../../Components/Plan/Plan";
>>>>>>> Stashed changes
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
