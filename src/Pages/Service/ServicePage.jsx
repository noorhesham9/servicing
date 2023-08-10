import Contact from "../../Components/Contact/Contact";
import ServCardInfo from "../../Components/ServCardInfo/ServCardInfo";
import SubLanding from "../../Components/SubLandingRoutes/SubLanding";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
function ServicePage(Props) {
  const { title, img } = Props;
  return (
    <>
      <SubLanding title={title} img={img} />
      <HomeContact />
    </>
  );
}

export default ServicePage;
