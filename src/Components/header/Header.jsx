import { Box, Container, IconButton, List, ListItem } from "@mui/material";
import { Link as LinkScroll } from "react-scroll";
import "./header.css";
import { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Link as LinkRouter } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion, useCycle, useIsPresent } from "framer-motion";
import { useDimensions } from "./use-Dimensions";
import { MenuToggle } from "./MenuToggle";
import { infoCard } from "../../Constants";

const HeightAR = () => {
  return `${infoCard.length * 33}px`;
};
const HeightEN = () => {
  return `${infoCard.length * 36}px`;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 256px 38px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const services = {
  open: {
    display: "block",
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.6,
    },
  },
  closed: {
    display: "none",
    y: "-50px",
    opacity: 0,
    transition: {
      display: {
        delay: 0.8,
      },
      duration: 0.6,
    },
  },
};

// const services2 = {
//   open: {
//     height: `${lang === "EN" ? HeightAR() : HeightEN()}`,
//     transition: {
//       duration: 0.4,
//     },
//   },
//   closed: {
//     height: "0px",
//     transition: {
//       duration: 0.6,
//     },
//   },
// };

const Header = (Props) => {
  const { home, i18n, t, lang, setlang, setConatctButton } = Props;
  const [top, settop] = useState(true);

  const services2 = {
    open: {
      height: `${lang === "en" ? HeightEN() : HeightAR()}`,
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      height: "0px",
      transition: {
        duration: 0.6,
      },
    },
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        settop(false);
      } else {
        settop(true);
      }
    });
  }, []);
  const [themeWhite, setThemeWhite] = useState(true);
  const [langEnglish, setLangEnglish] = useState(lang === "en");
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [servicesOpen, PlusOpen] = useCycle(false, true);
  const [servicesOpen2, PlusOpen2] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  // if(lang === 'en'){
  //   setLangEnglish(true)
  // }else{
  //   setLangEnglish(false)
  // }

  const changeLang = () => {
    i18n.changeLanguage(langEnglish ? "ar" : "en");
    setlang();
    setLangEnglish(!langEnglish);
  };

  const isPresent = useIsPresent();
  return (
    <Box
      width={"100%"}
      className={top ? "header headerTop" : "header headernotTop"}
      position={"fixed"}
      sx={{
        transition: "var(--transition)",
        height: "75px",
        // direction: lang ? "ltr" : "rtl",
      }}>
      <Container
        className="flex spaceBetween containHeader "
        sx={{
          height: "100%",
          alignItems: "center",
        }}>
        {home === "route" ? (
          <LinkRouter
            onClick={() => {
              setConatctButton(false);
            }}
            to="/"
            className="logo">
            Seervo
          </LinkRouter>
        ) : (
          <LinkScroll
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              setConatctButton(false);
            }}
            smooth={true}
            duration={800}
            to="home"
            className="logo">
            {/* <img
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "60px",
                color: "black",
              }}
              src={logo}
              alt=""
            /> */}
            <svg
              style={{
                width: "100%",
                height: "100%",
                fill: "#058648",
                stroke: "white",
                strokeWidth: "3px",
                maxHeight: "60px",
              }}
              className="svvvg"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="500"
              zoomAndPan="magnify"
              viewBox="0 0 375 374.999991"
              height="500"
              preserveAspectRatio="xMidYMid meet"
              version="1.0">
              <path
                d="M 158.253906 192.453125 L 170.902344 192.453125 L 170.902344 205.101562 L 158.253906 205.101562 Z M 158.253906 208.878906 L 170.902344 208.878906 L 170.902344 221.523438 L 158.253906 221.523438 Z M 139.652344 208.878906 L 152.296875 208.878906 L 152.296875 221.523438 L 139.652344 221.523438 Z M 139.652344 192.453125 L 152.296875 192.453125 L 152.296875 205.101562 L 139.652344 205.101562 Z M 153.601562 127.496094 L 55.035156 244.871094 C 55.648438 246.304688 56.308594 247.738281 56.96875 249.160156 L 153.601562 158.46875 L 278.074219 261.671875 C 290.207031 264.265625 301.257812 264.277344 310.683594 261.644531 L 225 188.589844 L 225 165.363281 L 214.84375 165.363281 L 214.84375 179.894531 Z M 153.601562 127.496094 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                d="M 315.660156 195.746094 L 342.167969 224.757812 C 341.613281 227.480469 340.941406 230.042969 340.121094 232.472656 L 309.644531 201.003906 Z M 287.71875 165.171875 L 311.871094 191.589844 L 305.753906 196.933594 L 277.574219 167.734375 Z M 250.71875 139.894531 L 266.746094 142.234375 L 283.929688 161.042969 L 273.609375 163.648438 Z M 305.988281 204.207031 L 337.894531 238.152344 C 336.269531 241.695312 334.324219 244.871094 332.097656 247.664062 L 296.265625 212.683594 Z M 272.613281 168.992188 L 302.109375 200.125 L 292.183594 208.789062 L 255.226562 173.382812 Z M 214.785156 134.652344 L 244.128906 138.925781 L 268.722656 164.863281 L 251.011719 169.328125 Z M 292.621094 215.859375 L 328.90625 251.207031 C 325.601562 254.484375 321.808594 257.105469 317.59375 259.082031 C 306.234375 249.597656 282.667969 229.121094 280.035156 226.835938 Z M 250.261719 174.640625 L 288.582031 211.9375 L 275.761719 223.132812 L 230.210938 183.554688 L 230.210938 179.691406 Z M 165.691406 127.496094 L 208.210938 133.6875 L 246.105469 170.574219 L 230.210938 174.582031 L 230.210938 159.976562 L 209.382812 159.976562 L 209.382812 165.464844 Z M 165.691406 127.496094 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                fill="#ffbd59"
                d="M 157.976562 118.875 L 148.242188 86.132812 L 140.71875 125.375 C 137.296875 125.898438 133.914062 126.707031 130.589844 127.757812 L 105.753906 99.160156 L 114.316406 135.328125 C 110.539062 137.683594 106.921875 140.375 103.558594 143.363281 L 71.382812 128.242188 L 91.789062 156.242188 C 88.847656 160.238281 86.242188 164.527344 84.046875 169.019531 L 52.503906 170.339844 L 78.570312 183.890625 C 77.925781 186.378906 77.414062 188.914062 77.019531 191.488281 C 76.566406 194.503906 76.316406 197.460938 76.246094 200.359375 L 47.21875 210.179688 L 72.714844 214.042969 L 76.609375 209.199219 L 152.605469 118.011719 Z M 187.003906 123.367188 L 191.304688 94.445312 L 174.472656 121.4375 Z M 218.851562 128.285156 L 230.003906 115.40625 L 210.875 127.054688 Z M 218.851562 128.285156 "
                fillOpacity="1"
                fillRule="evenodd"
              />
              <path
                d="M 131.804688 345.265625 C 45.15625 314.378906 0 218.976562 30.929688 132.164062 C 61.855469 45.367188 157.1875 0.0351562 243.835938 30.90625 C 329.875 61.570312 375 155.863281 345.332031 242.175781 C 365.808594 160.414062 316.496094 73.558594 238.523438 45.777344 C 160.085938 17.835938 74.035156 58.175781 46.324219 135.910156 C 23.507812 199.949219 47.410156 269.386719 100.410156 307.488281 C 137.382812 327.554688 166.847656 328.140625 190.5 313.664062 C 176.257812 314.601562 162.089844 315.011719 148.476562 311.484375 C 102.019531 299.449219 91.570312 245.644531 140.691406 231.476562 C 159.585938 226.03125 199.839844 239.746094 231.222656 251.878906 C 274.75 268.714844 294.011719 279.558594 340.867188 253.753906 L 340.835938 253.785156 C 306.46875 334.171875 215.132812 374.964844 131.804688 345.265625 "
                fillOpacity="1"
                fillRule="evenodd"
              />
            </svg>
          </LinkScroll>
        )}

        <Box
          sx={{
            gap: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "--title-color",
          }}>
          <List
            className="listLInks_Header"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              letterSpacing: "0.6px",
            }}>
            <ListItem>
              {home === "route" ? (
                <LinkRouter
                  onClick={() => {
                    setConatctButton(false);
                  }}
                  className={` servicesLink_nav  ${
                    lang === "en"
                      ? "english-text  linknav"
                      : "arabic-text linknav"
                  }`}
                  to="/">
                  {t("home")}
                </LinkRouter>
              ) : (
                <LinkScroll
                  onClick={() => {
                    setConatctButton(false);
                  }}
                  smooth={true}
                  duration={800}
                  className={` servicesLink_nav  ${
                    lang === "en"
                      ? "english-text  linknav"
                      : "arabic-text linknav"
                  }`}
                  to="home">
                  {t("home")}
                </LinkScroll>
              )}
            </ListItem>

            {home === "route" ? (
              <ListItem className="servicesListItem">
                <a
                  onClick={PlusOpen}
                  className={` servicesLink_nav  ${
                    lang === "en"
                      ? "english-text  linknav"
                      : "arabic-text linknav"
                  }`}>
                  {t("landingBtnOne")}
                </a>

                <div href="#" className="blusServices" onClick={PlusOpen}>
                  {servicesOpen ? "-" : "+"}
                </div>

                <Box
                  sx={{
                    display: "none",
                  }}
                  component={motion.div}
                  variants={services}
                  className={
                    servicesOpen ? "open sevicesBox" : "closed sevicesBox"
                  }
                  animate={servicesOpen ? "open" : "closed"}>
                  <List className="sevicesListBox">
                    {infoCard.map(({ id, route, title }) => {
                      return (
                        <ListItem
                          onClick={() => {
                            setConatctButton(false);
                          }}
                          className={` ListItemServices desktopnavservice  ${
                            lang === "en" ? "english-text  " : "arabic-text "
                          }`}
                          key={id}>
                          <LinkRouter
                            onClick={PlusOpen}
                            className="LInkRouterServices desktopnavserviceLInk"
                            to={route}>
                            {t(title)}
                          </LinkRouter>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </ListItem>
            ) : (
              <ListItem className="servicesListItem">
                <LinkScroll
                  onClick={() => {
                    setConatctButton(false);
                  }}
                  smooth={true}
                  duration={800}
                  className={` servicesLink_nav  ${
                    lang === "en"
                      ? "english-text  linknav"
                      : "arabic-text linknav"
                  }`}
                  to="services">
                  {t("landingBtnOne")}
                </LinkScroll>
                <div href="#" className="blusServices" onClick={PlusOpen}>
                  {servicesOpen ? "-" : "+"}
                </div>

                <Box
                  sx={{
                    display: "none",
                  }}
                  component={motion.div}
                  variants={services}
                  className={
                    servicesOpen ? "open sevicesBox" : "closed sevicesBox"
                  }
                  animate={servicesOpen ? "open" : "closed"}>
                  <List className="sevicesListBox">
                    {infoCard.map(({ id, route, title }) => {
                      return (
                        <ListItem
                          className={` ListItemServices desktopnavservice  ${
                            lang === "en" ? "english-text  " : "arabic-text "
                          }`}
                          key={id}>
                          <LinkRouter
                            onClick={PlusOpen}
                            className="LInkRouterServices desktopnavserviceLInk"
                            to={route}>
                            {t(title)}
                          </LinkRouter>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </ListItem>
            )}

            {/* <ListItem className="servicesListItem">
              <LinkScroll
                smooth={true}
                duration={800}
                className={` servicesLink_nav  ${
                  lang ? "english-text  linknav" : "arabic-text linknavAR"
                }`}
                to="services">
                {t("landingBtnOne")}
              </LinkScroll>
              <div href="#" className="blusServices" onClick={PlusOpen}>
                {servicesOpen ? "-" : "+"}
              </div>

              <Box
                sx={{
                  display: "none",
                }}
                component={motion.div}
                variants={services}
                className={
                  servicesOpen ? "open sevicesBox" : "closed sevicesBox"
                }
                animate={servicesOpen ? "open" : "closed"}>
                <List className="sevicesListBox">
                  {infoCard.map(({ id, route, title }) => {
                    return (
                      <ListItem
                        className={` ListItemServices desktopnavservice  ${
                          lang ? "english-text  " : "arabic-text "
                        }`}
                        key={id}>
                        <LinkRouter
                          onClick={PlusOpen}
                          className="LInkRouterServices desktopnavserviceLInk"
                          to={route}>
                          {t(title)}
                        </LinkRouter>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </ListItem> */}

            <ListItem>
              <LinkScroll
                smooth={true}
                duration={800}
                className={` servicesLink_nav  ${
                  lang === "en"
                    ? "english-text  linknav"
                    : "arabic-text linknav"
                }`}
                to="contactus">
                {t("ContactUS")}
              </LinkScroll>
            </ListItem>
          </List>
          <IconButton
            className={isOpen ? "openToggle " : "closedToggle "}
            onClick={changeLang}
            sx={{
              color: "white",
              fontFamily: "var(--second-font)",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "var(--transition)",
            }}>
            {langEnglish ? "AR" : "EN"}
          </IconButton>
          {/* <IconButton
            className={isOpen ? "openToggle " : "closedToggle "}
            onClick={ThemeHandler}
            sx={{
              color: "white",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "var(--transition)",
              "&:hover": {
                color: "var(--title-color)",
                backgroundColor: "transparent",
              },
            }}>
            {themeWhite ? <WbSunnyIcon /> : <Brightness3Icon />}
          </IconButton> */}

          <motion.nav
            initial={false}
            className={isOpen ? "open" : "closed"}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}>
            <MenuToggle
              toggle={() => toggleOpen()}
              className={
                isOpen ? "openToggle nav__button" : "closedToggle nav__button"
              }
            />
            <motion.div
              style={{
                overflow: "hidden",
                background: "#0a1411",
                position: "absolute",
                height: "100vh",
                right: "0",
                zIndex: "-1",
                top: "0",
              }}
              className="background"
              variants={sidebar}>
              <Box
                style={{
                  fontSize: "18px",
                  width: "100%",
                  height: "100%",
                  padding: "80px 0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <List
                  className="listNavLinks"
                  sx={{
                    padding: "20px",
                    zIndex: "10000",
                    letterSpacing: "0.6px",
                  }}>
                  <ListItem className={`${lang === "en" ? "liEN" : "liAr"}`}>
                    {home === "route" ? (
                      <LinkRouter
                        onClick={toggleOpen}
                        className={`${
                          lang === "en"
                            ? "english-text  linknavNH"
                            : "arabic-text linknav"
                        }`}
                        to="/">
                        {t("home")}
                      </LinkRouter>
                    ) : (
                      <LinkScroll
                        onClick={toggleOpen}
                        smooth={true}
                        duration={800}
                        className={`   ${
                          lang === "en"
                            ? "english-text  linknavNH"
                            : "arabic-text linknav"
                        }`}
                        to="home">
                        {t("home")}
                      </LinkScroll>
                    )}
                  </ListItem>
                  <ListItem className={`${lang === "en" ? "liEN" : "liAr"}`}>
                    <LinkScroll
                      onClick={toggleOpen}
                      smooth={true}
                      duration={800}
                      className={` homeLink_nav linknavNHFS ${
                        lang === "en"
                          ? "english-text  linknavNH"
                          : "arabic-text linknav"
                      }`}
                      to="services">
                      {t("landingBtnOne")}
                    </LinkScroll>
                    <div href="#" className="blusServices2" onClick={PlusOpen2}>
                      {servicesOpen2 ? "-" : "+"}
                    </div>
                  </ListItem>

                  <motion.div
                    variants={services2}
                    animate={servicesOpen2 ? "open" : "closed"}
                    className={"containsevrviceLinks"}>
                    {infoCard.map(({ id, route, title }) => {
                      return (
                        <ListItem
                          className={
                            lang === "en"
                              ? "ListItemServicesEN"
                              : "ListItemServicesAR"
                          }
                          key={id}>
                          <LinkRouter
                            onClick={toggleOpen}
                            // className="LInkRouterServices link__nav"
                            className={` LInkRouterServices link__nav ${
                              lang === "en" ? "english-text  " : "arabic-text "
                            }`}
                            to={route}>
                            {t(title)}
                          </LinkRouter>
                        </ListItem>
                      );
                    })}
                  </motion.div>
                  <ListItem className={`${lang === "en" ? "liEN" : "liAr"}`}>
                    <LinkScroll
                      onClick={toggleOpen}
                      smooth={true}
                      duration={800}
                      className={` homeLink_nav linknavNHFS ${
                        lang === "en"
                          ? "english-text  linknavNH"
                          : "arabic-text linknav"
                      }`}
                      to="contactus">
                      {t("ContactUS")}
                    </LinkScroll>
                  </ListItem>
                </List>
              </Box>
            </motion.div>
          </motion.nav>
        </Box>
      </Container>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.7, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.7, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </Box>
  );
};

export default Header;
