import { Box, Container, IconButton, List, ListItem } from "@mui/material";
import { Link } from "react-scroll";
import "./header.css";
import { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-Dimensions";
import { MenuToggle } from "./MenuToggle";

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
      // delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const [themeWhite, setThemeWhite] = useState(true);
  const [langEnglish, setLangEnglish] = useState(true);

  const [isOpen, toggleOpen] = useCycle(false, true);
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
        <Link to="#home" className="logo">
          Logo
        </Link>

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
              <Link className="homeLink_nav linknav" to="#home">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link className="servicesLink_nav linknav" to="#services">
                Services
              </Link>
            </ListItem>
            <ListItem>
              <Link className="contactusLink_nav linknav" to="#contactus">
                ContactUS
              </Link>
            </ListItem>
          </List>
          <IconButton
            onClick={langHandler}
            sx={{
              color: "var(--button-color)",
              fontFamily: "var(--second-font)",
              backgroundColor: "var(--primary-color)",
              width: "40px",
              height: "40px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "var(--transition)",
              boxShadow: "1.5px 1.5px var(--primary-color-shadow)",
              "&:hover": {
                color: "var(--title-color)",
                backgroundColor: "transparent",
              },
            }}>
            {langEnglish ? "EN" : "AR"}
          </IconButton>
          <IconButton
            onClick={ThemeHandler}
            sx={{
              boxShadow: "1.5px 1.5px var(--primary-color-shadow)",
              color: "var(--button-color)",
              fontFamily: "var(--second-font)",
              backgroundColor: "var(--primary-color)",
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
            <MenuToggle toggle={() => toggleOpen()} />
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
              variants={sidebar}></motion.div>
          </motion.nav>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
