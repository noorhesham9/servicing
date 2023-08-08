import Contact from "../../Components/Contact/Contact";
import ServCardInfo from "../../Components/ServCardInfo/ServCardInfo";

function ServicePage(Props) {
  const { title } = Props;
  return (
    <>
      <ServCardInfo title={title} />
      <Contact />
    </>
  );
}

export default ServicePage;
