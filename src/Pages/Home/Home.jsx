import Services from "../../Components/Services/Services";
import Landing2 from "../../Components/landing2/Landing2";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";
import Plan from "../../Components/Plan/Plan";
import { useState } from "react";
function Home(Props) {
  const [plan, setPlan] = useState("");
  const { t, i18n } = Props;
  return (
    <>
      <Header home="scroll" i18n={i18n} t={t} />
      <Landing2 t={t} />
      <Services t={t} />
      <Plan setPlan={setPlan} t={t} />
      <HomeContact name="contactus" plan={plan} setPlan={setPlan} />
    </>
  );
}

export default Home;
