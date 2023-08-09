import { Box, Container, IconButton, List, ListItem } from "@mui/material";
import { Link as LinkScroll } from "react-scroll";
import "./header.css";
import { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Link as LinkRouter } from "react-router-dom";
import { useRef } from "react";
import { delay, motion, useCycle } from "framer-motion";
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

const Header = () => {
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
  const langHandler = () => {
    setLangEnglish(!langEnglish);
  };
  return (
    <Box
      width={"100%"}
      borderRadius={"10px"}
      className="header"
      position={"fixed"}
      sx={{
        transition: "var(--transition)",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        height: "75px",
      }}>
      <Container
        className="flex spaceBetween containHeader "
        sx={{
          height: "100%",
          alignItems: "center",
        }}>
        <LinkScroll to="#home" className="logo">
          Logo
        </LinkScroll>

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
              <LinkScroll className="homeLink_nav linknav" to="#home">
                Home
              </LinkScroll>
            </ListItem>
            <ListItem className="servicesListItem">
              <LinkScroll className="servicesLink_nav linknav" to="#services">
                Services
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
                        className="ListItemServices desktopnavservice"
                        key={id}>
                        <LinkRouter
                          className="LInkRouterServices desktopnavserviceLInk"
                          to={route}>
                          {title}
                        </LinkRouter>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </ListItem>
            <ListItem>
              <LinkScroll className="contactusLink_nav linknav" to="#contactus">
                ContactUS
              </LinkScroll>
            </ListItem>
          </List>
          <IconButton
            className={isOpen ? "openToggle " : "closedToggle "}
            onClick={langHandler}
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
            {langEnglish ? "EN" : "AR"}
          </IconButton>
          <IconButton
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
          </IconButton>

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
                    <LinkScroll className="homeLink_nav linknavNH" to="#home">
                      Home
                    </LinkScroll>
                  </ListItem>
                  <ListItem>
                    <LinkScroll
                      className="servicesLink_nav linknavNH"
                      to="#services">
                      Services
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
                            className="LInkRouterServices link__nav"
                            to={route}>
                            {title}
                          </LinkRouter>
                        </ListItem>
                      );
                    })}
                  </motion.div>
                  <ListItem>
                    <LinkScroll
                      className="contactusLink_nav linknavNH"
                      to="#contactus">
                      ContactUS
                    </LinkScroll>
                  </ListItem>
                </List>
              </Box>
            </motion.div>
          </motion.nav>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
