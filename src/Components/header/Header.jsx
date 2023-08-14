import { Box, Container, IconButton, List, ListItem } from "@mui/material";
import { Link as LinkScroll } from "react-scroll";
import "./header.css";
import { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Link as LinkRouter } from "react-router-dom";
import { useRef, useEffect } from "react";
import {
  delay,
  easeInOut,
  motion,
  useCycle,
  useIsPresent,
} from "framer-motion";
import { useDimensions } from "./use-Dimensions";
import { MenuToggle } from "./MenuToggle";
import { infoCard } from "../../Constants";

const Height = () => {
  return `${infoCard.length * 37}px`;
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

const services2 = {
  open: {
    height: `${Height()}`,
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

const Header = (Props) => {
  const { home, i18n, t, lang, setlang, setConatctButton } = Props;
  const changeLang = () => {
    i18n.changeLanguage(langEnglish ? "ar" : "en");
    setlang(!lang);
    setLangEnglish(!langEnglish);
  };

  const [top, settop] = useState(true);
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
  const [langEnglish, setLangEnglish] = useState(true);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [servicesOpen, PlusOpen] = useCycle(false, true);
  const [servicesOpen2, PlusOpen2] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const ThemeHandler = () => {
    setThemeWhite(!themeWhite);
  };
  // const langHandler = () => {
  //   setLangEnglish(!langEnglish);
  // };
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
            Logo
          </LinkRouter>
        ) : (
          <LinkScroll
            onClick={() => {
              setConatctButton(false);
            }}
            smooth={true}
            duration={800}
            to="home"
            className="logo">
            Logo
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
                    lang ? "english-text  linknav" : "arabic-text linknavAR"
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
                    lang ? "english-text  linknav" : "arabic-text linknavAR"
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
                    lang ? "english-text  linknav" : "arabic-text linknavAR"
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
                  lang ? "english-text  linknav" : "arabic-text linknavAR"
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
                  fontSize: "50px",
                  width: "100%",
                  height: "100%",
                  padding: "80px 0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <List
                  sx={{
                    padding: "20px",
                    letterSpacing: "0.6px",
                  }}>
                  <ListItem>
                    {home === "route" ? (
                      <LinkRouter
                        onClick={toggleOpen}
                        className={` homeLink_nav linknavNHFS ${
                          lang
                            ? "english-text  linknavNH"
                            : "arabic-text linknavAR"
                        }`}
                        to="/">
                        {t("home")}
                      </LinkRouter>
                    ) : (
                      <LinkScroll
                        onClick={toggleOpen}
                        smooth={true}
                        duration={800}
                        // className="homeLink_nav linknavNH"
                        className={` homeLink_nav linknavNHFS ${
                          lang
                            ? "english-text  linknavNH"
                            : "arabic-text linknavAR"
                        }`}
                        to="home">
                        {t("home")}
                      </LinkScroll>
                    )}
                  </ListItem>
                  <ListItem>
                    <LinkScroll
                      onClick={toggleOpen}
                      smooth={true}
                      duration={800}
                      className={` homeLink_nav linknavNHFS ${
                        lang
                          ? "english-text  linknavNH"
                          : "arabic-text linknavAR"
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
                        <ListItem className="ListItemServices" key={id}>
                          <LinkRouter
                            onClick={toggleOpen}
                            // className="LInkRouterServices link__nav"
                            className={` LInkRouterServices link__nav ${
                              lang ? "english-text  " : "arabic-text "
                            }`}
                            to={route}>
                            {t(title)}
                          </LinkRouter>
                        </ListItem>
                      );
                    })}
                  </motion.div>
                  <ListItem>
                    <LinkScroll
                      onClick={toggleOpen}
                      smooth={true}
                      duration={800}
                      className={` homeLink_nav linknavNHFS ${
                        lang
                          ? "english-text  linknavNH"
                          : "arabic-text linknavAR"
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
