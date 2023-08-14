import Services from "../../Components/Services/Services";
import Landing2 from "../../Components/landing2/Landing2";
import HomeContact from "../../Components/HomeContactUS/HomeContact";
import Header from "../../Components/header/Header";
import Plan from "../../Components/Plan/Plan";
import { useState } from "react";
function Home(Props) {
  const [plan, setPlan] = useState("");
  const { t, i18n, lang, setlang, setConatctButton } = Props;
  return (
    <>
      <Header
        home="scroll"
        i18n={i18n}
        t={t}
        lang={lang}
        setlang={setlang}
        setConatctButton={setConatctButton}
      />
      <Landing2 t={t} lang={lang} setlang={setlang} />
      <Services setConatctButton={setConatctButton} t={t} lang={lang} />
      <Plan setPlan={setPlan} t={t} lang={lang} />
      <HomeContact name="contactus" plan={plan} t={t} lang={lang} />
    </>
  );
}

export default Home;
