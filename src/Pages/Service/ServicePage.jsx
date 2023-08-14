import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import SubLanding from "../../Components/SubLandingRoutes/SubLanding";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";
import Plan from "../../Components/Plan/Plan";
import { useEffect, useState } from "react";
function ServicePage(Props) {
  const [plan, setPlan] = useState("");
  const { title, img, services, t, i18n, lang, setlang } = Props;
  return (
    <>
      <Header home="route" i18n={i18n} t={t} lang={lang} setlang={setlang} />
      <SubLanding title={title} img={img} lang={lang} t={t} />
      <Plan setPlan={setPlan} t={t} lang={lang} />
      <HomeContact
        name="contactus"
        services={services}
        plan={plan}
        lang={lang}
        t={t}
      />
    </>
  );
}

export default ServicePage;
